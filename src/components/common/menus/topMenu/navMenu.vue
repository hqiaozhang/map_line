<template>  
    <el-menu :default-active="topActiveId"
      class="el-menu-demo" mode="horizontal" @select="handleSelect" >
      <template v-for="navMenu in navMenus" >  
        <!-- 一级菜单 -->
        <el-menu-item v-if="navMenu.childList==null"  
          :key="navMenu.id" :index="String(navMenu.id)">  
          <!-- 指挥平台 -->
          <template v-if="navMenu.menuUrl.indexOf('dispatcher') != -1">
            <router-link
                :key="navMenu.id"
                :to="navMenu.menuUrl" >
                {{navMenu.menuName}}
            </router-link>  
          </template>
          <template v-else>
            <a :href="navMenu.menuUrl">
              {{navMenu.menuName}}
            </a>
          </template>
        </el-menu-item>  
    
        <el-submenu v-if="navMenu.childList"  
            popper-class="top-menu-popper"  
            :key="navMenu.id" :index="String(navMenu.id)">  
          <template slot="title">  
            {{navMenu.menuName}}
          </template> 
          <MenuItem :menus = navMenu.childList />
        </el-submenu>  
      </template>  
  </el-menu>
</template>  
<script>  
  import { isEmpty } from "lodash"
  import MenuItem from './menuItem.vue'
  export default {  
    name: 'NavMenu', 
    components: {
      MenuItem
    },
    props: ['navMenus', 'topActiveId'],
    methods: {
      handleSelect(key) {
        // this.activeIndex = key
        
        sessionStorage.setItem('topActiveId', key)
        this.$store.commit('setCurrentTopMenuId', key)
      }
    }  
  }  
</script>  
