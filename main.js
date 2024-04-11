const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(field) {
    this.field = field;
  }

  // PRINT METHOD
  print() {
    for (let i = 0; i < this.field.length; i++) {
        console.log(this.field[i].join(' '));
    }
  }

  // PLAY GAME METHOD

  playGame() {
    // SET STARTING COORDINATES
    let y = Math.floor(Math.random() * this.field.length);
    let x = Math.floor(Math.random() * this.field[y].length);
    this.field[y][x] = pathCharacter;

    // CHECK FOR HOLE OR HAT
    while ((this.field[y][x] !== hat) && (this.field[y][x] !== hole)) {
        this.field[y][x] = pathCharacter;
        this.print();

        // ASK FOR USER INPUT DIRECTION
        let direction = prompt("Which way to go? (Enter N for North, E for East, S for South or W for West.)");

    // ASSIGNING COORDINATES
        // USER ENTERS N
        if (direction.toUpperCase() === "N") {

            // CHECK EDGE OF FIELD
            if (y === 0) {
                this.print();
                console.log("Cannot move any further North. Please choose another direction.")
                
            } else {
                // MOVE NORTH
                y--;
            }

        // USER ENTERS S    
        } else if (direction.toUpperCase() === "S") {

            // CHECK EDGE OF FIELD
            if (y === this.field.length) {
                this.print();
                console.log("Cannot move any further South. Please choose another direction.")
                
            } else {
                // MOVE SOUTH
                y++;
            }

        // USER ENTERS E
        } else if (direction.toUpperCase() === "E") {

            // CHECK EDGE OF FIELD
            if (x === this.field[y].length) {
                this.print();
                console.log("Cannot move any further East. Please choose another direction.")
            } else {
                // MOVE EAST
                x++;
            } 

        // USER ENTERS W    
        } else if (direction.toUpperCase() === "W") {
            
            // CHECK EDGE OF FIELD
            if (x === 0) {
                this.print();
                console.log("Cannot move any further West. Please choose another direction.")
            } else {
                // MOVE WEST
                x--;
        } 
    }

    // LOSING STATMENT
    if (this.field[y][x] === hole) {
        this.print();
        console.log("You fell in a hole. You lose.")

    // WINNING STATMENT    
    } else if (this.field[y][x] === hat) {
    let hatPerson = [
        [' ', ' ', ' ', '_', '_', ' ', ' ', ' '],
        ['_', '_', '|', '_', '_', '|', '_', '_'],
        [' ', '/', ' ', ' ', ' ', ' ', '\\', ' '],
        ['|', ' ', 'O', ' ', 'O', ' ', ' ', '|'],
        ['|', ' ', ' ', '_', '_', '/', ' ', '|'],
        [' \\____/ '],
    ]
    for (let i = 0; i < hatPerson.length; i++) {
        console.log(hatPerson[i].join(''));
    }
    console.log("You found your hat! You win!");

}
}}


// GENERATE FIELD

static generateField(height, width) {

    // GENERATE GRID
    let newField = [];
    for (let i = 0; i < height; i++) {
        newField.push([]);

        for (let j = 0; j < width; j++) {
            newField[i].push(fieldCharacter);
        }
    }


    // DETERMINE NUMBER OF HOLES
    let numHolesNeeded = Math.floor(0.25 * (height * width));
    let numHoles = 0;

    // PLACING HOLES
    for (let i = 0; numHolesNeeded > numHoles; i++) {

            // DETERMINE RANDOM COORDINATES
        let randomYhole = Math.floor(Math.random() * height);
        let randomXhole = Math.floor(Math.random() * width);
        if (newField[randomYhole][randomXhole] !== hole) {
            newField[randomYhole][randomXhole] = hole;
            numHoles++;
        } 
    }

    // PLACING HAT
    let numHat = 0;

    // PLACING HOLES
    for (let i = 0; numHat === 0; i++) {

        // DETERMINE RANDOM COORDINATES
        let randomYhole = Math.floor(Math.random() * height);
        let randomXhole = Math.floor(Math.random() * width);
        if (newField[randomYhole][randomXhole] !== hole) {
            newField[randomYhole][randomXhole] = hat;
            numHat++;
        } 
    }


    return newField;
}

// START NEW GAME WITH RANDOM BOARD
static startGame() {
    let a = Math.floor(Math.random() * (20 - 5) + 5);
    let b = Math.floor(Math.random() * (20 - 5) + 5);
    let GameField = this.generateField(a, b);
    const Game1 = new Field(GameField);
    Game1.playGame();
}


}

Field.startGame();


  // TESTING CODE


// EXAMPLE FIELD
//const myField = new Field([
//    ['*', '░', 'O'],
//    ['░', 'O', '░'],
//    ['░', '^', '░'],
//  ]);

 


 // myField.print();

  //myField.playGame();

  //console.log(Field.generateField(3, 4));

  //const Game1Field = Field.generateField(5, 7);

  //const Game1 = new Field(Game1Field);

  //Game1.playGame();

  //const Game2 = new Field(Field.generateField(10, 10));
  //Game2.playGame();

 