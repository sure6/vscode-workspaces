<template>
  <div class="school">
    <h1>{{msg}}</h1>
    <h1>student name : {{ name }}</h1>
    <h1>gender : {{ gender }}</h1>
    <h1>school age : {{ myAge+1 }}</h1>
    <button @click="updateAge">updateAge1</button>
  </div>
</template>

<script>
// 组件交互相关的代码(数据, 方法等等)
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Student",
  data() {
    return {
      msg:"欢迎来到vue",
      // myName:this.name,
      myAge:this.age,
    };
  },
  methods: {
    updateAge(){
      this.myAge++
    }
  },
  // 使用props最好不要改, props优先加载,data后加载
  // props:["name","gender","age"] //简单接受
  // 接受的同时对数据进行类型限制
  // props:{
  //   name:String,
  //   age:Number,
  //   gender:String,
  // }
  props:{
    name:{
      type:String, // name 的类型是字符串
      required: true, //name是必要的

    },
    age:{
      type:Number, 
      default:99, // 默认值
    },
    gender:{
      type:String,
      required:true,
    }
  }
};
</script>
