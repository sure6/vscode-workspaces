<template>
  <div class="school">
    <h2> School name : {{ name}}</h2>
    <h2>School address : {{ address }}</h2>
    <button @click="sendSchoolName">点我获取schooltname</button>
    <button @click="sendSchoolName">点我获取demo</button>
    <button @click="unbind">解绑自定义事件</button>
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
      this.$emit('demo') 
    },
    unbind(){
      //解绑单个自定义事件
      this.$off('uow');
      // this.$off(['uow','demo']); // 解绑多个自定义事件
      // this.$off();// 解绑所有的自定义
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
