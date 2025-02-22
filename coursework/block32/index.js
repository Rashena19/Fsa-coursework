//import modules
const { Client } = require("pg");
const express = require("express");
const  path = require("path");
const morgan = require("morgan")


envDatabaseUrl = process.env.DATABASE_URL || " " // remember once progres is link to add it here
const db = new Client(envDataBaseUrl);
const server = express();

//middleware setup
server.use(expresss.json());
server.use(morgan("dev"));
server.use(express.static(path.resolve(__dirname, "../client/dist")));


//Fetch All Flavors
//Fectch all single flavor by ID
//Add new flavor
//Update existing flavor 
//Remove single flavor
//Initialize database and start server
