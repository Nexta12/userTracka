const router = require("express").Router();
const postController = require("../controllers/postController");
const {   ensureLoggedin } = require("../middlewares/authentication")


router.get("/create", ensureLoggedin, postController.createPost)
router.post("/create", ensureLoggedin,  postController.createNewPost)
router.get("/:slug", postController.singlePost)




module.exports = router;
