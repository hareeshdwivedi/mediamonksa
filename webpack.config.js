const path = require("path");

module.exports = {

    entry: {
        App: path.resolve(__dirname, "src", "app", "App.tsx"),
    },
    output: {
        path: path.resolve(__dirname, "dist", "js"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [".js", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /(node_modules)/,
                use: ["ts-loader"]
            }
        ]
    }

};