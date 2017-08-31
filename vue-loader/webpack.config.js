var path = require("path");
var htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	entry:'./main.js', //入口文件
/*	entry: {
        bundle:'./main.js'
        
    },*/
	output:{
		path:__dirname,  //当前路径
		filename:'./dist/bundle.js' //打包文件
		
		// path: path.resolve(__dirname, "bundle/js");
       /* path:path.resolve('./bundle'),
        filename: "[name].js"*/
	},

	module:{
		loaders:[
			{test:/\.vue$/,loader:'vue-loader',exclude:/node_modules/},
			{test:/\.js$/,loader:'babel-loader',exclude:/node_modules/},
			{test: /\.css$/,loader: "style-loader!css-loader",exclude: /node_modules/ }
		]
	},
	/*babel:{
		presets:['es2015'],
		plugins:['transform-runtime']
	},*/
	devServer:{

	},
	resolve:{
		extensions:['.js','.css','.json']  //自动补全识别后缀
	},
	plugins:[
		new htmlWebpackPlugin({
			/*title:"欢迎1",*/
			/*chunks:["bundle"]*/
			template: './index.html'
		})
		
	]
};