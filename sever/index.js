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

// less 的转码 hook
const lessParser = require('postcss-less').parse
require('css-modules-require-hook')({
    extensions: ['.less'],
    processorOpts: {
        parser: lessParser
    },
    camelCase: true,
    generateScopedName: '[name].[local].[hash:5]'
})
// 图片 的转码 hook
require('asset-require-hook')({
    extensions: [
        'png','jpeg','jpg','gif','svg',
        'mp4','webm','ogg','mp3','wav','flac','aac',
        'woff','eot','ttf','otf'
    ],
    limit: 10000
})
require("./server")
