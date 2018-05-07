import React from "react"
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from "../routers/"
import store from "../store/"

export default () =>{
    return <Provider store={store}>
                <BrowserRouter>
                    {renderRoutes(routes)}
                </BrowserRouter>
            </Provider>
}