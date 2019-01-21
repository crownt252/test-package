const path = require('path');

export default () => (
    {
        mode: 'production',
        entry: './src/lib2.js',
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'lib2.min.js',
            libraryTarget: 'umd',
            globalObject: 'this',
            library: 'Lib2'
        },
        externals: [
            /^config\/.+$/
        ],
        module: {
            rules: [
                {
                    test: /\.(js)$/,
                    exclude: /(node_modules|bower_components)/,
                    use: 'babel-loader'
                }
            ]
        }
    }
);
