//in  this file, use Vuex to create core store

//import Vuex
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
// prepare actions---use action in response components
const actions={
    // add:function(context,value){
    //     console.log('add is invoked in actions',context ,value);
    //     context.commit('ADD',value)
    // },
    // sub(context,value){
    //     context.commit('SUB',value)
    // },
    addOdd(context,value){
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    }
}
// prepare mutations---use to operate data  (state)
const mutations ={
    ADD(state,value){
        console.log('add is invoked in mutations',state ,value);
        state.sum+=value
    },
    SUB(state,value){
        state.sum-=value
    }
}
// prepare state---use to store data 
const state ={
    sum: 0,
}
// prepare getters---use to process state
const getters={
    bigSum(state){
        return state.sum*10
    }
}

//create store
const store =new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

export default store;