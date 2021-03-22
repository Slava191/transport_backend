const fileUpload = require('express-fileupload');

exports.init = app => app.use(fileUpload({
    createParentPath: true
}));