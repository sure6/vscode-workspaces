<template>
  <div class="school">
    <h1 class="demo">student name : {{ name }}</h1>
    <h1 class="uow">gender : {{ gender }}</h1>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name:"Jerry",
      gender:"male",
    };
  },

};
</script>

<style scoped>
.school{
  background-color: yellowgreen;
}
</style>
