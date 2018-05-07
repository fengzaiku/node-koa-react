require("babel-polyfill")
require('babel-register')({
    "presets": [
        "env",
        "es2015",
        "react",
        "stage-3"
    ],
    plugins: [
        "transform-runtime",
        "react-loadable/babel",
        "add-module-exports",
        "dynamic-import-node"
    ]
})
require("./server")
