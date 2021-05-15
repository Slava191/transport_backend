const fs = require('fs')

const modelsFiles = fs.readdirSync("./model_description/models")

const rtnObj = {}

for(const modelFile of modelsFiles){
    const model = require(`./models/${modelFile}`)
    rtnObj[model.modelName] = model
}

fs.writeFileSync("./model_description/data/allModelsDescription.js", `module.exports = ${JSON.stringify(rtnObj, null, '\t')}`)