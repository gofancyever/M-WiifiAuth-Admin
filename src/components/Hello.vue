<template>
  <div class="content">
    <el-row :gutter="20" class="nav">
      <el-col :span="6">
        <div class="grid-content bg-purple">admin</div>
      </el-col>
    </el-row>

    <el-row class="tac">
      <el-col :span="4" class='nav-spider'>
        <el-menu default-active="1" class="el-menu-spider" @select="handleOpen">
          <el-menu-item index="1"><i class="el-icon-menu"></i>导航一</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
        </el-menu>
      </el-col>

      <el-col :span="20">
        <router-view></router-view>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'hello',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        this.$router.push('interface')
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }

  }

</script>


<style scoped>
  .content {
    height: 100%;
  }
  .nav {
    background-color: #7db1ff;
    color: white;
    height: 45px;
  }
 
  .nav-spider, .el-menu-spider, .tac {
    height: 100%;
  }
</style>