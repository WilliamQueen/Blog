<template>
    <div id="blog-header">
        <ul>
            <li>
                <router-link to = "/" exact>博客</router-link>
            </li>
            <li>
                <router-link to = "/add" exact>写博客</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'BlogHeader'
}
</script>

<style scoped>
    #blog-header{
        width: 100%;
        height: 50px;
        background: red
    }
    ul{
        height: 50px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    a{
        text-decoration: none;
        color: #fff;
        font-weight: bolder;
        padding: 10px;
        border-radius: 5px
    }
    .router-link-active{
        background: rgba(255,255,255,0.8);
        color: #000
    }
</style>
