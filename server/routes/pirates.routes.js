const Pirate = require('../controllers/pirateControllers')
const User = require('../controllers/userControllers')

module.exports = (app) => {
    app.get('/api/user/:email', User.findOne)
    app.post('/api/users', User.create)
    app.get('/api/pirates', Pirate.findAll )
    app.post('/api/pirates', Pirate.create )
    app.get('/api/pirates/:id', Pirate.findOne )
    app.put('/api/pirates/:id', Pirate.update)
    app.delete('/api/pirates/:id', Pirate.delete)
}