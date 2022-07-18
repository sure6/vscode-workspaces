<template>
  <div>
    <Student name="Alice" gender="male" :age="18"/>
    <hr>
    <Student name="jerry" gender="female" />
    <hr>
    <!-- <Student /> -->
  </div>
</template>

<script>
import Student from "./components/Student.vue";

export default {
  name: "App",
  components: {
    Student,
  },
};
</script>