import Loadable from 'react-loadable'
import Loading from '../comman/loading' 

const Home = Loadable({
    loader: () => import("../controller/Home"),
    loading: Loading,
  })
const Child = Loadable({
    loader: () => import("../controller/Child"),
    loading: Loading,
  })


const routes = [
    { 
        path: '/',
        exact: true,
        component: Home
    },
    { 
        path: '/child',
        component: Child
    }
]

export default routes
