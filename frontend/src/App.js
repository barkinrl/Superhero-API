import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [name, setName] = useState("");
  const [superpower, setSuperpower] = useState("");
  const [humilityScore, setHumilityScore] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSuperheroes();
  }, []);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000); // 3 second timeout
      return () => clearTimeout(timer);
    }
  }, [error]);

  const fetchSuperheroes = async () => {
    try {
      const response = await axios.get("http://localhost:3000/superheroes");
      setSuperheroes(response.data);
    } catch (error) {
      console.error("Error fetching superheroes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // humilityScore control
    if (humilityScore < 1 || humilityScore > 10) {
      setError("Humility score must be between 1 and 10.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/superheroes", {
        name,
        superpower,
        humilityScore,
      });
      fetchSuperheroes();
      setName("");
      setSuperpower("");
      setHumilityScore("");
    } catch (error) {
      console.error("Error creating superhero:", error);
      setError("An error occurred while creating the superhero.");
    }
  };

  return (
    <div className="container">
      <h1>Superheroes</h1>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Superpower"
          value={superpower}
          onChange={(e) => setSuperpower(e.target.value)}
        />
        <input
          type="number"
          placeholder="Humility Score"
          value={humilityScore}
          onChange={(e) => setHumilityScore(e.target.value)}
        />
        <button type="submit">Add Superhero</button>
      </form>
      <ul>
        {superheroes.map((hero) => (
          <li key={hero.id}>
            {hero.name} - {hero.superpower} (Humility: {hero.humilityScore})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
