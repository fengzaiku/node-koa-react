import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'

class App extends React.Component {
    render(){
        return(
            <ul>
                <li>世界真美丽</li>
                <li>世界真美丽</li>
                <li>世界真美丽</li>
                <li>世界真美丽</li>
            </ul>
        )
    }
}

  const context = {}

export default ctx => ReactDOMServer.renderToString(
    <StaticRouter
      location={ctx.request.url}
      context={context}
    >
      <App/>
    </StaticRouter>
  )