const express = require('express')
const routes = require('./router')
const app = new express()

routes(app)

app.listen(3000, () => {
    console.log('linkstart')
})