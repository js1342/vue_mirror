import Axios from 'axios'

export default{
    namespaced:true,
    state:{
        ClothesList:null,
    },
    getters:{
        isLoad:state=>{
            return state.ClothesList !== null
        },
        getClothes:(state,getters)=>{
            if(getters.isLoad)
                return state.ClothesList.data
            return {error:'no clothes loaded'}
        },
        getCategories:(state, getters) => input =>{
            if (getters.isLoad){
                let categories = ["상의","하의","아우터","한벌"]
                for(var i = 0; i < categories.length; i++){
                    if(categories[i].localeCompare(input) === 0){
                        return getters.getClothes.filter(getClothes => getClothes.category.localeCompare(input) === 0) 
                    }
                }
            }
            return {'error':'Undefined Categories', input:input}
        },
        getPaginatedCategories:(state,getters) => (input, page, pageSize)=>{
            let arr = getters.getCategories(input)
            let paginated = arr.slice(pageSize * page, pageSize * (page + 1))
            return {
                categories: paginated,
                limit:(arr.length % pageSize === 0) ? arr.length / pageSize - 1 : Math.floor(arr.length / pageSize)
            }
        },
    },
    mutations: {
        updateClothes:function(state, data){
            state.ClothesList = data
        },
    },
    actions:{
        async LoadClothes({commit,rootGetters}){
            let reqHeader = await{ headers:{
                'Content-Type':'application/json',
                'Authorization': rootGetters['account/idToken']
                }
            }
            const res = await Axios.get("https://zizqnx33mi.execute-api.us-east-2.amazonaws.com/dev/clothes", reqHeader)
            commit('updateClothes',res)
        }
    },
}