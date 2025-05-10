const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const pacakgeJson = require("../package.json")
const devConfig = {
    mode: "development",
    output:{
        publicPath:"http://localhost:8083/"
    },
    devServer : {
        port : 8083,
        historyApiFallback:{
            index : '/index.html'
        }
    },
    plugins : [
        new ModuleFederationPlugin({
            name:"auth",
            filename: "remoteEntry.js",
            exposes:{
                "./AuthApp" : "./src/bootstrap"
            },
            shared: pacakgeJson.dependencies
        }),
        
    ]
}

module.exports = merge(commonConfig, devConfig);