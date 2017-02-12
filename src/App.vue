<template>
  <div class="container">
    <div class="newsList">
      <ul>
        <li v-for="news in newsList">
          <h4>{{news.title}}</h4>
          <div class="row">
            <div class="col-xs-6">
              <span class="label label-primary">{{news.author}}</span>
              <span class="label category">{{news.category}}</span>
            </div>
            <div class="col-xs-6 text-right">
              <span class="label label-default">{{news.pubDate | time}}</span>
            </div>
          </div>

          <div class="media">
            <div class="media-body">
              {{news.description | len(55)}}
            </div>
            <div class="media-right">
              <a href="#">
                <img class="media-object img-rounded" :src="news.description | img" alt="..." style="width: 100px; height: 100px;">
              </a>
            </div>
          </div>
        </li>
      </ul>
      <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading"></infinite-loading>
    </div>  
  </div>
</template>

<script>
  import InfiniteLoading from 'vue-infinite-loading'
  export default {

    name: 'newsList',
    components: {
      InfiniteLoading
    },
    data () {
      return {
        newsList: {},
        page: 2
      };
    },
    methods: {
      fetch(){
        this.$http.get('36kr.json').then(({data}) => {
          this.newsList = data.rss.channel.item
        })   
      },
      onInfinite() {
        this.$http.get('36kr.json', {params: {page:this.page}}).then(({data}) => {
          for (var k in data.rss.channel.item) {
            this.newsList.push(data.rss.channel.item[k])
          }
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded');
          this.page++
        }) 
      }
    },
    mounted(){
      this.fetch()
    }
  };
</script>

<style lang="css" scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .newsList ul li {
    border-bottom: 1px #eee solid;
    padding: 20px 0;
  }
  .category {
    background: #eee;
    color:red;
  }
  .media-object {
    object-fit: cover;
  }
</style>