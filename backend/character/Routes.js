const express = require("express");
const {
  createCharacter,
  viewCharacters,
  viewCharacter,
  modifyCharacter,
  deleteCharacter,
} = require("./Controller");
const { viewRelations } = require("../relation/Controller");
const { authenticateToken } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(viewCharacters).post(authenticateToken, createCharacter);

router
  .route("/:id")
  .put(authenticateToken, modifyCharacter)
  .get(viewCharacter)
  .delete(authenticateToken, deleteCharacter);

router.route("/:characterId/relations").get(viewRelations);

module.exports = router;
