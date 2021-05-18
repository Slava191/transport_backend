const express = require('express');
const expressListRoutes = require('express-list-routes');
const models = require('./sequelize').models
const routesFactory = require("./model_description/routesFactory");
const app = express()

require('./handlers/fileUpload').init(app);
require('./handlers/cors').init(app);
require('./handlers/expressAppSetup').init(app);
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

module.exports = app