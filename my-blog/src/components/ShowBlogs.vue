<template>
  <div id="show-blogs" v-set="'width'">
    <h1>全部博客</h1>
    <van-search placeholder="请输入搜索关键词" v-model="search" />
    <div 
        class="blog-item"
        v-for="blog in filterBlogs"
        :key="blog.id"
    >
        <router-link :to = "'/blog/'+blog.id">
            <h2 v-color>{{blog.title}}</h2>
        </router-link>
        <article>{{blog.content | length}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowBlogs',
  data(){
      return{
          blogs:[],
          search: ""
      }
  },
  created(){
      this.$http.get("https://wd8966871714brtqrh.wilddogio.com/posts.json")
      .then((data) => {
          let blogArr = [];
          for(let key in data.data){
            //   console.log(key)
            data.data[key].id = key
            blogArr.push(data.data[key])
            this.blogs = blogArr
          }
      })
  },
  computed: {
      filterBlogs: function(){
        return this.blogs.filter((blog) => {
            return blog.title.match(this.search)
        })
      }
  },
//   自定义指令局部写法
  directives: {
      'color': {
          bind(el,binding,vnode){
              el.style.color = '#'+Math.random().toString(16).slice(2,8)
          }
      }
    //   'set': {
    //       bind(el,binding,vnode){
    //         if(binding.value = 'width'){
    //             el.style.maxWidth = '580px'
    //         }
    //       }
    //   }
  },
//   过滤器局部写法
  filters: {
      length(value){
          return value.slice(0,100) + '...'
      }
  }
}
</script>

<style scoped>
    #show-blogs{
        height: 100%;
        margin: 20px auto;
        padding: 0 20px
    }
    .blog-item{
        margin: 20px 0;
        padding: 10px;
        background: #eee
    }
    .blog-item h2{
        margin: 10px 0;
       
    }
</style>
