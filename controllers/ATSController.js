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

exports.getOneATS = async function(req, res){

    try{

        const { id } = req.params

        let oneATS = await ATS.findByPk(id, { 
            include: [ User, ATSFile ],
        })

        res.send(oneATS)

    }catch(err){
        console.log(err)
    }

};

exports.addATS = async function (req, res){

    try{

        const data  = req.body
        const { id: user_id } = req.user

        console.log(data)

        const addedATS = await ATS.create({ 
            ...data,
            user_id
        })

        const files = req.files?.files

        if(files){

            const fileWorker = new FileWorker()

            await fileWorker.manyFilesUploadAndSaveItInDB(files, ATSFile, {
                ATS_id: addedATS.id,
                user_id
            })

        }

        res.send(addedATS)

    }catch(err){
        res.status(400).send(err);
    }

}

exports.updateATS = async function(req, res){

    try{

        const data = req.body
        const { id } = req.params

        const [updateRes] = await ATS.update(
            data, 
            { where: { id } }
        )

        const files = req.files?.files
        
        if(files){

            const fileWorker = new FileWorker()

            const attachedFiles = await ATSFile.findAll({where: { ATS_id: id }})

            for(const attachedFile of attachedFiles){

                await ATSFile.destroy({ where: { id: attachedFile.id } })

                await fileWorker.unlink(attachedFile.name)

            }

            const { id: user_id } = req.user
                
            await fileWorker.manyFilesUploadAndSaveItInDB(files, ATSFile, {
                ATS_id: id,
                user_id
            })

        }

        if(updateRes){
            res.status(200).end();
        }else{
            throw new Error("Ошибка")
        }

    }catch(err){

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