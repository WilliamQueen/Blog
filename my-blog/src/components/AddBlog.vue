<template>
  <div class="add-blog">
    <header>
      <van-nav-bar
        title="写文章"
        left-text="返回"
        right-text="保存"
        left-arrow
        @click-right="onClickRight"
      />
    </header>
    <div id="new-blog">
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

      <!-- <div>
        <h3>博客总览</h3>
        <p>博客标题：{{blog.title}}</p>
        <p>博客内容：{{blog.content}}</p>
        <p>博客类别：{{blog.radio}}</p>
        <p>博客作者：{{blog.author}}</p>
      </div> -->
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
      authors:['tom','jerry']
      
    }
  },
  created(){
    this.blog.author = this.authors[0]
  },
  methods:{
    onClickRight: function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #new-blog{
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


</style>
