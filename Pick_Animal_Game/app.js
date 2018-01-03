function Animal(animalName, animalClass) {
    this.animalName = animalName;
    this.animalClass = animalClass;
}

function checkAnswer(selectedElement) {
    console.log(selectedElement.innerHTML);
    let after = document.getElementById("after");
    if (selectedElement.target.className === animalClassToBeGuessed) {
        after.innerHTML = "Dobra robota!"
        setTimeout(playAgain, 2000);
    } else {
        after.innerHTML = "Upss coś poszło nie tak. Spróbuj ponownie!"
    }
    selectedElement.stopPropagation();
}

function bindCheckAnswerEvent(index) {
    console.log(index);
    var animalClass = animalCollection[index].animalClass;
    var animalElement = document.getElementsByClassName(animalClass)[0];
    animalElement.addEventListener("click", checkAnswer, false);
}

function playAgain() {
    let after = document.getElementById('after');
    document.getElementById('after').innerHTML = "";

    let indexes = renderAnimalsTable();
    animalClassToBeGuessed = animalToBeGuessed(indexes);
    indexes.forEach(function (value) {
        bindCheckAnswerEvent(value);
    });
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
let mouse = new Animal("mysz", "mouse");
let frog = new Animal("żaba", "frog");
let kangaroo = new Animal("kangur", "kangaroo");
let dragonfly = new Animal("ważka", "dragonfly");
let grasshopper = new Animal("konik polny", "grasshopper");
let doe = new Animal("sarna", "doe");
let tortoise = new Animal("żółw", "tortoise");
let bee = new Animal("pszczoła", "bee");
let ladybird = new Animal("biedronka", "ladybird");
let caterpillar = new Animal("gąsienica", "caterpillar");
let monkey = new Animal("małpa", "monkey");
let rabbit = new Animal("królik", "rabbit");
let hippo = new Animal("hipopotam", "hippo");
let fly = new Animal("mucha", "fly");
let mosquito = new Animal("komar", "mosquito");
let butterfly = new Animal("motyl", "butterfly");

let animalCollection = [sheep, cat, dog, camel, crocodile, polarBear,
    cow, horse, pig, elephant, bear, giraffe, goose, cock, hen, fox,
    wolf, elk, mouse, frog, kangaroo, dragonfly, grasshopper, doe, tortoise,
    bee, ladybird, caterpillar, monkey, rabbit, hippo, fly, mosquito,
    butterfly
];

let indexes = renderAnimalsTable();
let animalClassToBeGuessed = animalToBeGuessed(indexes);

indexes.forEach(function (value) {
    bindCheckAnswerEvent(value);
});
let level = getParameterByName('level');

console.log(level);
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
