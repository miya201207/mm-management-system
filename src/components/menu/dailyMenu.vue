<template>
  <el-container>
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">菜单</el-menu-item>
        <el-menu-item index="2" >菜品</el-menu-item>
        <el-menu-item index="3">财务</el-menu-item>
        <el-menu-item index="4">会员</el-menu-item>
        <el-menu-item index="5">设置</el-menu-item>
      </el-menu>
    </el-header>
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
            >
          
              <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">每日菜单</span>
              </el-menu-item>
         
              <el-menu-item index="2">
                <i class="el-icon-setting"></i>
                <span slot="title">设置菜单</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.el-aside{
  overflow: inherit
}


</style>