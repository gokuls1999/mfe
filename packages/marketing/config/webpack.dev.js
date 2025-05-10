const {merge} = require("webpack-merge")
const commonConfig = require("./webpack.common")
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const pacakgeJson = require("../package.json")
const devConfig = {
    mode: "development",
    output:{
        publicPath:"http://localhost:8081/"
    },
    devServer : {
        port : 8081,
        historyApiFallback:{
            index : '/index.html'
        }
    },
    plugins : [
        new ModuleFederationPlugin({
            name:"marketing",
            filename: "remoteEntry.js",
            exposes:{
                "./MarketingApp" : "./src/bootstrap"
            },
            shared: pacakgeJson.dependencies
        }),
        
    ]
}

module.exports = merge(commonConfig, devConfig);