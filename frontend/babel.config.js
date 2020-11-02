module.exports={
    presets: [
        '@babel/preset-env', //will read the enrivronment and know how he should return the code
        '@babel/preset-react' // adiciona nas funcionalidades do react essa converção
    ],
    plugins:[
        '@babel/plugin-transform-runtime'
    ]
}   