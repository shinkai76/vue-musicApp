<template>
<div id="app">
  <my-header></my-header>
  <my-tab></my-tab>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</div>
</template>

<script>
import Header from 'components/Header/Header.vue'
import Tab from 'components/Tab/Tab.vue'

export default {
  name: 'App',
  components: {
    'my-header': Header,
    'my-tab': Tab
  }
}
</script>

<style lang="less">
@import "common/less/index.less";
#app {
    color: @subcolor;
}

</style>
