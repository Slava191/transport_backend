const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            
            console.log(req.files)

            let file = req.files.file;

            file.mv('./uploads/'+file.name);

            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

module.exports = router