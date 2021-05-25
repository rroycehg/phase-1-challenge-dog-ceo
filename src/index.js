console.log('%c HI, Group 6', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", bossDog)
document.addEventListener("DOMContentLoaded", bossBreed)
function bossDog() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(function(data) {
        let dogArray = data["message"]
        appendDogs(dogArray)
    })
}

//outside function for bossDog (DOM)

function appendDogs(array) {
    
    
    array.forEach(element => {
        let div = document.querySelector('#dog-image-container')
        let img = document.createElement("img")
        img.src = `${element}`
        img.alt = `${element}`
        img.style.height = '200px'
        img.style.width = '200px'
        div.append(img)
    });
}


//Challenge 2

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function bossBreed() {
    fetch(breedUrl)
    .then(res => res.json())
    .then(function(data) {
        let dogBreeds = data["message"]
         appendBreeds(dogBreeds)
    })}



function appendBreeds(array) {
    
    for(elements in array){  
        let ul = document.querySelector('#dog-breeds')
        let li = document.createElement("li")
        li.textContent = elements
        li.style.color = "black"
        li.addEventListener('click', changeColor)
        ul.append(li)
    };
    
}

//addEventlisten for click and change color of clicked breed name

function changeColor(e) {
    if (e.target.style.color == "black") {
    e.target.style.color = "red"
 } else {
     e.target.style.color = "black"
 }

}























