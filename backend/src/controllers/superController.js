const { v4: uuidv4 } = require("uuid");
const superheroes = require("../data");

const createSuperhero = (req, res) => {
  const { name, superpower, humilityScore } = req.body;
  const newHero = {
    id: uuidv4(),
    name,
    superpower,
    humilityScore: parseInt(humilityScore),
    createdAt: new Date().toISOString(),
  };

  superheroes.push(newHero);
  res.status(201).json(newHero);
};

const getSuperheroes = (req, res) => {
  const sorted = [...superheroes].sort(
    (a, b) => b.humilityScore - a.humilityScore || a.name.localeCompare(b.name)
  );
  res.json(sorted);
};

module.exports = { createSuperhero, getSuperheroes };
