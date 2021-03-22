const express = require('express');
const fileUpload = require('express-fileupload');
const app = express()

require('./handlers/fileUpload').init(app);
require('./handlers/expressAppSetup').init(app);
require('./handlers/cors').init(app);
require('./handlers/auth').init(app);

const   userRouter = require("./routes/userRouter.js")
        ATSRouter = require("./routes/ATSRouter.js")
        gabarityRouter = require("./routes/gabarityRouter.js")
        hodovyeKachestvaRouter = require("./routes/hodovyeKachestvaRouter.js")
        harakteristikiDvigatelyaRouter = require("./routes/harakteristikiDvigatelyaRouter")
        informaciyaOTekhnicheskihUzlahIAgregatahRouter = require("./routes/informaciyaOTekhnicheskihUzlahIAgregatahRouter")
        massaRouter = require("./routes/massaRouter")
        transmissiyaIKolyosaRouter = require("./routes/transmissiyaIKolyosaRouter") 
        upload = require("./routes/upload")

app
        .use("/users", userRouter)
        .use("/ATS", ATSRouter)
        .use("/gabarity", gabarityRouter)
        .use("/hodovyeKachestva", hodovyeKachestvaRouter)    
        .use("/harakteristikiDvigatelya", harakteristikiDvigatelyaRouter)
        .use("/informaciyaOTekhnicheskihUzlahIAgregatah", informaciyaOTekhnicheskihUzlahIAgregatahRouter)
        .use("/massa", massaRouter)
        .use("/transmissiyaIKolyosa", transmissiyaIKolyosaRouter)
        .use("/upload", upload)

module.exports = app