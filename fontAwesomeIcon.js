import Vue from 'vue';

import { library} from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

//import {} from "@fortawesome/free-regular-svg-icons"
import {faColumns,faTshirt,faSun,faRing, faUser} from "@fortawesome/free-solid-svg-icons";

//library.add();
library.add(faTshirt,faSun,faRing,faColumns,faUser);

Vue.component("font-awesome-icon", FontAwesomeIcon);