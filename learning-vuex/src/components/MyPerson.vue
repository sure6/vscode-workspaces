<template>
  <div>
    <h1>{{sum}}</h1>
    <h1>first person name is :{{firstPersonName}}</h1>
    <h1>Person List</h1>
    <input type="text" placeholder="please input name" v-model="name" />
    <button @click="add">add</button>
    <button @click="addLee">addLee</button>
    <button @click="addPerson">addPerson</button>
    <ul>
      <li v-for="(p, index) in personList" :key="index">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from "nanoid"
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    personList(){
      return this.$store.state.PersonOption.personList
    },
    sum(){
      return this.$store.state.CountOption.sum
    },
    firstPersonName(){
      console.log( this.$store);
      return this.$store.getters["PersonOption/firstPersonName"]
    }
  },
  methods: {
    add() {
        const personObj={id:nanoid(), name:this.name}
        this.$store.commit('PersonOption/ADD_PERSON',personObj)
        this.name=""
    },
    addLee(){
        const personObj={id:nanoid(), name:this.name}
        this.$store.dispatch('PersonOption/addPersonLee',personObj)
        this.name=""
    },
    addPerson(){
      this.$store.dispatch("PersonOption/addPersonServer")
    }
  },
};
</script>

<style>
</style>