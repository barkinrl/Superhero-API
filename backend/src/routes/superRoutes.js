const express = require("express");
const router = express.Router();
const { validateSuperhero } = require("../validations/superhero");
const {
  createSuperhero,
  getSuperheroes,
} = require("../controllers/superController");

router.post("/", validateSuperhero, createSuperhero);
router.get("/", getSuperheroes);

module.exports = router;
