const express = require('express')

const routerAdmin = express.Router()

routerAdmin.get("/health", (req, res) => {
    res.status(200).send("hello admin")
})

module.exports.routerAdmin = routerAdmin
