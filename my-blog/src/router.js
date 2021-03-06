import Vue from 'vue'
import VueRouter from 'vue-router'
import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import BlogDetails from './components/BlogDetails'
import EditBlog from './components/EditBlog'
Vue.use(VueRouter )
// const router = new VueRouter({
//     routes: [
//         {
//             path: '/',
//             component: 'ShowBlogs'
//         },
//         {
//             path: '/add',
//             component: 'AddBlog'
//         }
//     ]
// })
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: ShowBlogs
        },
        {
            path: '/add',
            component: AddBlog
        },
        {
            path: '/blog/:id',
            component: BlogDetails
        },
        {
            path: '/edit/:id',
            component: EditBlog
        }
    ],
    mode: 'history'
  })
  