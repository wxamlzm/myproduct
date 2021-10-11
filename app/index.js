const express = require('express')
const app = new express()
const routes = require('./router')

app.use(express.urlencoded({extended:false}))

routes(app)


app.listen(3000, () => {
    console.log('linkStart')
})



