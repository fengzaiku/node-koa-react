import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter ,Switch} from 'react-router'
import { renderRoutes } from 'react-router-config'
 
class Home extends React.Component {
    render(){
        return(
            <h1>用主页</h1>
        )
    }
}
class User extends React.Component {
    render(){
        return(
            <h1>用户页面User </h1>
        )
    }
}
class About extends React.Component {
    render(){
        return(
            <h1>用户页面About</h1>
        )
    }
}

 
 const routes = [
      { path: '/',
        exact: true,
        component: Home
      },
      { path: '/user',
        component: User
      },
      { path: '/about',
        component: About
      }
]
 
 const context = {}
export default ctx => ReactDOMServer.renderToString(
    <StaticRouter
      location={ctx.url}
      context={context}>
    	<Switch>
    		{renderRoutes(routes)}
    	</Switch>
      
    </StaticRouter>
  )