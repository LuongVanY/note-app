const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const db = require('./db')
const noteRouter = require('./routers/note-router')

require('dotenv').config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'Mongodb connection error'))

app.get('/', (req, res) => {
  res.send('Hsello World')
})

app.use('/api', noteRouter)

app.listen(process.env.PORT, () => console.log('Server running on port ${apiPort}'))
