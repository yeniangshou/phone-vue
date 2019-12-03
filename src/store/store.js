import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
const SET_TABSVIEW = 'SET_TABSVIEW'
const DEL_TABSVIEW = 'DEL_TABSVIEW'

const state = {
    // 将打开的路由存入
    visitedTabsView: [],
    count: 1,
    student: {
        name: '小明'
    },
    currentLocale: 'cn',
    userInfo: null
}

const getters = {
    countAdd: state => {
        return state.count + 1;
    },
    // 带参的方式
    strCount: state => (fm) =>{ 
        return state.count+ fm
    },
    // 得到用户数据
    getUserInfo: state =>{
        if(!state.userInfo){
            state.userInfo = sessionStorage.getItem('users')
        }
        return state.userInfo;
    },
    visitedTabsView: state => state.visitedTabsView
}

// 同步的
const mutations = {
    // 存入相关的路由数据
    [SET_TABSVIEW](state, view) {
        if (state.visitedTabsView.find((n) => n.path === view.path)) {
          return
        }
        state.visitedTabsView.push({ name: view.meta.title, path: view.path })
      },
      // 删除相关的路由数据
      [DEL_TABSVIEW](state, view) {
        for (let [i, v] of state.visitedTabsView.entries()) {
          if (v.path === view.path || v.name === view.name) {
            state.visitedTabsView.splice(i, 1)
          }
        }
      },
    // 带参
    add(state, n){
        // state.count++
        state.count+=n
    },
    // 带参是对象，且修改state对象的值
    updateStudent(state, n){
        Vue.set(state.student,'age', n.age)
        console.log(state.student);
    },
    updateLocal(state, value){
        state.currentLocale = value;
    },
    // 去登录
    goLogin(state, users){
        state.userInfo = users;
        sessionStorage.setItem('users', users);
    },
    // 退出
    loginOut(state){
        state.userInfo = null;
        sessionStorage.setItem('users', null);
    },
}

// 异步的  调节顺序使用promise可以,而且还带参数。
const actions = {
    addActions({commit}, n){
        return new Promise((resolve, reject)=> {
            setTimeout(() => {
                commit('updateStudent', n)
                resolve(50)
            }, 3000);
        })
    },
    // 添加一个新的tabsView
    addVisitedTabsView({ commit }, view) {
        commit(SET_TABSVIEW, view)
      },
      // 关闭一个tabsView
      delVisitedTabsView({ commit, state }, view) {
        return new Promise((resolve, reject) => {
          commit(DEL_TABSVIEW, view)
          resolve([...state.visitedTabsView])
        })
      }
}

// 这里名称参数一定匹配正确
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});


export default store;

