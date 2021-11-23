const express = require('express');
const router = express.Router();

let users = [
    { "name": "Available", "age": 23},
    { "name": "Ready", "age": 24 },
    { "name": "Started", "age": 25 }
];



// GET all users.
router.get('/users', (req, res) => {
    res.status(200).json(users);
});

router.post('/users', (req, res) => {
   let user = [{"name":req.body.name,"age":req.body.age}];
    users.push(user);
    res.status(200).json('user added');
});


module.exports = router;