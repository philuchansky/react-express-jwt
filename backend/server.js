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


//allow http requests from any origin and any header
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});



mongoose.set('useCreateIndex', true)
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
	console.log(err || `Connected to MongoDB.`)
})
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));
app.use(logger('dev'))
app.use(bodyParser.json())


app.get('/api', (req, res) => {
	res.json({message: "API root."})
});

app.use('/api/users', usersRoutes)
app.use('/api/konten', kontenRoutes)



app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})

