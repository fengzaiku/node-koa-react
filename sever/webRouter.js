import React from "react"
import {join} from 'path'
import {renderToString} from 'react-dom/server'
import {StaticRouter} from 'react-router'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import {readFileSync} from "fs"


import Routes from "../src/routers/"
import store from "../src/store/"
const stats = require('../dist/react-loadable.json')

let oTemplate = readFileSync(join(__dirname,"..","/dist","template.html"),"utf-8");
const context = {}
export default function(ctx){
    let modules = [],template = oTemplate;
    let html =  renderToString(
    <Loadable.Capture report={moduleName => modules.push(moduleName)}>
        <Provider store={store}>
            <StaticRouter
            location={ctx.url}
            context={context}>
                {renderRoutes(Routes)}
            </StaticRouter>
        </Provider>
    </Loadable.Capture>);

    let bundles = getBundles(stats, modules);
    let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));  

    return template
            .replace('<div id="app"></div>',`<div id="app">${html}</div>`)
            .replace('</body>',`</body>${scripts.map(script => {
                return `<script src="/${script.file}"></script>`
              }).join('\n')}
              <script>window.main();</script>`);
}

