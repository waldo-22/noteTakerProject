const notes = require("express").Router()

notes.get('/', (req,res)=> {
    res.send("test")
})

module.exports = notes