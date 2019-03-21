<template>
  <div class="add-blog" v-set="'width'">
    <header>
      <van-nav-bar
        :title="header"
        left-text="返回"
        :right-text= "save"
        left-arrow
        @click-right="onClickRight"
      />
    </header>
    <div id="new-blog" v-if="!isShow">
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
            <van-radio name="1">HTML</van-radio>
            <van-radio name="2">CSS</van-radio>
            <van-radio name="3">JS</van-radio>
          </van-radio-group>
        </div>
        <label>作者名称：</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
        </select>
      </form>
      <van-loading v-if="isLoading" type="spinner" />
    </div>
    <div class="overview" v-if="isShow">
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：{{blog.content}}</p>
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
      blog:{
        title:"",
        content:"",
        radio: '1',
        author: ""
      },
      save:"保存",
      header: "写文章",
      authors:['tom','jerry'],
      isLoading: false,
      isShow: false
    }
  },
  created(){
    this.blog.author = this.authors[0]
  },
  methods:{
    onClickRight: function(){
      this.isLoading = true;
      let that = this;
      this.$http.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        userId: this.blog.author,
        body: this.blog.content
      })
      .then(function (response) {
        // console.log(response);
        
        that.$toast({
          message: "保存成功",
        })
        that.isLoading = false;
        that.isShow = true;
        that.save = "";
        that.header = "文章总览"
        if(that.blog.title || this.blog.content === ""){
          return;
        }
      })
      .catch(function (error) {
        // console.log(error);
        that.$toast({
          message: "保存失败",
        })
        that.isLoading = false;
        that.isShow = false;
        that.save = "保存";
        that.header = "写文章"
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
  .van-loading{
    position:absolute;
    top: 50%;
    left: 50%;
    margin-left:-15px; 
    margin-top:-15px;
  }

</style>
