<template>
  <div id="tab">
    <router-link to="/recommend" tag="div" class="tag-style">
      <span>推荐</span>
    </router-link>
    <router-link to="/rank" tag="div" class="tag-style">
      <span>排行</span>
    </router-link>
    <router-link to="/search" tag="div" class="tag-style">
      <span>搜索</span>
    </router-link>
    <router-link to="/singer" tag="div" class="tag-style">
      <span>歌手</span>
    </router-link>
  </div>
</template>

<script>

export default {
}
</script>

<style lang="less" scoped>
@import '~common/less/variable';

#tab{
  overflow: hidden;
  .tag-style{
    width: 25%;
    float: left;
    text-align: center;
    padding: 5px 0;
    font-size: 16px;
    color:#fff;
    background-color:#464646;
  }
  .router-link-active{
    color:#fff;
    background-color: darken(#464646, 5%);
  }
}

</style>
