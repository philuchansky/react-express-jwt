const
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react-express-jwt',
	PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})