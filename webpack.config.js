const webpack=require('webpack')



module.exports={
    entry:['script!jquery/dist/jquery.min.js','script!foundation-sites/dist/foundation.min.js','./app/app.jsx'],
    externals:{
        jquery:'jQuery'

    },
    plugins:[
        new webpack.ProvidePlugin({
            '$':'jquery',
            'jQuery':'jquery'
        })
    ],
    
    
    output:{
        path:__dirname,
        filename:'./public/bundle.js'
    },
    resolve:{
        root:__dirname,
        alias:{
           main:'app/components/main.jsx',
           applicationStyles:'app/styles/app.css',
           nav:'app/components/nav.jsx',
           timer:'app/components/timer.jsx',
           countdown:'app/components/countdown.jsx',
           clock:'app/components/clock.jsx',
           countdownform:'app/components/countdownform.jsx',
           controls:'app/components/controls.jsx'
        },
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                loader:'babel-loader',
                query:{
                    presets:['react','es2015']
                },
                test:/\.jsx?$/,
                exclude:/(node_modules|bower_components)/
            }
        ]
    }
}