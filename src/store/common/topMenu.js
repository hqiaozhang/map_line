/*
 * @Author: zhanghongqiao
 * @Date: 2018-05-07 21:06:45
 * @Email: 991034150@qq.com
 * @Description: 顶部导航数据请求
 * @Last Modified by: zhanghongqiao
 * @Last Modified time: 2018-12-07 13:20:59
 */

import { fetch } from '@/util/request'

const state = {
  topActiveId: '', // 污染溯源
  menuList: []
}

// getters
const getters = {
  menuList: state => state.menuList,
  topActiveId: state => state.topActiveId
}

// 顶部导航actions
/**
 * Action 可以包含任意异步操作。
 * Action 通过 store.dispatch 方法触发(该方法在组件内调用)
 */
const actions = {
  /**
   * @description 获取头部导航数据
   * @param {function} {commit}
   */
  topMenuRequest ({commit}, params) {
    fetch('fetchTopMenu', params, (data) => {
       commit('topMenuSuccess', data)
      //  获取指挥平台的id
      let activeId = ''
      data.map(item => {
         if(item.menuUrl.indexOf('dispatcher') != -1) {
          activeId = item.id
         }
       })
       // 获取顶部导航当前选择的d
       commit('setCurrentTopMenuId', activeId)
    })
  }
}
// 顶部导航mutations
/**
 * 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
 * Mutation 必须是同步函数
 * mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
 */
const mutations = {
  /**
   * @description 数据获取成功
   * @param {object} state
   * @param {array} data
   */
  topMenuSuccess (state, data) {
    state.menuList = data
  },
  /**
   * 
   * @param {object} state 
   * @param {string} path 当前路由
   */
  setCurrentTopMenuId(state, id) {
    state.topActiveId = id
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
