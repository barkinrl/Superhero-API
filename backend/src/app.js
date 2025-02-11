const express = require("express");
const cors = require("cors");

const createApp = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  const superheroRoutes = require("./routes/superRoutes");
  app.use("/superheroes", superheroRoutes);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal server error" });
  });

  return app;
};

if (process.env.NODE_ENV !== "test") {
  const app = createApp();
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = createApp;
