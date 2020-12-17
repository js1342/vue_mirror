<template>
  <div class="container">
  <div class="web-camera-container">
   <div>
    <div class="camera-download" v-on:click="backToHome">
      <font-awesome-icon class="icon-size" icon="home"/>
      
    </div>
    <div class="camera-download">
      <a v-if="isPhotoTaken && isCameraOpen" id="downloadPhoto" download="my-photo.jpg" class="button" role="button" @click="uploadFile">
        Upload
      </a>
      <a v-else>wait for capture</a>
    </div>
  </div>
  
    <div v-show="isCameraOpen && isLoading" class="camera-loading">
      <ul class="loader-circle">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  
    <div v-if="isCameraOpen" v-show="!isLoading" class="camera-box" :class="{ 'flash' : isShotPhoto }">
      
      <div class="camera-shutter" :class="{'flash' : isShotPhoto}"></div>
        
      <video v-show="!isPhotoTaken" ref="camera" :width="640" :height="480" autoplay></video>
      
      <canvas v-show="isPhotoTaken" id="photoTaken" ref="canvas" :width="640" :height="480"></canvas>
    </div>
  
  <div v-if="isCameraOpen && !isLoading" class="camera-shoot">
    <button type="button" class="button" @click="takePhoto">
      <img src="https://img.icons8.com/material-outlined/50/000000/camera--v2.png">
    </button>
  </div>
  
</div>
</div>

</template>

<script>
import AWS from 'aws-sdk'
export default {
    name:'CameraCapture',
    data() {
      return {
        isCameraOpen: false,
        isPhotoTaken: false,
        isShotPhoto: false,
        isLoading: false,
        link: '#'
      }
  },
  
  methods: {
    toggleCamera() {
      if(this.isCameraOpen) {
        this.isCameraOpen = false;
        this.isPhotoTaken = false;
        this.isShotPhoto = false;
        this.stopCameraStream();
      } else {
        this.isCameraOpen = true;
        this.createCameraElement();
      }
    },
    
    createCameraElement() {
      this.isLoading = true;
      
      const constraints = (window.constraints = {
				audio: false,
				video: true
			});

      
			navigator.mediaDevices
				.getUserMedia(constraints)
				.then(stream => {
          this.isLoading = false;
					this.$refs.camera.srcObject = stream;
        })
        // eslint-disable-next-line no-unused-vars
				.catch(error => {
          this.isLoading = false;
					alert("May the browser didn't support or there is some errors.");
				}); 
    },
    
    stopCameraStream() {
      let tracks = this.$refs.camera.srcObject.getTracks();

			tracks.forEach(track => {
				track.stop();
			});
    },
    
    takePhoto() {
      if(!this.isPhotoTaken) {
        this.isShotPhoto = true;

        const FLASH_TIMEOUT = 50;

        setTimeout(() => {
          this.isShotPhoto = false;
        }, FLASH_TIMEOUT);
      }
      
      this.isPhotoTaken = !this.isPhotoTaken;
      
      const context = this.$refs.canvas.getContext('2d');
      context.drawImage(this.$refs.camera, 0, 0, 640, 480);
    },
    
    downloadImage() {
      const download = document.getElementById("downloadPhoto");
      const canvas = document.getElementById("photoTaken").toDataURL("image/jpeg")
    .replace("image/jpeg", "image/octet-stream");
      download.setAttribute("href", canvas);
    },
    uploadFile() { 
      // aws configuration
      AWS.config.update({
        region: 'us-east-1',
        credentials: new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'us-east-1:5d8864f0-e6ef-47ac-8072-82b45e5d5627'
        })
      });

      //s3 버킷 설정
      const s3 = new AWS.S3({
        apiVersion: '2006-03-01',
        params: {
          Bucket: 'clothes-photo'
        }
      })
      console.log(s3)
      // 업로드 함수
      let canvas = document.getElementById("photoTaken")
      canvas.toBlob((blob)=>s3.upload({
        Key: "sending_image.jpeg",
        Body: blob,
        ACL: 'public-read'
      }, (err, data) => {
        if(err) {
          console.log(err)
          return alert('There was an error: ', err.message);
        }
        alert('Successfully uploaded photo.');
        console.log(data.Contents)
        console.log(data)
      }),"image/jpeg", 1.0)
      //this.$refs.canvas.toBlob
    },
    backToHome(){
      this.$emit("backHome", 0)
    }
  },
  mounted() {
    this.toggleCamera();
  }
}

</script>

<style scoped>

.container{
    display:flex;
    width:100%;
    margin:3rem auto;
    position:relative;
    justify-content: center;
    flex-direction: column;
}
.web-camera-container {
  margin:auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 0.7rem;
  width: 80%;
  height:80rem;
  margin-bottom:3rem;
}
.icon-size{
  font-size:5rem;
}
.camera-download{
  display:inline-flex;
  text-align:center;  
  align-items: center;
  justify-content: center;
  border-radius:0.7rem;
  border:0.2rem solid #dadada;
  justify-content: center;
  vertical-align: middle;
  color:#dadada;
  padding:2rem;
  outline:none;
  box-shadow:0 0 1rem #e6e6e6; 
  font-family: 'NanumBarunGothic';
  width:16rem;
  height:9rem;
  flex-direction: column;
  font-size:3rem;
  font-weight:bold;
  margin:1rem 3rem 0;
}
  
.camera-button {
  margin-bottom: 2rem;
}
  
.camera-box .camera-shutter {    
    opacity: 0;
    width: 80%;
    background-color: #dadada;

    margin-bottom:2rem;
    margin-top:4rem;
}
.camera-box .camera-shutter.flash {    
    opacity: 1;
}
  
.camera-shoot {
    margin: 6rem 0;
}

.camera-shoot button{
    height: 10rem;
    width: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
}
.camera-shoot button img {
    height: 6rem;
    object-fit: cover;
}
  
.camera-loading {
overflow: hidden;
height: 100%;
position: absolute;
width: 100%;
min-height: 150px;
margin: 3rem 0 0 -1.2rem;
}

.camera-loading ul{
    height: 100%;
    position: absolute;
    width: 100%;
    z-index: 999999;
    margin: 0;
}

.camera-loading ul .loader-circle{
    display: block;
    height: 14px;
    margin: 0 auto;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    transform: translateX(-50%);
    position: absolute;
    width: 100%;
    padding: 0;
}
.camera-loading ul .loader-circle li {
    display: block;
    float: left;
    width: 10px;
    height: 10px;
    line-height: 10px;
    padding: 0;
    position: relative;
    margin: 0 0 0 4px;
    background: #999;
    animation: preload 1s infinite;
    top: -50%;
    border-radius: 100%;
}
a, a:hover, a:focus, a:active {
      text-decoration: none;
      color: inherit;
 }
.camera-loading ul .loader-circle li:nth-child(2) {
    animation-delay: .2s;
}
.camera-loading ul .loader-circle li:nth-child(3) {
    animation-delay: .4s;
}
</style>