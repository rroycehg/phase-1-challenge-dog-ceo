console.log('%c HI, Group 6', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

document.addEventListener("DOMContentLoaded", bossDog)
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
        img.style.
        div.append(img)
    });
}

