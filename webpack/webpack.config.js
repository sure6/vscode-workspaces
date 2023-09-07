const path = require('path');

//代码分离
module.exports = {
    mode:"development",
    devtool:'inline-source-map',
    entry: {
        index:'./src/index.js',
        // another:'./src/another-module.js',
        // index:{
        //     import:"./src/index.js",
        //     dependOn:'shared',
        // },
        // another:{
        //     import:"./src/another-module.js",
        //     dependOn:'shared',
        // },
        // shared:'lodash',
    },
    output: {
        filename:'[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean:true,
    },
    // optimization:{
    //     splitChunks:{
    //         chunks:'all',
    //     }
    // }
};