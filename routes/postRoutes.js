const express =  require("express");
const authProtect = require("../middleware/authMiddleware");

const router =  express.Router();

const { createPost, getPosts } =  require("../controllers/postController");

router.post("/", authProtect,createPost);
router.get("/", getPosts)

module.exports = router;