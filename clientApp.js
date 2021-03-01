const express = require('express')
const clientApp = express()
const clientAppRouter = express.Router();
const path = require('path')
const fs = require('fs');

clientAppRouter
        .get('*', async (req, res) => {
            const frontend = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf8')
            res.send(frontend)
        })


clientApp
        .use(express.static(path.join(__dirname, 'dist')))
        .use("/", clientAppRouter)

module.exports = clientApp