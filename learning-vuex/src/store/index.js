//in  this file, use Vuex to create core store

//import Vuex
import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import { nanoid } from "nanoid";
Vue.use(Vuex)
// prepare actions---use action in response components
const CountOption={
    namespaced:true,
    actions:{
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
    },
    mutations :{
        ADD(state,value){
            console.log('add is invoked in mutations',state ,value);
            state.sum+=value
        },
        SUB(state,value){
            state.sum-=value
        },
    },
    state :{
        sum: 0,
        school:"uow",
        subject:"CSCI927",
    },
    getters:{
        bigSum(state){
            return state.sum*10
        }
    },
}

const PersonOption={
    namespaced:true,
    actions:{
        addPersonLee(context,value){
            if(value.name.indexOf('lee') === 0){
                context.commit("ADD_PERSON",value)
            }else{
                alert("the first name of add person must be Lee")
            }
        },
        addPersonServer(context){
            axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
                response=>{
                    context.commit("ADD_PERSON",{id:nanoid(),name:response.data})
                },
                error=>{
                    alert(error.message)
                }
            )
        }
    },
    mutations :{
        ADD_PERSON(state,value){
            state.personList.unshift(value)
        }
    },
    state: {
        personList:[
            {id:"001",name:"Jerry"}
        ]
    },
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    },
}


//create store
const store =new Vuex.Store({
  modules:{
    CountOption:CountOption,
    PersonOption:PersonOption
  }
})

export default store;