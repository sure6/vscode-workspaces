<template>
  <div>
    <h2>current sum is :{{sum}}  </h2>
    <!-- <h2>current sum is :{{add}}  </h2> -->
    <h2>current sum*10 is :{{bigSum}}  </h2>
    <h3> I learn {{subject}} in {{school}} </h3>
    <!-- <h3> I learn {{kemu}} in {{xuexiao}} </h3> -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "MyCount",
  data() { 
    return {
      n: 1,
    };
  },
  computed:{
    ...mapState(["sum","subject","school"]),
    // ...mapState({add:"sum",kemu:"subject",xuexiao:"school"}),
    ...mapGetters(["bigSum"]),
    // ...mapGetters({bigSum:"bigSum"}),
  },
  methods: {
    increment() {
      // this.sum += this.n;
      // this.$store.dispatch('add',this.n);
      this.$store.commit('ADD',this.n);
    },
    decrement() {
      // this.sum -= this.n;
        // this.$store.dispatch('sub',this.n);
      this.$store.commit('SUB',this.n);
    },
    incrementOdd() {
      // if (this.$store.state.sum % 2) {
      //   this.$store.dispatch('add',this.n);
      // }
      this.$store.dispatch('addOdd',this.n);
    },
    incrementWait() {
      // setTimeout(() => {
      //   this.$store.dispatch('add',this.n);
      // }, 500);
      this.$store.dispatch('addWait',this.n);
    },
  },
};
</script>


