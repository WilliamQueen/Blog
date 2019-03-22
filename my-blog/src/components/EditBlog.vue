<template>
  <div class="add-blog" v-set="'width'">
    <div id="new-blog" v-if="!isShow">
        <h1>编辑博客</h1>
      <form>
        <label>文章标题：</label>
        <van-cell-group>
          <van-field 
            v-model="blog.title" 
            placeholder="请输入文章标题" 
          />
        </van-cell-group>
        <label>编辑文章：</label>
        <van-cell-group>
          <van-field 
            v-model="blog.content" 
            type="textarea"
            placeholder="请输入文章内容" 
          />
        </van-cell-group>

        <label>文章类别：</label>
        <div class="radio">
          <van-radio-group v-model="blog.radio">
            <van-radio name="HTML">HTML</van-radio>
            <van-radio name="CSS">CSS</van-radio>
            <van-radio name="JS">JS</van-radio>
          </van-radio-group>
        </div>
        <label>作者名称：</label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
        <button @click.prevent="onClickRight">保存编辑</button>
      </form>
      <van-loading v-if="isLoading" type="spinner" />
    </div>
    <div class="overview" v-if="isShow">
        <h1>编辑博客预览</h1>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：<span v-html="text"> {{text}} </span> </p>
        <p>博客类别：{{blog.radio}}</p>
        <p>博客作者：{{blog.author}}</p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AddBlog',
  data () {
    return {
        text: '',
        id: this.$route.params.id,
        blog:{},
        save:"保存",
        header: "写文章",
        authors:['tom','jerry'],
        isLoading: false,
        isShow: false
    }
  },
  created(){
    this.blog.author = this.authors[0];
    this.fetchData();
    
  },
  methods:{
    replace(){
        var text = this.blog.content;
        for(var i=0 ; i<text.length ; i++){
            text= text.replace(/\r\n/g,"<br/>");
            text= text.replace(/\n/g,"<br/>");
            this.text = text
        }
    },
    fetchData(){
        this.$http.get('https://wd8966871714brtqrh.wilddogio.com/posts/' + this.id + '.json')
        .then((data) => {
            console.log(data)
            this.blog = data.data
        })
    },
    onClickRight: function(){
      this.replace()
      this.isLoading = true;
      let that = this;
      this.$http.put('https://wd8966871714brtqrh.wilddogio.com/posts/' + this.id + '.json' , that.blog)
      .then( (response) => {
        // console.log(response);
        this.$toast({
          message: "保存成功",
        })
        this.isLoading = false;
        this.isShow = true;
        this.save = "";
        this.header = "文章总览"
        if(this.blog.title === null || this.blog.content === null){
          this.$toast({
            message: "保存失败",
          })
          this.isLoading = false;
          this.isShow = false;
          this.save = "保存";
          this.header = "写文章"
          return;
        }
      })
      .catch(function (error) {
        console.log(error);
        this.$toast({
          message: "保存失败",
        })
        this.isLoading = false;
        this.isShow = false;
        this.save = "保存";
        this.header = "写文章"
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .add-blog{
    margin: 20px auto;
  }
  #new-blog{
    margin: 0 20px
  }
  .overview{
    margin: 0 20px
  }
  .van-cell-group {
    border: 1px solid #ccc;
    border-radius: 4px
  }
  label{
    display: block;
    padding: 16px 0;
    font-size: 20px
  }
  .radio .van-radio-group{
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  .radio .van-radio-group .van-radio{
    /* margin-right: 10px */
  }
  select{
    width: 100%;
    text-align: center;
    text-align-last: center;
    font-size: 22px
  }
  button{
    padding: 10px 16px;
    background: red;
    border: none;
    color: #fff;
    border-radius: 5px;
    display: block;
    margin: 20px auto

  }
  .van-loading{
    position:absolute;
    top: 50%;
    left: 50%;
    margin-left:-15px; 
    margin-top:-15px;
  }

</style>
