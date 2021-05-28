const router = require('express').Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

let User = require('../models/user.model');

// get all users
router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// get user by ID (id given by mongoDB on creation)
router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

// add a user
router.route('/add').post((req, res) => {

    bcrypt.genSalt(saltRounds, (err, salt) => {
        bcrypt.hash(req.body.password, salt, (err, hash) => {
            console.log(hash);
            const username = req.body.username;
            const password = hash;
            const newUser = new User({username, password});

            newUser.save()
                .then(() => res.json('User added!'))
                .catch(err => res.status(400).json('Error: ' + err));
        });
    });
    
});

// update a user's username by the given ID
router.route('/update_username/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;

            user.save()
                .then(() => res.json('username updated'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

// update a user's password by the given ID
// router.route('/update_password/:id').post((req, res) => {
//     User.findById(req.params.id)
//         .then(user => {
//             user.password = req.body.password;

//             user.save()
//                 .then(() => res.json('password updated'))
//                 .catch(err => res.status(400).json('Error: ' + err));
//         })
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;