const express = require('express')
const app = express()

require('./handlers/bodyParser').init(app);
require('./handlers/cors').init(app);
require('./handlers/auth').init(app);

const userRouter = require("./routes/userRouter.js")
const ATSRouter = require("./routes/ATSRouter.js")
const hodovoeKachestvoRouter = require("./routes/hodovoeKachestvoRouter.js")
const gabarityRouter = require("./routes/gabarityRouter.js")

app
    .use("/users", userRouter)
    .use("/ATS", ATSRouter)
    .use("/hodovoeKachestvo", hodovoeKachestvoRouter)
    .use("/gabarity", gabarityRouter)

module.exports = app