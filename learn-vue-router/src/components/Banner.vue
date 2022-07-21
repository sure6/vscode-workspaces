<template>
  <div>
    <h2>Vue Router Demo</h2>
    <button @click="back">back</button>
    <button @click="forward">forward</button>
    <button @click="test">test go</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Banner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    test(){
      // 控制浏览器往前进几步, 输入参数几次
      this.$router.go(3)
    }
  },
};
</script>
