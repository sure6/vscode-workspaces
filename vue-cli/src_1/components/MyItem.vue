<template>
  <!-- <transition name="todo" appear> -->
    <li>
      <label>
        <input
          type="checkbox"
          :checked="todo.done"
          @change="handleCheck(todo.id)"
        />
        <!-- <input type="checkbox" v-model="todo.done" @change="handleCheck(todo.id)"/> 也能实现, 因为违反了修改props -->
        <span v-show="!todo.isEdit">{{ todo.name }}</span>
        <input
          type="text"
          :value="todo.name"
          v-show="todo.isEdit"
          @blur="handleBlur(todo, $event)"
          ref="inputTitle"
        />
      </label>
      <button class="btn btn-danger" @click="deleteTodo(todo.id)">
        delete
      </button>
      <button
        v-show="!todo.isEdit"
        class="btn btn-edit"
        @click="editTodo(todo)"
      >
        edit
      </button>
    </li>
  <!-- </transition> -->
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "MyItem",
  // 声明接受todo对象
  props: ["todo"],
  methods: {
    // choosing or cancel choosing
    handleCheck(id) {
      this.$bus.$emit("checkTodo", id);
    },
    deleteTodo(id) {
      if (confirm("are you sure to delete?")) {
        // this.$bus.$emit("handleDelete",id)
        pubsub.publish("handleDelete", id);
      }
    },
    editTodo(todo) {
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        this.$set(todo, "isEdit", true);
      }
      this.$nextTick(function () {
        this.$refs.inputTitle.focus();
      });
    },
    handleBlur(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("null input is not allowed!!");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background: #ddd;
}
li:hover button {
  display: block;
}
/* .todo-enter-active {
  animation: todo-case 1s linear;
}
.todo-leave-active {
  animation: todo-case 1s linear reverse;
}
@keyframes todo-case {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
} */
</style>