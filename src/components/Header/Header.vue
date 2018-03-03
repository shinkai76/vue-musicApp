<template>
<div id="header">
 <mt-header fixed title="我的VUE播放器" class="header"></mt-header>
</div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
@import "~common/less/variable.less";

#header {
    height: 0.8rem;
}
.header{
  background-color: @maincolor;
}
</style>
