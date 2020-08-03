module.exports = {
    context: `${__dirname}/src`,
    entry: './index.tsx',
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js",
        publicPath: '/assets',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    devServer: {
        contentBase: `${__dirname}/static`,
        host: '0.0.0.0'
    }
}