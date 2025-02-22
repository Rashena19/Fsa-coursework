import SinglePlayer from "../components/SinglePlayer";
import React from "react";
import { useEffect } from "react";


const AllPlayers = ({ players, getData }) => {
    useEffect(() => {
        getData();
    }, []);


return (
    <div className="article">
        {players.map((player) => (
            <SinglePlayer key={player.id} player={player} getData={getData} />
        ))}
    </div>
);
};

export default AllPlayers;