const express = require('express');

const router = new express.Router();

router.get('/router', (req, res) => {
    res.send('hello from the router side..!')
});

module.exports = router