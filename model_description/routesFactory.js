const CRUDRoutes = require('../libs/CRUDRoutes')

module.exports = (router, model) => {

    CRUDRoutes(router, model);

    return router

};