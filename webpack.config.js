//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/
const nodeExternals = require('webpack-node-externals');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/** @type WebpackConfig[] */
const configs = [
    {
        entry: {
            server: './src/index.tsx',
        },
        output: {
            path: __dirname + '/dist',
            filename: '[name].js',
        },
        // Currently we need to add '.ts' to the resolve.extensions array.
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        // Source maps support ('inline-source-map' also works)
        devtool: 'source-map',

        // Add the loader for .ts files.
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.css$/i,
                    //https://stackoverflow.com/questions/47099378/react-ssr-referenceerror-document-is-not-defined
                    use: [MiniCssExtractPlugin.loader, 'css-loader']
                    //use: ["style-loader", "css-loader"],
                },
              {
                    loader: 'babel-loader',
                    test: /\.js|\.jsx$/,
                    exclude: /node_modules/
              },
            ],
        },
        //https://stackoverflow.com/questions/47099378/react-ssr-referenceerror-document-is-not-defined
        plugins: [new MiniCssExtractPlugin()],
        target: 'node',
        externals: [nodeExternals()],
    },
];

module.exports = configs;
