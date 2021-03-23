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

    }catch(err){
        console.log(err)
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

exports.deleteATS = async function (req, res){

    try{

        const { id } = req.params

        const attachedFiles = await ATSFile.findAll({ where: { ATS_id: id } })

        //Удалит запись и файлы (по cascade) из БД
        const numOfDeletedRows = await ATS.destroy({ where: { id } })

        //Однако, физически файлы придется удалять вот так (или написать хук, но не знаю что лучше...):
        const fileWorker = new FileWorker()

        for(const { name } of attachedFiles)
            fileWorker.unlink(name)
        

        if(numOfDeletedRows){
            res.status(200).end();
        }else{
            throw new Error("Ошибка")
        }

    }catch(err){

        console.log(err)

        res.status(400).send(err);

    }

}