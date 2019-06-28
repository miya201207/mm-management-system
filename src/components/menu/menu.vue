<template>
  <div class="hello">
    <p>{{msg}}</p>
    <ul>
      <li>
        <router-link to="/page1/page1menu1">page1菜单1</router-link>
      </li>
      <li>
        <router-link to="/page1/page1menu2">page1设置1</router-link>
      </li>
    </ul>
    <div class="router">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      msg: '我是页面1111111'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 100%;
}
ul {
  float: left;
  width: 240px;
  vertical-align: top;
}
.router {
  float: left;
  width: calc(100% - 240px);
}
li {
  width: 100%;
  display: inline-block;
  text-align: center;
  box-sizing: border-box;
  line-height: 45px;
}
li:hover {
  background-color: rgb(218, 192, 192);
}
li a {
  display: block;
  width: 100%;
  height: 100%;
}
.router-link-active {
  color: rgb(67, 139, 247);
}
</style>