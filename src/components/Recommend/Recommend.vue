<template>
<div id='recommend'>
  <div id="swipe">
    <mt-swipe :auto="2000">
      <mt-swipe-item v-for="item in recommends" v-bind:key="item.id">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
  <div>
    <span class="title">热门推荐</span>
  </div>
</div>
</template>

<script>

export default{
  data () {
    return {
      recommends: []
    }
  },
  mounted () {
    this._open()
  },
  methods: {
    _open () {
      const this_url = this.HOST + '/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      this.$ajax({
        url: this_url,
        method: 'get'
      }).then((res) => {
        let slider = res.data.data.slider
        this.recommends = slider
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>

<style lang="less" scoped>

#swipe{
  height: 3rem;
  a{
    display: block;
    width: 100%;
    overflow: hidden;
    text-decoration: none;
    img{
     display: block;
     width: 100%;
    }
  }
}
.title{
  display: block;
  width: 100%;
  text-align: center;
  font-size: 16px;
}
</style>
