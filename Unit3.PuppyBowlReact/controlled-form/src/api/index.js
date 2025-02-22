const cohort = "2409-GHP-ET-WEB-PT";
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;

// Fetch all players
export const getPlayers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/players`);
    const data = await res.json();
    return data.data.players;
  } catch (error) {
    console.error("Error retrieving players:", error);
  }
};

// Add a new player
export const addPlayer = async (playerData) => {
  try {
    const res = await fetch(`${BASE_URL}/players`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(playerData),
    });
    return await res.json();
  } catch (error) {
    console.error("Error adding player:", error);
  }
};

// Remove a player
export const deletePlayer = async (id) => {
  try {
    await fetch(`${BASE_URL}/players/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(`Error deleting player with ID ${id}:`, error);
  }
};
