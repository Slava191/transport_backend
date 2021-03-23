module.exports = class {
    constructor(){}

    async fileUploadAndSaveItInDB(file, table, payload){

        const newFileName = `${this.getFileNameWithoutExt(file)}_${Date.now()}.${this.getFileExt(file)}`

        file.mv('./uploads/'+newFileName); 

        await table.create({
            name: newFileName,
            ...payload
        })
    }

    async manyFilesUploadAndSaveItInDB(files, table, payload){

        if(Array.isArray(files)){

            for(const file of files) 
                await this.fileUploadAndSaveItInDB(file, table, payload)

        }else{
            await this.fileUploadAndSaveItInDB(files, table, payload)
        }

    }

    getFileExt(file){
        return file.name.split(".").pop()
    }

    getFileNameWithoutExt(file){
        return file.name.split(".").shift()
    }
}