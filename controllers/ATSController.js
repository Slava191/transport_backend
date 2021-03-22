const { user: User, ATS, ATSFile } = require('../sequelize').models

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

        if(Array.isArray(files)){

            for(const file of files){ 

                file.mv('./uploads/'+file.name); 

                await ATSFile.create({
                    name: file.name,
                    ATS_id: addedATS.id,
                    user_id
                })

            }

        }else{

            files.mv('./uploads/'+files.name);

            await ATSFile.create({
                name: files.name,
                ATS_id: addedATS.id,
                user_id
            })

        }

        res.send(addedATS)

    }catch(err){
        res.status(400).send(err);
    }

}