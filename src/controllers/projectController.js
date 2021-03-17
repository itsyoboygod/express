const express = require("express");

const authMidlleware = require("../midllewares/auth");

const router = express.Router();

router.use(authMidlleware);

router.get("/", (req, res) => {
    res.send({ ok: true });
});

module.exports = (app) => app.use("/projects", router);