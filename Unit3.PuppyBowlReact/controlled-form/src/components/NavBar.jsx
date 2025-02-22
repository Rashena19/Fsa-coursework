import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";


const NavBar = ({ players, setResults }) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");

    const searchPlayers = (e) => {
        e.preventDefault();
        const filteredPlayer = players.filter(player =>
            player.name.toLowerCase().includes(query.toLowerCase())
        );
        setResults(filteredPlayer);
        navigate("/AllPlayers");
    };
    return (
        <div className="navbar">
            <h2>Puppy Finder</h2>
            <form onSubmit={searchPlayers} className="search-form">
                <input type="text" placeholder="Search Puppies" value={query} onChange={(e) => setSQuery(e.target.value)} /> 

                <button type="submit">Search</button>
            </form>
        </div>
    );
}
export default NavBar;