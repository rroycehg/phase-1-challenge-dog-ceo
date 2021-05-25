console.log('%c HI, Group 6', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

function bossDog() {
    fetch(imgUrl)
    .then(res => res.json())
    .then(function(data) {var dogArray = data["message"]})
    
}

//outside function for bossDog (DOM)

function appendDogs(array) {
    let img = document.createElement("img")
    array.forEach(element => {
        
    });
}

