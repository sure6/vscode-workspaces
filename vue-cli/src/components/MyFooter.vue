<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked = "isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>completed {{ doneTodo }}</span> / all {{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAll">clear completed task</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTodo() {
      // let i=0;
      // this.todos.forEach(todo => {
      //   if(todo.done) i++;
      // });
      // return i;

      return this.todos.reduce((pre, todo) => {
        // console.log(pre, current);
        return pre + (todo.done ? 1 : 0);
      }, 0);
    },
    isAll: {
      get() {
        return this.doneTodo === this.total && this.total > 0;
      },
      set(value) {
        this.$emit("checkAllTodo",value);
      },
    },
  },

  methods: {
    checkAll(e) {
      // console.log(e.target.checked);
      this.$emit("checkAllTodo",e.target.checked);
    },

    clearAll(){
      this.$emit("clearAllTodo");
    }
  },
};
</script>


<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
