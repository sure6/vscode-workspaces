<template>
  <div>
    <h2>student name: {{ name }}</h2>
    <h2>student age: {{ age }}</h2>
  </div>
</template>


<script>
export default {
  name: "Student",
  data() {
    return {
      name: "leesure",
      age: 30,
    };
  },
};
</script>

