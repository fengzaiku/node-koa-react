// import "babel-polyfill"
/*
import React from "react"
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from "./routers/"
import store from "./store/"
if(process.env.NODE_ENV === 'development'){
    import {render} from "react-dom"
        render(
            <Provider store={store}>
                <BrowserRouter>
                    {renderRoutes(routes)}
                </BrowserRouter>
            </Provider>,
            document.querySelector("#app")
        )    
}

if(process.env.NODE_ENV === 'production'){
    import { hydrate } from "react-dom"
    import Loadable from 'react-loadable'
    window.main = () => {
        Loadable.preloadReady().then(() => {
            hydrate(
                <Provider store={store}>
                    <BrowserRouter>
                        {renderRoutes(routes)}
                    </BrowserRouter>
                </Provider>,
                document.querySelector("#app")
            )            
        })
    }
}
*/
import React from "react"
import {render} from "react-dom"
import { hydrate } from "react-dom"
import Loadable from 'react-loadable'

import Provider from "./entry/"
if(process.env.NODE_ENV === 'development'){
        render(
            <Provider/>,
            document.querySelector("#app")
        )    
}

if(process.env.NODE_ENV === 'production'){
    window.main = () => {
        Loadable.preloadReady().then(() => {
            hydrate(
                <Provider/>,
                document.querySelector("#app")
            )            
        })
    }
}
