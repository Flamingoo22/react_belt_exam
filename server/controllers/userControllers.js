const User = require('../models/user')

module.exports = {
    // CREATE
    create: ( req, res ) =>{
        console.log(req.body)
        User.create(req.body)
            .then( newUser => {
                res.json(newUser)
            })
            .catch(err => res.status(400).json(err))
    },
    findOne: ( req, res ) =>{
        // User.findOne({_id: req.params.id})
        User.findOne( {email:req.params.email} )
            .then(oneUser => {
                res.json(oneUser)})
            .catch(err => res.status(400).json(err))
    }
}