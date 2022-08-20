const api_router = require('express').Router();
const { ObjectId } = require('mongodb');
const { User, Thought, Reaction } = require('../models');

api_router.get('/users', async (req, res) => {
    try {
        res.send(await User.find());
    } catch (err) {
        res.status(500).json(err);
    }
})