const express = require('express')
const app = express()

require('./handlers/bodyParser').init(app);
require('./handlers/cors').init(app);
require('./handlers/auth').init(app);

const   userRouter = require("./routes/userRouter.js")
        ATSRouter = require("./routes/ATSRouter.js")
        hodovyeKachestvaRouter = require("./routes/hodovyeKachestvaRouter.js")
        gabarityRouter = require("./routes/gabarityRouter.js")
        harakteristikiDvigatelyaRouter = require("./routes/harakteristikiDvigatelyaRouter")
        informaciyaOTekhnicheskihUzlahIAgregatahRouter = require("./routes/informaciyaOTekhnicheskihUzlahIAgregatahRouter")
        massaRouter = require("./routes/massaRouter")
        transmissiyaIKolyosaRouter = require("./routes/transmissiyaIKolyosaRouter")

app
        .use("/users", userRouter)
        .use("/ATS", ATSRouter)
        .use("/hodovyeKachestva", hodovyeKachestvaRouter)
        .use("/gabarity", gabarityRouter)
        .use("/harakteristikiDvigatelya", harakteristikiDvigatelyaRouter)
        .use("/informaciyaOTekhnicheskihUzlahIAgregatah", informaciyaOTekhnicheskihUzlahIAgregatahRouter)
        .use("/massa", massaRouter)
        .use("/transmissiyaIKolyosa", transmissiyaIKolyosaRouter)

module.exports = app