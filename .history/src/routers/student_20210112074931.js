const express = require('express');

const router = require('router');

router.get('/router', (req, res) => {
    res.send('hello from the router side..!')
});

module.exports = router