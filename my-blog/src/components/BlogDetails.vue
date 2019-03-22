<template>
    <div id="blog-details" v-set="'width'">
        <div class="content">
            <h1>{{blog.title}}</h1>
            <article v-html="text">{{text}}</article>
            <div class="info">
                <p>作者：{{blog.author}}</p>
                <p>分类：{{blog.radio}}</p>
            </div>
            <div class="handle">
                <router-link class="button edit" :to="'/edit/' + id" >编辑</router-link>
                <button class="button delete" @click="toDeleteBlog()"> 删除 </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogDetails',
    data(){
        return {
            id: this.$route.params.id,
            blog: {},
            text: ''
        }
    },
    created(){
        
        this.$http.get('https://wd8966871714brtqrh.wilddogio.com/posts/' + this.id + '.json')
        .then((data) => {
            // console.log(data)
            this.blog = data.data
            this.replace()
        })
        
    },
    methods: {
        replace(){
            var text = this.blog.content;
            for(var i=0 ; i<text.length ; i++){
                text= text.replace(/\r\n/g,"<br/>");
                text= text.replace(/\n/g,"<br/>");
                this.text = text
            }
        },
        toDeleteBlog(){
            this.$http.delete('https://wd8966871714brtqrh.wilddogio.com/posts/' + this.id + '.json')
            .then((data) => {
                this.$router.push({path:'/'})
            })
        }
    }

}
</script>

<style scoped>
    h1{
        margin: 0;
        padding: 20px 0
    }
    #blog-details{
        margin: 0px auto;
        
    }
    .content{
        margin: 10px;
        padding: 20px;
        background:#eee
    }
    article{
        font-size: 18px
    }
    .info{
        display: flex;
        justify-content: start
    }
    p{
        font-size: 12px;
        margin-right: 8%
    }
    .handle{
        display: flex;
        justify-content: flex-end;
    }
    .button{
        width: 50px;
        height: 50px;
        text-align: center;
        line-height: 50px;
        margin-left: 20px
    }
    .edit{
        text-decoration: none;
        color: #000
    }
    .delete{
        border: none;
        background: #eee;
        color: red;
        cursor: pointer;
    }
</style>
