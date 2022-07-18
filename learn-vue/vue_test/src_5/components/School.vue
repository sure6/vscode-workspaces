<template>
  <div>
    <h1>School name : {{ name | mySlice  }}</h1>
    <h1>School address : {{ address }}</h1>
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
