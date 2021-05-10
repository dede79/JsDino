//set variables
const grid = document.getElementById("grid");
const formBtn = document.getElementById("btn");
const form = document.getElementById('dino-compare')
const resetBtn = document.getElementById('form-reset')



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
 *  @param {string} img
 */

function Dino (species,weight,height,diet,where,when,fact,img){
    this.species = species;
    this.weight = weight;
    this.fact = fact;
    this.diet = diet;
    this.where = where;
    this.when = when;
    this.height = height;
    this.img = img;

    // Create Dino Compare Method 1 - human tile has no fact
    //HEIGHT
    this.compareHeight = function (){
         if(this.height > humanData.height){
             return `${this.species} is taller than ${humanData.name}`;
         } else {
             return `${human.name} is taller than ${this.species}`;
         }
    }

    //WEIGHT
    this.compareWeight = function (){
        if(this.weight < human.weight){
            return `you are heavier than ${this.species}`;
        } else {
            return `you are lighter than ${this.species}`;
        }
    }

    //DIET
    this.compareDiet = function (){
        if(this.diet === human.diet){
            return `you and ${this.species} have the same diet!`;
        }
    }
}

/**
 * @description return dino data from json file
 */
let dinoArr=[];

const fetchDinos = async () => {
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


// Create Human Object
/**
 * @description Represents a Human
 * @constructor
 * @param {string} name
 * @param {number} feet
 * @param {number} inches
 * @param {number} weight
 * @param {string} diet
 */

function Human(){
    this.name= document.getElementById('name').value,
    this.feet= document.getElementById('feet').value,
    this.inches= document.getElementById('inches').value,
    this.weight= document.getElementById('weight').value,
    this.diet= document.getElementById('diet').value
    this.showHuman = function() {
         return `<div class="grid-item">
        <h3>${this.name}</h3>
        <img src="./images/human.png" alt="human">
        <p></p>
        </div>`;
    }
}

let human = new Human();

function shuffleTiles(arr){
    arr.sort(() => Math.random() - 0.5);
}

    // Generate Tiles for each Dino in Array -
    //Math.floor(Math.random() * array.length)
   function dinoTiles(){
       let addTiles = [];
      shuffleTiles(dinoArr);
      dinoArr.map((dino)=>{
            addTiles += `<div class="grid-item">
            <h3>${dino.species}</h3>
            <img src="${dino.img}" alt="${dino.species}">
            <p>${dino.species === "Pigeon" ? "All birds are living dinosaurs" : dino.compareWeight()}</p>
        </div>`;
      });
        return addTiles;

   }

// On button click, prepare and display infographic
formBtn.addEventListener("click", function(e) {
    e.preventDefault();

        let human = new Human();
        human.showHuman();

      console.log(human.showHuman());
    form.style.display = "none";
    grid.innerHTML = dinoTiles();
});

resetBtn.addEventListener("click", function() {
    // reinstate and reset form
    grid.style.display = "none";
    form.reset();
    form.style.display = "block";
});



