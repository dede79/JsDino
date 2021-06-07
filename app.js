//set variables
const grid = document.getElementById("grid");
const formBtn = document.getElementById("btn");
const form = document.getElementById("dino-compare");
const resetBtn = document.getElementById("form-reset");


/**
 * @description return dino data from json file
 */
let dinoArr=[];

let fetchDinos = async () => {
    const response =   await fetch("dino.json");
    const data = await response.json();
    return data;
}

fetchDinos().then((data) => {
    const allDinos = data.Dinos;
    allDinos.map((dino) => {
        dinoArr.push(
            new Dino(
                dino.species,
                dino.weight,
                dino.height,
                dino.diet,
                dino.where,
                dino.when,
                dino.fact,
                dino.img
            )
        );
    });
})
    .catch((err) => {
        console.log(err);
    });
// Create Dino Constructor
/**
 * @description Represents a Dino
 * @constructor
 * @param {string} species
 * @param {number} weight
 * @param {number} height
 * @param {string} diet
 * @param {string} fact
 * @param {string} where
 * @param {string} when
 * @param {string} img
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

function shuffleTiles(arr){
    arr.sort(() => Math.random() - 0.5);
}

// Create Human Object
/**
 * @description Represents a Human
 * @constructor
 * @param {string} name
 * @param {number} weight
 * @param {number} height
 * @param {string} diet
 */
function Human(name,weight,height,diet){
    this.name = name,
    this.weight = weight,
    this.height = height,
    this.diet = diet
}


function getRandomFact(dino) {
    // Create an array of facts
    // you could add the default dino fact too
    const arrayItems = [dino.compareHeight(dino.height), dino.compareWeight(dino.weight),dino.compareDiet(dino.diet) ];
    // Generate a random number
    const index = Math.floor(Math.random() * arrayItems.length);
    return arrayItems[index];
}

// Generate Tiles for each Dino in Array -

let addTiles = [];

function dinoTiles(){
    dinoArr.forEach((dino)=>{
        addTiles += `<div class="grid-item">
            <h3>${dino.constructor.name === 'Dino' ? dino.species : dino.name}</h3>
            <img src="${dino.constructor.name === 'Human' ? 'images/human.png' : dino.img }" alt="tiles">
            <p>${
                 dino.constructor.name === 'Human' ? '' : 
                 dino.species == "Pigeon" ? "All birds are living dinosaurs" : 
                 getRandomFact(dino)
            }</p>
        </div>`;
    });
    return addTiles;
}


// On button click, prepare and display infographic
formBtn.addEventListener("click", function(e) {
    e.preventDefault();

     let human = new Human(
          document.getElementById("name").value,
          parseInt(document.getElementById("weight").value),
          parseInt((document.getElementById("feet").value * 12)) + parseInt(document.getElementById("inches").value),
          (document.getElementById("diet").value).toLowerCase()
      );

    //The compare functions are added here
    Dino.prototype.compareHeight = function (dinoHeight) {
        if (human.height > dinoHeight){
            return "you are taller than this dino";
        } else{
            return "you are smaller than this dino";
        }
    }

    Dino.prototype.compareWeight = function (dinoWeight) {
        if (human.weight > dinoWeight) {
            return "you are heavier than this dino";
        } else {
            return "you are lighter than this dino";
        }
    }

    Dino.prototype.compareDiet = function (dinoDiet) {
        if (human.diet === dinoDiet){
            return "you have the same diet!";
        }else{
            return `you are a ${human.diet} and this dino is a ${dinoDiet}`;
        }
    }

    shuffleTiles(dinoArr);

    dinoArr.splice(4, 0, human);
    form.style.display = "none";
    grid.innerHTML = dinoTiles();
});

//reset form - NOT BEING USED
//     resetBtn.addEventListener("click", function(e) {
//         e.preventDefault();
//
//         while (grid.firstChild) {
//             grid.removeChild(grid.firstChild);
//         }
//
//         dinoArr.splice(4,1)
//
//         resetBtn.style.display = 'none';
//
//         //reinstate and reset form
//         form.reset();
//         form.style.display = "block";
//         grid.innerHTML = " "
//     });


