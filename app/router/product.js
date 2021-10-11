const express = require('express')
const router = express.Router()
const Product = require('../model/Product')


router.get('/', async (req, res) => {

    const list = await Product.findAll()

    res.send(list)
})

router.post('/add', async (req, res) => {

    const product = {pid: 0, ...req.body}

    const naicha = await Product.create(product)

    console.log(naicha)

    res.send(req.body)
})

router.get('/del', async (req, res) => {
    let pid = req.query.pid;

    const del = Product.findOne({pid})

    res.send(del)
})

module.exports = router