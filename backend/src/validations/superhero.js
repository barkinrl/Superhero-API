const { body, validationResult } = require("express-validator");

const validateSuperhero = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ max: 100 })
    .withMessage("Name cannot exceed 50 characters"),

  body("superpower").trim().notEmpty().withMessage("Superpower is required"),

  body("humilityScore")
    .isInt({ min: 1, max: 10 })
    .withMessage("Humility score must be 1-10"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateSuperhero };
