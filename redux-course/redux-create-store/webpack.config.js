const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/app.ts",
    devServer: {
        static: [
            {
                directory: path.join(__dirname),
            },
        ],
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
    },
    devtool: "source-map",
};
