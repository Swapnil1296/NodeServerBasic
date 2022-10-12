const { Router } = require("express");
const express = require("express");
const { thisFunction } = require("../controllers/controller");

const router = express.Router();
router.get("/", (req,res)=>{
    res.send("this is user ")
});
module.exports = router;
