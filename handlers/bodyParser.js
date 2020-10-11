const bodyParser = require("body-parser");

exports.init = app => app
                        .use(bodyParser.urlencoded({extended: false}))
                        .use(bodyParser.json())