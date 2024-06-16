const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');



module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
    },
    plugins: [
        new NodePolyfillPlugin()
    ],
    externals: {
        // Exclude node core modules
        'node:util': 'util'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader', // Injects styles into DOM
                    'css-loader', // Turns CSS into CommonJS
                    'postcss-loader', // Process CSS with PostCSS
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            sourceMap: true, // Enable source maps to fix resolving issues
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true, // Enable source maps to support resolve-url-loader
                        },
                    },
                ],
            }
        ]
    }
};
