//@ts-check
/** @typedef {import('webpack').Configuration} WebpackConfig **/
const nodeExternals = require('webpack-node-externals');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;
const styledComponentsTransformer = createStyledComponentsTransformer();


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
                    options: {
                      getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
                    }
                },
            ],
        },
        target: 'node',
        externals: [nodeExternals()],
    },
];

module.exports = configs;