const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = 5000

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'src/css'))
app.use('/img', express.static(__dirname + 'src/imgages'))
app.use('/js', express.static(__dirname + 'src/js'))

// Templating Engine
app.set('app', './src/index')
app.set('view engine', 'index')

app.use(bodyParser.urlencoded({ extended: true }))

// Routes
const newsRouter = require('./src/routes.spec')

app.use('/', index.html)
app.use('/article', newsRouter)

// Listen on port 5000
app.listen(port, () => console.log(`Listening on port ${port}`))