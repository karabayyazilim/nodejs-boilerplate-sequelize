const express = require('express')
const routes = require('./routes')
const config = require('./config')
const helmet = require('helmet')
const app = express()

config()
app.use(express.json())
app.use(helmet())

app.listen(process.env.APP_PORT, () => {
    console.log("Sunucu ayağa kalktı...")
    app.use('/api', routes)
})
