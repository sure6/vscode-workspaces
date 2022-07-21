<template>
  <div>
    <h2>这是Home组件</h2>
    <div>
      <ul class="nav nav-tabs">

        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/news"
            >News</router-link
          >
        </li>
        <li>
          <router-link
            class="list-group-item"
            active-class="active"
            to="/home/message"
            >Message</router-link
          >
        </li>
      </ul>
      <!-- 如果不写include="组件名" 多个组件缓存,:include="[HomeNew,XXX]", 都缓存 -->
      <keep-alive include="HomeNew">
          <router-view> </router-view>
      </keep-alive>

    </div>
  </div>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
 
};
</script>

