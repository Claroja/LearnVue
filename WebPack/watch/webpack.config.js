//webpack.config.js支持Node代码
const path = require('path')
//挂载到plugins节点
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.join(__dirname, './src/main.js'),
	output: {
        path: path.join(__dirname, './dist'),
		filename: 'bundle.js'
	},
	plugins:[ // 添加plugins节点配置插件
		new htmlWebpackPlugin({
			template:path.resolve(__dirname, './src/index.html'),//模板路径
			filename:'index.html'//自动生成的HTML文件的名称
		})
	],
	module: { // 用来配置第三方loader模块的
        rules: [ // 文件的匹配规则
			{ test: /\.css$/, use: ['style-loader', 'css-loader'] },//处理css文件的规则
			{ test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理图片路径
			{ test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' }, // 处理字体文件
			{ test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, // 配置 Babel 来转换高级的ES语法,不要转换下载的第三方模块
        ]
    }
}