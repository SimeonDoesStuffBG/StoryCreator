const express = require("express");
const { authenticateToken } = require("../middleware/authMiddleware");
const {
  createUser,
  logInUser,
  checkUser,
  checkMe,
  checkUsers,
} = require("./Controller");
const { viewCharacters } = require("../character/Controller");
const { viewStories } = require("../story/Controller");

const router = express.Router();

router.post("/", createUser);

router.post("/login", logInUser);

router.get("/me", authenticateToken, checkMe);

router.get("/", checkUsers);

router.get("/:userId", checkUser);

router.get("/:userId/characters", viewCharacters);

router.get("/:userId/stories", viewStories);

module.exports = router;
