<template>
    <div id="blog-details" v-set="'width'">
        <div class="content">
            <h1>{{blog.title}}</h1>
            <article>{{blog.body}}</article>
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
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+ this.id)
        .then(function(data){
            // console.log(data)
            that.blog = data.data
            console.log(that.blog)
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
</style>
