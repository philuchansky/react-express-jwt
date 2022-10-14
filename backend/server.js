const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/react-express-jwt',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js')
var cors = require('cors')
app.use(cors())
var corsOptions = {
	origin: 'http://127.0.0.1:5173/',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api',cors(corsOptions), (req, res) => {
	res.json({message: "API root."})
});

app.use('/api/users', usersRoutes)



app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
