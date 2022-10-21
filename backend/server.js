const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = 'mongodb+srv://holaholo:holaholo@cluster0.2zsuxjd.mongodb.net/Cluster0?retryWrites=true&w=majority',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js'),
	kontenRoutes = require('./routes/Konten.js')
var cors = require('cors')
app.use(cors())
var corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api',cors(corsOptions), (req, res) => {
	res.json({message: "API root."})
});

app.use('/api/users',cors(corsOptions), usersRoutes)
app.use('/api/konten',cors(corsOptions), kontenRoutes)



app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})

