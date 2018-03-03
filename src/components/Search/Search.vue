<template>
  <div class="#search">
    <mt-search
      v-model="value"
      cancel-text="取消"
      placeholder="搜索">
    </mt-search>
    <div class="result">
      <h2>热门搜索</h2>
      <span @click="on_add(index)" v-for="(hotkey,index) in list">{{ hotkey.k }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      value: '',
      list: []
    }
  },
  mounted() {
    this._open()
  },
  methods: {
    _open() {
      const this_url = this.HOST + '/splcloud/fcgi-bin/gethotkey.fcg'
      this.$ajax({
        url: this_url,
        method: 'get'
      }).then((res) => {
        this.list = res.data.data.hotkey.slice(0, 10)
      }).catch((err) => {
        console.log(err)
      })
    },
    on_add(index) { // 将热门搜索加入搜索框
      this.value = this.list[index].k
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variable.less";
.result{
  padding: 0.2rem;
  h2{
  font-size: 16px;
  }
  span{
    display: inline-block;
    font-size: 14px;
    padding: 0 10px;
    height: 30px;
    line-height: 30px;
    color: #000;
    border: 1px solid rgba(0,0,0,.6);
    border-radius: 99px;
    word-break: keep-all;
    margin-bottom: 10px;
    margin-right: 14px;
  }
}
</style>
