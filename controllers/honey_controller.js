// required dependencies
var express = require('express');
var router = express.Router();

// imports foods and activities objects with methods
var foods = require('../models/foods.js');
var activities = require('../models/activities.js');
var users = require('../models/users');

// basic homepage route
router.get('/', function (req, res) {
    res.render('index');
});

// dashboard / account page
router.get('/dashboard', function (req, res) {
    res.render('dashboard');
});

// create new user
router.post('/api/users/register', function (req, res) {
    newUser = {
        "acct_name": req.body.couplename.split(' ').join('_'),
        "couple_name": req.body.couplename,
        "secret_word": req.body.secretword,
        "userone_name": req.body.user1,
        "usertwo_name": req.body.user2
    };
    users.new(function (result) {
        console.log(result);
        res.sendStatus(200);
    })
});

// swiping page for shared liked ideas
router.get('/both', function (req, res) {
    res.render('both');
});

// FOODS ROUTES

// for initial swiping and liking
router.get('/api/foods/like', function (req, res) {
    foods.all(function (data) {
        res.render('swipe-foods', { foods_data: data });
        console.log(data);
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

// show liked ideas from both users
router.get('/api/foods/both', function (req, res) {
    foods.both(function (data) {
        res.render('both-foods', { foods_data: data })
    })
});

// ACTIVITES ROUTES

// for initial swiping and liking
router.get('/api/activities/like', function (req, res) {
    activities.all(function (data) {
        res.render('swipe-activities', { activities_data: data })
    })
});

// add new food idea
router.post('/api/activities/add', function (req, res) {
    activities.create('')
})

// update 'like' count to food idea
router.put("/api/activities/liked/:id", function (req, res) {
    activities.update(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});

// undo 'like'
router.put("/api/activities/undo/:id", function (req, res) {
    activities.undo(req.params.id, function (result) {
        console.log(result);
        res.sendStatus(200);
    });
});


// exports express router
module.exports = router;