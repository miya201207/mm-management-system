<template>
  <div id="app">
  <!-- <header>
      <ul>
        <li>
          <router-link to="/menu">菜单</router-link>
        </li>
        <li>
          <router-link to="/food">菜品</router-link>
        </li>
        <li>
          <router-link to="/finance">财务</router-link>
        </li>
        <li>
          <router-link to="/member">会员</router-link>
        </li>
        <li>
          <router-link to="/setting">设置</router-link>
        </li>
      </ul>
    </header> -->

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
