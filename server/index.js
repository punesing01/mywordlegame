const express = require('express'),
  https = require('https'),
  bodyParser = require('body-parser'),
  path = require('path'),
  cors = require('cors'),
  csurf = require('csurf'),
  cookieParser = require('cookie-parser')
const routes = require('./routes')
const app = express()

const csrfMiddleware = csurf({
  cookie: true
})

app.server = https.createServer(app)
app.use(cors())
app.use(cookieParser())
app.use(csrfMiddleware)
app.options('*', cors())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../build'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ entended: true }))
app.use(express.static('build'))

app.use('/', routes)

app.listen(process.env.PORT || 8000)
module.exports = app
