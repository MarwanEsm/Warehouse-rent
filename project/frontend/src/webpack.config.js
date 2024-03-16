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
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader',
            },
        ],
    },
};
