<template>
    <div id="blog-details" v-set="'width'">
        <div class="content">
            <h1>{{blog.title}}</h1>
            <article>{{blog.content}}</article>
            <div class="info">
                <p class="author">作者：{{blog.author}}</p>
                <p class="radio">分类：{{blog.radio}}</p>
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
            blog: {}
        }
    },
    created(){
        var that = this
        this.$http.get('https://wd8966871714brtqrh.wilddogio.com/posts/' + this.id + '.json')
        .then(function(data){
            // console.log(data)
            return data.data
            // that.blog = data.data
            // console.log(that.blog)
        })
        .then(function(res){
            console.log(res)
            that.blog = res
        })
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
    
</style>
