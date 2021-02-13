const express = require('express')
const app = express()

require('./handlers/bodyParser').init(app);
require('./handlers/cors').init(app);
require('./handlers/auth').init(app);

const userRouter = require("./routes/userRouter.js")
const ATSRouter = require("./routes/ATSRouter.js")

app.use("/users", userRouter)
app.use("/ATS", ATSRouter)

module.exports = app