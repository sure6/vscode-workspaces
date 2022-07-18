<template>
  <div class="school">
    <h2> School name : {{ name}}</h2>
    <h2>School address : {{ address }}</h2>
    <button @click="sendSchoolName">点我获取schooltname</button>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  data() {
    return {
      name:"UOW",
      address:"11 Northfields",
    };
  },
  methods: {
    // 自定义事件
    sendSchoolName(){
      this.$emit('uow',this.name)
    }
  },
};
</script>


<style scoped lang="less">
.school{
  background: yellow;
  padding: 5px;
}
</style>
