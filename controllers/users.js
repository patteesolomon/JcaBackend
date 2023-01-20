const express = require('express');
const router = express.Router();
const Users = require('../models/Users.js');
// Remember INDUCES

// Index
router.get('/', (req, res)=>{
    Users.find({}, (err, foundUsers)=>{
        res.json(foundUsers);
    });
});
// New - Will be handled by React application
// Delete
router.delete('/:id', (req, res)=>{
    Users.findByIdAndRemove(req.params.id, (err, deletedUser)=>{
        res.json(deletedUser);
    });
});
// Update
router.put('/:id', (req, res)=>{
    Users.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedUser)=>{
        res.json(updatedUser);
    });
});
// Create
router.post('/', (req, res)=>{
    Users.create(req.body, (err, createdUser)=>{
        res.json(createdUser); //.json() will send proper headers in response so client knows it's json coming back
    });
});
// Edit - Will be handled by React application
// Show
router.get('/:id', (req, res)=>{
    Users.findById(req.params.id, (err, foundUser)=>{
        res.json(foundUser);
    });
});


module.exports = router;