let dogName = '{"name": [ "Max", "Buddy", "Charlie", "Jack", "Cooper", "Rocky", "Toby", "Tucker", "Jake", "Bear", "Duke", "Teddy", "Oliver", "Riley", "Bailey", "Bentley", "Milo", "Buster", "Cody", "Dexter", "Winston", "Murphy", "Leo", "Lucky", "Oscar", "Louie", "Zeus", "Henry", "Sam", "Harley", "Baxter", "Gus", "Sammy", "Jackson", "Bruno", "Diesel", "Jax", "Gizmo", "Bandit", "Rusty", "Marley", "Jasper", "Brody", "Roscoe", "Hank", "Otis", "Bo", "Joey", "Beau", "Ollie", "Tank", "Shadow", "Peanut", "Hunter", "Scout", "Blue", "Rocco", "Simba", "Tyson", "Ziggy", "Boomer", "Romeo", "Apollo", "Ace", "Luke", "Rex", "Finn", "Chance", "Rudy", "Loki", "Moose", "George", "Samson", "Coco", "Benny", "Thor", "Rufus", "Prince", "Chester", "Brutus", "Scooter", "Chico", "Spike", "Gunner", "Sparky", "Mickey", "Kobe", "Chase", "Oreo", "Frankie", "Mac", "Benji", "Bubba", "Champ", "Brady", "Elvis", "Copper", "Cash", "Archie", "Walter", "Bella", "Lucy", "Daisy", "Molly", "Lola", "Sophie", "Sadie", "Maggie", "Chloe", "Bailey", "Roxy", "Zoey", "Lily", "Luna", "Coco", "Stella", "Gracie", "Abby", "Penny", "Zoe", "Ginger", "Ruby", "Rosie", "Lilly", "Ellie", "Mia", "Sasha", "Lulu", "Pepper", "Nala", "Lexi", "Lady", "Emma", "Riley", "Dixie", "Annie", "Maddie", "Piper", "Princess", "Izzy", "Maya", "Olive", "Cookie", "Roxie", "Angel", "Belle", "Layla", "Missy", "Cali", "Honey", "Millie", "Harley", "Marley", "Holly", "Kona", "Shelby", "Jasmine", "Ella", "Charlie", "Minnie", "Willow", "Phoebe", "Callie", "Scout", "Katie", "Dakota", "Sugar", "Sandy", "Josie", "Macy", "Trixie", "Winnie", "Peanut", "Mimi", "Hazel", "Mocha", "Cleo", "Hannah", "Athena", "Lacey", "Sassy", "Lucky", "Bonnie", "Allie", "Brandy", "Sydney", "Casey", "Gigi", "Baby", "Madison", "Heidi", "Sally", "Shadow", "Cocoa", "Pebbles", "Misty", "Nikki", "Lexie", "Grace", "Sierra"]}'
let parsedDataDog = JSON.parse(dogName)

let catName = '{"name": [ "Abby", "Angel", "Annie", "Baby", "Bailey", "Bandit", "Bear", "Bella", "Bob", "Boo", "Boots", "Bubba", "Buddy", "Buster", "Cali", "Callie", "Casper", "Charlie", "Chester", "Chloe", "Cleo", "Coco", "Cookie", "Cuddles", "Daisy", "Dusty", "Felix", "Fluffy", "Garfield", "George", "Ginger", "Gizmo", "Gracie", "Harley", "Jack", "Jasmine", "Jasper", "Kiki", "Kitty", "Leo", "Lilly", "Lily", "Loki", "Lola", "Lucky", "Lucy", "Luna", "Maggie", "Max", "Mia", "Midnight", "Milo", "Mimi", "Miss kitty", "Missy", "Misty", "Mittens", "Molly", "Muffin", "Nala", "Oliver", "Oreo", "Oscar", "Patches", "Peanut", "Pepper", "Precious", "Princess", "Pumpkin", "Rascal", "Rocky", "Sadie", "Salem", "Sam", "Samantha", "Sammy", "Sasha", "Sassy", "Scooter", "Shadow", "Sheba", "Simba", "Simon", "Smokey", "Snickers", "Snowball", "Snuggles", "Socks", "Sophie", "Spooky", "Sugar", "Tiger", "Tigger", "Tinkerbell", "Toby", "Trouble", "Whiskers", "Willow", "Zoe", "Zoey"]}'
let parsedDataCat = JSON.parse(catName)

async function Dogs(){
    let dogLink = await fetch('https://dog.ceo/api/breeds/image/random')
    let convertDog = await dogLink.json()
    return convertDog.message
}

async function Cats(){
    let catLink = await fetch('https://api.thecatapi.com/v1/images/search')
    let convertCat = await catLink.json()
    return convertCat[0].url
}

function randomDogName(){
    let randomName = parsedDataDog.name[Math.floor(Math.random()*parsedDataDog.name.length)]
    return randomName
}

function randomCatName(){
    let randomName = parsedDataCat.name[Math.floor(Math.random()*parsedDataCat.name.length)]
    return randomName
}

let animalName = document.querySelector("p.animalName")

let buttonDog = document.querySelector("button.meetDog")
buttonDog.addEventListener("click", async function(){
    let resultDogs = await Dogs()
    document.getElementById('image').style.backgroundImage = "url('"+[resultDogs]+"')"
    let dogsName = await randomDogName()
    animalName.innerText = "This dog is called " + dogsName;
})

let buttonCat = document.querySelector("button.meetCat")
buttonCat.addEventListener("click", async function(){
    let resultCats = await Cats()
    document.getElementById('image').style.backgroundImage = "url('"+[resultCats]+"')"
    let catsName = await randomCatName()
    animalName.innerText = "This cat is called " + catsName;
})