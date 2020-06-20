const express = require('express')
const router = express.Router()
var objectID = require('mongoose').Types.ObjectId

//User model
const User = require('../../models/User')

//@route GET api/users
//@desc Get all users
//@access Public
router.get('/', (req, res) => {
    User.find()
        // .sort({ date: -1 })                 // -1 means descending order 
        .then(users => res.json(users))
})

//@route POST api/users
//@desc Create an user 
//@access Public
router.post('/', (req, res) => {
    const newUser = new User({
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email
    })

    newUser.save()
        .then(user => res.json(user))
})

//@route Delete api/users/:id
//@desc Delete an user 
//@access Public
router.delete('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => user.remove())
        .then(() => res.json({ success: true }))
        .catch(err => res.status(404).json({ success: false }))
})

//@route Update api/users/:id
//@desc Update an user 
//@access Public
router.put('/:id', function (req, res, next) {
    const newUser = new User({
        name: req.body.name,
        address: req.body.address,
        contact: req.body.contact,
        email: req.body.email
    })
    User.findByIdAndUpdate(req.params.id, req.body, function (err, newUser) {
        if (err) return next(err);
        res.json(newUser);
    });
});

module.exports = router