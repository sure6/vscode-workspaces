<template>
  <div class="school">
    <h1 class="uow">School name : {{ name}}</h1>
    <h1 class="demo">School address : {{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",
  data() {
    return {
      name:"UOW:uow",
      address:"11 Northfields",
    };
  },
 
};
</script>


<style scoped lang="less">
.school{
  background: yellow;
  .uow{
    font-size: 50px;
  }
}
</style>
