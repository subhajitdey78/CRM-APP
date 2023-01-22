const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/api/index')
const db = require('./models')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extende: false }))

mongoose.connect("mongodb://0.0.0.0:27017/relevel_fitness")

app.use(routes)

app.listen(4000, () => {
    console.log("Server now on port 4000")
})