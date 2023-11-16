module.exports = (app) => {

    app.get('/', (req, res) => {
        let objController = require(`../src/controllers/HomeController.js`)
        objController.index(req, res)
    
    })

};

