//in  this file, use Vuex to create core store

//import Vuex
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
// prepare actions---use action in response components
const actions={}
// prepare mutations---use to operate data  (state)
const mutations ={}
// prepare state---use to store data 
const state ={}


//create store
const store =new Vuex.Store({
    actions,
    mutations,
    state
})

export default store;