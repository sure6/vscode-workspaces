<template>
  <div id="app">
    <my-count />
    <hr>
    <my-person></my-person>
  </div>
</template>

<script>
import MyCount from './components/MyCount.vue'
import MyPerson from './components/MyPerson.vue'


export default {
  name: 'App',
  components: {
    MyCount,
    MyPerson
}
}
</script>


