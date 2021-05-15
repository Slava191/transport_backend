const express = require('express');
const expressListRoutes = require('express-list-routes');
const models = require('./sequelize').models
const routesFactory = require("./model_description/routesFactory");
const app = express()

require('./handlers/fileUpload').init(app);
require('./handlers/expressAppSetup').init(app);
require('./handlers/cors').init(app);
require('./handlers/auth').init(app);


app
    .use("/users", require("./routes/userRouter.js"))
    .use("/ATS", require("./routes/ATSRouter.js"))
 
const { ATS, ATSFile, user } = models

const mainModelsNames = [ATS, ATSFile, user].map(model => model.name)

const dictionaryModels = Object.values(models).filter(model => !mainModelsNames.includes(model.name))

dictionaryModels.forEach((model) => {
    app.use(`/${model.name}`, routesFactory(express.Router(), model))
})

//expressListRoutes(app);


// const   userRouter = require("./routes/userRouter.js")
//         ATSRouter = require("./routes/ATSRouter.js")
//         gabarityRouter = require("./routes/gabarityRouter.js")
//         hodovyeKachestvaRouter = require("./routes/hodovyeKachestvaRouter.js")
//         harakteristikiDvigatelyaRouter = require("./routes/harakteristikiDvigatelyaRouter")
//         informaciyaOTekhnicheskihUzlahIAgregatahRouter = require("./routes/informaciyaOTekhnicheskihUzlahIAgregatahRouter")
//         massaRouter = require("./routes/massaRouter")
//         transmissiyaIKolyosaRouter = require("./routes/transmissiyaIKolyosaRouter") 
//         upload = require("./routes/upload")

// app
//         .use("/users", userRouter)
//         .use("/ATS", ATSRouter)
//         .use("/gabarity", gabarityRouter)
//         .use("/hodovyeKachestva", hodovyeKachestvaRouter)    
//         .use("/harakteristikiDvigatelya", harakteristikiDvigatelyaRouter)
//         .use("/informaciyaOTekhnicheskihUzlahIAgregatah", informaciyaOTekhnicheskihUzlahIAgregatahRouter)
//         .use("/massa", massaRouter)
//         .use("/transmissiyaIKolyosa", transmissiyaIKolyosaRouter)
//         .use("/upload", upload)

module.exports = app