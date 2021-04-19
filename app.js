/**
 * @description return dino data from json file
 */
let dinoArr = [];
fetch("dino.json")
    .then((response) => response.json())
    .then((data) => {
        dinoArr = data.Dinos;
        getAllDinos(dinoArr);
    })
    .catch((error) => console.log(error.message))
    .finally(() => {});

function getAllDinos(Arr) {
    Arr.map((dino) => console.log(dino))
}

// Create Dino Constructor
/**
 * @description Represents a Dino
 * @constructor
 * @param {string} species - The dino's species
 * @param {number} weight - The dino's weight
 * @param {number} height - The dino's height
 * @param {string} diet - The dino's diet
 * @param {string} fact
 * @param {string} where
 * @param {string} when
 *  @param {string} img
 */

function Dino (species,weight,height,diet,where,when,fact,img){
    this.species = species;
    this.weight = weight;
    this.height = height;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.fact = fact;
    this.img = img;
}

// Create Dino Objects




// Create Human Object
/**
 * @description Represents a Human
 * @constructor
 * @param {string} name
 * @param {number} weight
 * @param {number} height
 */

let human =  {
    name: document.getElementById('name').value,
    feet: document.getElementById('feet').value,
    inches: document.getElementById('inches').value,
    weight: document.getElementById('weight').value,
    diet: document.getElementById('diet').value
}

// Use IIFE to get human data from form
getHuman();

function getHuman () {
    const button = document.getElementById("btn");
    const humanName = document.getElementById("form-name");

        const str = `<span>${human.name}</span>`;
        button.addEventListener("click", function(e){
            e.preventDefault();
            humanName.innerHTML = str;
    })
}


    // Create Dino Compare Method 1 - human tile has no fact
    // NOTE: Weight in JSON file is in lbs, height in inches. 

    
    // Create Dino Compare Method 2 - bird tile says same fact
    // NOTE: Weight in JSON file is in lbs, height in inches.

    
    // Create Dino Compare Method 3 - dino tiles diff facts
    // NOTE: Weight in JSON file is in lbs, height in inches.


    // Generate Tiles for each Dino in Array -
    //Math.floor(Math.random() * array.length)

        // Add tiles to DOM

    // Remove form from screen


// On button click, prepare and display infographic
