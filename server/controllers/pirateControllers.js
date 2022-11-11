// == CRUD ==
//import the model to make queries to the DB
const Pirate = require('../models/pirate')

// different methods

module.exports = {

    //Read All
    findAll: (req, res) => {
        Pirate.find().sort({name: 1})
            .then(allPirates => {
                res.json(allPirates)
            })
            .catch(err => res.json(err))
        },
    
    // CREATE
    create: ( req, res ) =>{
        if(req.body.position === 'Captain'){
            Pirate.exists({position: req.body.position})
                .then(captainExist => {
                    if (captainExist) {
                        // Promise.reject() will activate the .catch() below.
                        return Promise.reject({errors:{
                            oneCaptain:{message:'Captain already exist'}}});
                    }
                    return (Pirate.create(req.body)
                            .then( newPirate => {
                            res.json(newPirate)
                            }));
                })
                .catch(err => res.status(400).json(err))
        }
        else{
            Pirate.create(req.body)
                .then( newPirate => {
                    res.json(newPirate)
                })
                .catch(err => res.status(400).json(err))
        }
    },

    //READ ONE
    findOne: ( req, res ) =>{
        // Pirate.findOne({_id: req.params.id})
        console.log(req.params.id)
        Pirate.findById( req.params.id )
            .then(onePirate => res.json(onePirate))
            .catch(err => res.status(400).json(err))
    },

    //UPDATE
    update: (req, res) => {
        console.log('UPDATE ID:', req.params.id)
        console.log('req.body:', req.body)
        Pirate.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
            )
            .then(onePirate => res.json(onePirate))
            .catch(err => res.status(400).json(err))
    },

    //DELETE
    delete: ( req, res ) => {
        // Pirate.deleteOne({_id:req.params.id})
        Pirate.findByIdAndDelete( req.params.id )
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }
}