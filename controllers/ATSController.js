const { user: User, ATS, ATSFile } = require('../sequelize').models
const FileWorker = require('../libs/FileWorker')

exports.getAllATS = async function(req, res){

    try{

        let allATS = await ATS.findAll({
            // raw:true, 
            include: [ User, ATSFile ],
            order: [
                ['id', 'DESC']
            ]
        })

        res.send(allATS)

    }catch(e){
        console.log(e)
    }

};

exports.addATS = async function (req, res){

    try{

        const data  = req.body
        const files = req.files.files

        const { id: user_id } = req.user

        const addedATS = await ATS.create({ 
            ...data,
            user_id
        })

        const fileWorker = new FileWorker()

        await fileWorker.manyFilesUploadAndSaveItInDB(files, ATSFile, {
            ATS_id: addedATS.id,
            user_id
        })

        res.send(addedATS)

    }catch(err){
        console.log(err)
        res.status(400).send(err);
    }

}