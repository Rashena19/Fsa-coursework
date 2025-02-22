import React from "react";
import { useState } from "react";
import { deletePlayer } from "../api";

function SinglePlayer({ player, getData }) {
    const [showDetails, setShowDetails] = useState(false);

    const handleDelete = async () => {
        await deletePlayer(player.id);
        getData();
    };

    return (
        <div className="player-container">
            <div className="player-card">
            <h2>{player.name}</h2>
            <img src={player.imageUrl} alter={player.name} className="player-imagine" />
            <div className="button-group">
                <button onClick={() => setShowDetails(!showDetails)}>
                    {showDetails ? "Hide Details" : "View Details"}
                </button>
                <button onClick={handleDelete} className="delete-button">Delete</button>
            </div>
        </div>
        { showDetails && (
            <div className="player-details">
                <p><strong>ID:</strong> {player.id}</p>
                <p><strong>Breed:</strong> {player.breed}</p>
                <p><strong>Status:</strong> {player.status}</p>
            </div>
        )}
        </div >
    );
};
export default SinglePlayer;