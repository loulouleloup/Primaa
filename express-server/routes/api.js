const express = require('express');
const router = express.Router();

let text = "some text";

router.get('/someData', (req, res) => {
    res.status(200).json(text);
});

module.exports = router;