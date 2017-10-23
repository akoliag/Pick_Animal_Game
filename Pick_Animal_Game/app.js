function Animal(animalName, animalClass) {
    this.animalName = animalName;
    this.animalClass = animalClass;
}

function checkAnswer(selectedElement) {
    console.log(selectedElement.innerHTML);
    let after = document.getElementById("after");
    if (selectedElement.target.className === animalClassToBeGuessed) {
        after.innerHTML = "Dobra robota! Naciśnij przycisk Nowa gra aby zagrać ponownie."
    } else {
        after.innerHTML = " Upss coś poszło nie tak. Spróbuj ponownie!"
    }
    selectedElement.stopPropagation();
}

function playAgain() {
    let indexes = renderAnimalsTable();
    animalToBeGuessed(indexes);
}

function animalToBeGuessed(indexes) {
    let animalIndexToBeGuessed = Math.floor(Math.random() * (indexes.length));
    let animal = animalCollection[indexes[animalIndexToBeGuessed]]
    document
        .getElementById('animal_to_be_guessed')
        .innerHTML = animal.animalName;

    return animal.animalClass;
}


function getRandomIndex() {
    return Math.floor(Math.random() * (animalCollection.length));
}

function renderAnimalsTable() {
    let cols = 4;
    let rows = 1;
    let table = '';
    let randomIndex = [];
    for (let row = 0; row < rows; row++) {
        table += '<tr>';
        for (let c = 0; c < cols; c++) {
            let randomValue = getRandomIndex()
            while (randomIndex.includes(randomValue)) {
                randomValue = getRandomIndex()
            }
            randomIndex.push(randomValue)
            let div = "<div class='" + animalCollection[randomValue].animalClass + "'></div>"
            table += '<td>' + div + '</td>';
        }
    }
    table += '</tr>';
    console.log(randomIndex);
    document.getElementById('animal_table').innerHTML = table;

    return randomIndex;
}
function bindCheckAnswerEvent(index) {
    console.log(index);
    var animalClass = animalCollection[index].animalClass;
    var animalElement = document.getElementsByClassName(animalClass)[0];
    animalElement.addEventListener("click", checkAnswer, false);
}

let sheep = new Animal("owca", "sheep");
let cat = new Animal("kot", "cat");
let dog = new Animal("pies", "dog");
let camel = new Animal("wielbłąd", "camel");
let crocodile = new Animal("krokodyl", "crocodile");
let polarBear = new Animal("niedźwiedź polarny", "polar_bear");
let cow = new Animal("krowa", "cow");
let horse = new Animal("koń", "horse");
let pig = new Animal("świnia", "pig");
let elephant = new Animal("słoń", "elephant");
let bear = new Animal("miś", "bear");
let giraffe = new Animal("żyrafa", "giraffe");
let goose = new Animal("gęś", "goose");
let cock = new Animal("kogut", "cock");
let hen = new Animal("kura", "hen");
let fox = new Animal("lis", "fox");
let wolf = new Animal("wilk", "wolf");
let elk = new Animal("łoś", "elk");

let animalCollection = [sheep, cat, dog, camel, crocodile, polarBear,
    cow, horse, pig, elephant, bear, giraffe, goose, cock, hen, fox,
    wolf, elk
];

let indexes = renderAnimalsTable();
const animalClassToBeGuessed = animalToBeGuessed(indexes); //dlaczego tutaj wywołujemy tą funkcję?


indexes.forEach(function (value) {
    bindCheckAnswerEvent(value);
});
// let zeroTableIndex = indexes[0];

// let firstTableIndex = indexes[1];
// var animal1 = animalCollection[firstTableIndex].animalClass;
// var animalOne = document.getElementsByClassName[animal1][1];
// animalOne.addEventListener("click", checkAnswer, false);
// let secondTableIndex = indexes[2];
// var animal2 = animalCollection[secondTableIndex].animalClass;
// var animalTwo = document.getElementsByClassName[animal2][2];
// animalTwo.addEventListener("click", checkAnswer, false);
// let thirdTableIndex = indexes[3];
// var animal3 = animalCollection[thirdTableIndex].animalClass;
// var animalSThree = document.getElementsByClassName[animal3][3];
// animalThree.addEventListener("click", checkAnswer, false);