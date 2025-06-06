const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const pacakgeJson = require("../package.json")

const prodConfig = {
    mode:"production",
    output:{
        filename:'[name].[contenthash].js',
        publicPath: '/auth/latest/'
    },
    plugins:[
        new ModuleFederationPlugin({
            name:"auth",
            filename:"remoteEntry.js",
            exposes:{
                './AuthApp' : "./src/bootstrap"
            },
            shared: pacakgeJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,prodConfig)