const API_URL = "https://catfact.ninja/"

const state = 
{
    fact: {},
    breeds: []
};

const $catFactContainer = document.getElementById("cat-fact-container");
const $catBreedsContainer  = document.getElementById("cat-breeds-container");

//Fetches a random fact from the /fact endpoint
// and updates the fact object in state
//then re-renders the UI
async function getFact(){

}

//Fetches breeds from the /breeds endpoint
// and updates the breeds array in state
//then re-renders the UI
async function getBreeds(){

}

//Adds the HTML elements needed to the DOM
// with data from the javascript state
function render(){
    //TODO:  A button and a <p> element to the catFactContainer
    //TODO:  Divs for each cat breed type, display the Breed, country, coat and pattern 

}

