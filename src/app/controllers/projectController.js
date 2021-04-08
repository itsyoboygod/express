const express = require("express");
const authMidlleware = require("../midllewares/auth");

const Project = require('../models/projects')
const Task = require('../models/task')


const router = express.Router();

router.use(authMidlleware);

router.get("/", async (req, res) => {
    res.send({ user: req.userId });
});

router.get('/:projectId', async (req, res) => {
    res.send({ user: req.userId });

});

router.get('/', async (req, res) => {
    res.send({ user: req.userId });

});

router.put('/:projectId', async (req, res) => {
    res.send({ user: req.userId });
});

    
router.delete('/:projectId', async (req, res) => {
    res.send({ user: req.userId });
});
    
    
    
    module.exports = (app) => app.use("/projects", router);