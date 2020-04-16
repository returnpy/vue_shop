<template>
  <el-container class="home-container">
    <el-header>
      <div class="logo">
        <img class="logo-pic" src="@/assets/logo.png" alt="" />
        <span class="logo-title">电商后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button" @click="toggleCollapse">|||</div>
        <el-menu
          background-color="#333744"
          text-color="#fff"
          active-text-color="#409eff"
          unique-opened
          :collapse="isCollapse"
          :collapse-transition="false"
          router
          :default-active="$route.path"
        >
          <el-submenu
            v-for="item in menuList"
            :key="item.id"
            :index="'/' + item.path"
          >
            <template slot="title">
              <i :class="iconsObj[item.id]"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item
              v-for="option in item.children"
              :key="option.id"
              :index="'/' + option.path"
            >
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>{{ option.authName }}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      menuList: [],
      iconsObj: {
        125: 'el-icon-user',
        103: 'el-icon-key',
        101: 'el-icon-goods',
        102: 'el-icon-notebook-2',
        145: 'el-icon-paperclip'
      },
      isCollapse: false
    }
  },
  mounted () {
    this.getMenuList()
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
    async getMenuList () {
      const { data: res } = await this.$http.get('menus')
      if (res.meta.status !== 200) {
        return this.$message.error(res.meta.msg)
      }
      this.menuList = res.data
    },
    toggleCollapse () {
      this.isCollapse = !this.isCollapse
    }
  },
}
</script>

<style>
.home-container {
  height: 100%;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  color: #fff;
  text-align: center;
  line-height: 24px;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  padding-left: 0;
  align-items: center;
  height: 100%;
}
.logo {
  display: flex;
  align-items: center;
}
.logo-pic {
  width: 60px;
}
.logo-title {
  color: #fff;
  font-size: 20px;
  margin-left: 15px;
}
.el-aside {
  background-color: #333744;
}
.el-menu {
  border-right: 0;
}
.el-main {
  background-color: #eaedf1;
}
</style>
