const express = require('express')
const app = express()

const userRouter = require("./routes/userRouter.js")

require('./handlers/bodyParser').init(app);
require('./handlers/auth').init(app);

app.use("/users", userRouter)

module.exports = app