// required dependencies
var express = require('express');
var router = express.Router();

// imports foods and activities objects with methods
var foods = require('../models/foods.js');
var activities = require('../models/activities.js');

// basic homepage route
router.get('/', function (req, res) {
    res.render('index');
});

router.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

router.get('/test', function (req, res) {
    foods.all(function (data) {
        res.render('test', { foods_data: data });
    })
});

router.get('/both', function (req, res) {
    res.render('both');
});

// FOODS ROUTES

// for initial swiping and liking
router.get('/foods/like', function (req, res) {
    foods.all(function(data) {
        res.render('swipe', {foods_data: data})
    })
});

// add new food idea
router.post('/api/foods/add', function (req, res) {
    foods.create('')
})

// update 'like' count to food idea
router.put("/api/foods/liked/:id", function (req, res) {
    foods.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// undo 'like'
router.put("/api/foods/undo/:id", function (req, res) {
    foods.undo(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

router.get('/activities/like', function (req, res) {
    activities.all(function(data) {
        res.render('swipe', {activites_data: data})
    })
});

// exports express router
module.exports = router;