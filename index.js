/*
	Below is a small script which generates random adventures. There are two
	problems which are marked below with "TODO". Your assignment is to solve
	those TODOs and get this script really up to snuff.
*/

var monsters = [
	"dragon",
	"troll",
	"alien mothership",
	"illithid"
];

var weapons = [
	"deadly dagger",
	"artful axe",
	"skillful swordplay",
	"menacing mace"
];

var actions = [
	"defeated",
	"attacked",
	"ran from",
	"talked to"
];

var heroGender = Math.random() > 0.5 ? "hero" : "heroine";

/*
	TODO: The following three lines of code have a lot of repetition and are
	ripe for turning into a function! Create a function to handle choosing
	a random element from an array instead of doing the math each time.
*/

// I don't need these var's anymore but just wanted to keep to refer to
//var chosenMonster = monsters[Math.floor(Math.random() * monsters.length)];
//var chosenWeapon = weapons[Math.floor(Math.random() * weapons.length)];
//var chosenAction = actions[Math.floor(Math.random() * actions.length)];



function randomElem(advObject) {
    var i = Math.floor(Math.random() * (advObject.length));
    return advObject[i];
}

//I don't need this call (below this sentance) anymore because below, is where we are calling our function. This was just needed to test function at first.  
//randomElem(monsters)

var output = "Armed with only their " +
    randomElem(weapons) +
    " our " +
    heroGender +
    " " +
    randomElem(actions) +
    " the evil " +
    randomElem(monsters) +
    "!";

document.getElementById("adventure").innerText = output;

/*
	TODO: Right now the "new adventure!" button doesn't work. Create a function
	to bind to that button so that the user can create a new adventure without
	refreshing the page.
*/

//so I think we want to attach output to the onClick

function myFunction() {
    var output = "Armed with only their " +
        randomElem(weapons) +
        " our " +
        heroGender +
        " " +
        randomElem(actions) +
        " the evil " +
        randomElem(monsters) +
        "!";

    document.getElementById("adventure").innerText = output;


}






/*
	Optional: Create several more types of adventures, weapons, actions, etc.

	Optional: Allow the user to interact with the story more than just clicking
	the "new adventure!" button. You'll need to create variables to keep track
	of state.

	Optional (advanced): Use document.location.hash in a way which allows the
	user to bookmark a specific story that they like and return to it later.
*/