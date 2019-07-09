import {Home,Recommend,Search,Rege,Song,Music} from './routingLoad'


//基础路由
 const mainRoute = [
    {
        pathname:"/home",
        component:Home
    },
    {
        pathname:"/song",
        component:Song
    },
    {
        pathname:"/music",
        component:Music
    }
]
const childrenRoute=[
    {
        pathname:"/home/recommend",
        component:Recommend
    },
    {
        pathname:"/home/search",
        component:Search
    },
    {
        pathname:"/home/rege",
        component:Rege
    }
   
]
export {mainRoute,childrenRoute}