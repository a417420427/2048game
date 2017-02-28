var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.js');
var WebpackDevMiddleware = require('webpack-dev-middleware');
var WebpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var devClient = 'webpack-hot-middleware/client?reload=true';

Object.keys(config.entry).forEach(function (name, i) {
    var extras = [devClient];
    config.entry[name] = extras.concat(config.entry[name]);
})


var compiler = webpack(config);


var devWare = WebpackDevMiddleware(compiler,{
	publicPath: config.output.publicPath,
	stats: {
		color: true,
		chunks: false
	}
});

var hotWare = WebpackHotMiddleware(compiler);

app.use(devWare);
app.use(hotWare);


var port = 1702

app.listen(port,function(err){
	if(err){
		console.log('server run failed')
	}

	console.log("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
})