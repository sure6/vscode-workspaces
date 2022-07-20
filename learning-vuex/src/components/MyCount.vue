<template>
  <div>
    <h2>current sum is :{{sum}}  </h2>
    <!-- <h2>current sum is :{{add}}  </h2> -->
    <h2>current sum*10 is :{{bigSum}}  </h2>
    <h3> I learn {{subject}} in {{school}} </h3>
    <h3> number of person: {{personList.length}} </h3>
    <!-- <h3> I learn {{kemu}} in {{xuexiao}} </h3> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前求和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
export default {
  name: "MyCount",
  data() { 
    return {
      n: 1,
    };
  },
  computed:{
    ...mapState("CountOption",["sum","subject","school"]),
    ...mapState("PersonOption",["personList"]),
    // ...mapState(["CountOption","personList"]),
    ...mapGetters("CountOption",["bigSum"]),
  },
  methods: {

    ...mapMutations("CountOption",{increment:"ADD",decrement:"SUB"}),
    // ...mapMutations({increment:"ADD",decrement:"SUB"}),

    ...mapActions("CountOption", {incrementOdd:"addOdd",incrementWait:"addWait"}),
    // ...mapActions({incrementOdd:"addOdd",incrementWait:"addWait"}),

  },
};
</script>


