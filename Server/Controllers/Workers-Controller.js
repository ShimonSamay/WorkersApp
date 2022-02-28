const Workers = require("../Models/Worker-Model");

const getAll = async (req , res) => {
     await Workers.find()
     .then(data => res.send(data))
     .catch(err => res.status(400).send({message:err}))
}

const getById = async (req , res) => {
    await Workers.findById(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.status(400).send({message:err}))
}

const addWorker = async (req , res) => {
     await Workers.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(400).send({message:err}))
}

const updateWorker = async (req , res) => {
     await Workers.findByIdAndUpdate(req.params.id , req.body)
    .then(data => res.send(data))
    .catch(err =>  res.status(400).send({message:err}))
}

const deleteWorker = async (req , res) => {
     await Workers.findByIdAndRemove(req.params.id)
    .then(data => res.send(data))
    .catch(err =>  res.status(400).send({message:err}))
}

module.exports = {
    getAll ,
    getById ,
    addWorker ,
    updateWorker , 
    deleteWorker
}