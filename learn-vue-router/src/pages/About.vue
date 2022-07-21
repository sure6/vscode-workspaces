<template>
  <h1>这是About组件</h1>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "About",
  // 组件内路由守卫
  // 通过路由规则,进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("beforeRouteEnter通过路由规则进入,不能写在直接运行主页上,因为没有调用路由", to, from);
    if (to.meta.isAuth) {
      if (localStorage.getItem("lee") === "sure") {
        next();
      } else {
        alert("localstorage name 都没有");
      }
    } else {
      next();
    }
  },
  // 通过路由规则,离开该组件时被调用 (不是后置守卫,是指离开之前执行, 跟全局后置有区别, 不能叫后置守卫)
  beforeRouteLeave(to, from, next){
    console.log("beforeRouteLeave通过路由规则进入", to, from);
    next();
  }
};
</script>

