import React from "react";
import { useState } from "react";
import { addPlayer } from "../api";


const NewPlayerForm = ({ getData }) => {
    const [formData, setFormData] = useState({ name: "", breed: "", image: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await addPlayer(formData);
        setFormData(await response);
        getData();
        e.target.reset();
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="player-form">
               
                 <label htmlFor="name">Puppy Name:</label>
                 <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Puppy's Name" required />

                <label htmlFor="breed">Puppy Breed:</label>
                <input type="text" id="breed" name="breed" value={formData.breed} onChange={handleChange} placeholder="Puppy's Breed" required />

                <label htmlFor="image">Photo:</label>
                <input type="text" id="image" name="image" value={formData.image} onChange={handleChange} placeholder="Imagine URL" />

                <button type="submit">Add New Puppy</button>
            </form>
        </div>
    );

};

export default NewPlayerForm;

