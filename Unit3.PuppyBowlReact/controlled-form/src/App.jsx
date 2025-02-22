import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import NavBar from "./components/NavBar";
import { getPlayers } from "./api";

const App = () => {
  const [players, setPlayers] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const playerData = await getPlayers();
      setPlayers(playerData);
    };
    fetchData();
  }, []);

  return (
    <>
        <main>
          <h1>Puppy Bowl!</h1>
          <NavBar players={players} setResults={setResults} results={results} />
          <NewPlayerForm getData={() => getPlayers().then(setPlayers)} />
          <Routes>
            <Route path="/" element={<AllPlayers players={players} setPlayers={setPlayers} getData={() => getPlayers().then(setPlayers)} />} />
            <Route path="/search-results" element={<setResults results={results} />} />
          </Routes>
        </main>
    </>
  )
}

export default App
