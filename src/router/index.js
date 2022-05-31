import BlogsList from '@/pages/index'
console.log("🚀 ~ file: index.js ~ line 2 ~ BlogsList", BlogsList)
import BlogsDetail from '@/pages/index2'

export default {
  routes: [
    { exact: true, path: '/', component: BlogsList },
    { exact: true, path: '/page', component: BlogsDetail },
  ],
}