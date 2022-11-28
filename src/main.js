import { Animal } from "./animals.js";
import { Food } from "./food.js";


document.addEventListener("DOMContentLoaded", function () {
    const sceneEl = document.querySelector('a-scene')
    const animal = new Animal(sceneEl)
    const food = new Food(sceneEl, animal)

    function init() {
        sceneEl.addEventListener("arError", () => {
            console.log("MindAR failed to start - Mostly browser compatbility issue")
        });

        animal.addAnimalEntities()
        food.addFoodEntities()
        changeOverlayImage()
    }

    function changeOverlayImage() {
        let image = document.getElementById("overlayImage");
        let images = []
        animal.animals.forEach(function (animal) {
            images.push(`../assets/2d/animals/${animal.name}.jpg`)
        });

        setInterval(function () {
            let random = Math.floor(Math.random() * 9)
            image.src = images[random]
        }, 5000)
    }
    
    init()
});