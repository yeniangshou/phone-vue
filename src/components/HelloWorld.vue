<template>
  <div class="hello">
    <h1>{{ msg }}<i class="fa fa-camera-retro"></i></h1>
    <h2>{{$t('person.name')}}</h2>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import Qs from 'Qs'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created:function(){
    this.testAxios();

  },
  methods: {
    testAxios(){
      var params = {
            userid: '5476',
            pwd: '18ed9e5f94b114f658dee20b46c34c88d0c5a63dd36b356d7a94172a9c7c07304c8741415bdbbbe18b31b140ff98a124d770aeb523505433b5007a3729626a65cef9188ac1ed1bd7428fd8b42f859a37488dd2d2c88afd79149b665aff22db12d68899245b3a63020df7c2852ed8b542b21f2387bb59609f1f85d8215acf7837',
            cmd: 'CLIENT_USER_LOGIN',
            deviceType: 'pc',
            timeZone: '-8',
            pwdEncode: 'RSA',
            lang: 'cn',
            sid:'', 
            _CACHE_LOGIN_TIME_: '1574152339023'
        }
      this.$api.login.loginAPI(params).then((data)=>{
        console.log(data);
      })
     
    
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.hello {
    h1, h2 {
    font-weight: normal;
    height: 50px;
  }

   ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      display: inline-block;
      margin: 0 10px;
    }
    
    a {
      color: #42b983;
    } 
}


</style>
