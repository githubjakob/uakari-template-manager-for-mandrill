const path = require('path');

module.exports = {
    entry: "./src/main/webapp/app.js",
    output: {
        path: path.resolve(__dirname, "src/main/webapp"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        "presets": ["react"]
                    }
                }
            }
        ]
    }
};