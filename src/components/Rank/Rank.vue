<template>
  <div id="rank">
    <ul>
      <li v-for="item in topList" class="list-item">
        <div class="img">
          <img v-lazy="item.picUrl" alt="" />
        </div>
        <div class="info">
          <h2 class="name">{{item.topTitle}}</h2>
          <ul class="song_list">
            <li v-for="(song,index) in item.songList">
              <span>{{ index + 1 }}</span>
              <span>{{ song.songname }} </span>
              <span>{{ song.singername }}</span>
            </li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  mounted () {
    this._open()
  },
  methods: {
    _open () {
      let hurl = this.HOST + '/v8/fcg-bin/fcg_myqq_toplist.fcg'
      this.$jsonp(hurl, {callbackName: 'MusicJsonCallback'}).then(res => {
        // 获取topList
        this.topList= res.data.topList
        // 获取单个榜单里的前三名信息



        console.log()
      }).catch(err => {
        console.log(err)
      })
    }
  },
  data () {
    return {
      topList: []
    }
  }
}
</script>

<style lang="less" scoped>
#rank{
  padding: 0.2rem;
}
.ellipsis{
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.list-item{
  height: 100px;
  width: 100%;
  overflow: hidden;
  margin-bottom: 10px;
  background-color: #fcfcfc;
  .img{
    float: left;
    img{
      display: block;
      width: 100px;
      height: 100px;
    }
  }
  .info{
    height: 100%;
    float: left;
    width: calc(100% - 100px);
    padding: 0 0.2rem;
    .name{
      font-weight: bold;
      font-size: 16px;
      margin:10px 0;
      .ellipsis;
    }
    .song_list{
      li{
        font-size: 14px;
        margin-bottom: 7px;
        .ellipsis;
        span:last-child{
          color: #999;
          padding-left: 5px;
        }
      }
    }
  }
}
</style>
