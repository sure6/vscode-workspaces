<template>
  <div>
    <h1>Person List</h1>
    <input type="text" placeholder="please input name" v-model="name" />
    <button @click="add">add</button>
    <ul>
      <li v-for="(p, index) in personList" :key="index">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
import {nanoid} from "nanoid"
export default {
  name: "MyPerson",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["personList"]),
  },
  methods: {
    add() {
        const personObj={id:nanoid(), name:this.name}
        this.$store.commit('ADD_PERSON',personObj)
        this.name=""
    },
  },
};
</script>

<style>
</style>