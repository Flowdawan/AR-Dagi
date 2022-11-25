document.addEventListener("DOMContentLoaded", function () {

    const animals = ["cat", "duck", "elephant", "goat", "monkey", "rabbit", "raccoon", "snake", "tiger"]
    const food = ["apple"]

    let visibleAnimals = []

    const sceneEl = document.querySelector('a-scene')

    function init() {
        sceneEl.addEventListener("arError", () => {
            console.log("MindAR failed to start - Mostly browser compatbility issue")
        });
        addAnimalEntities()
        addFoodEntities()
        changeOverlayImage()
    }

    function changeOverlayImage() {
        let image = document.getElementById("overlayImage");
        let images = []
        animals.forEach(function (animal) {
            images.push(`../assets/2d/animals/${animal}.jpg`)
        });

        setInterval(function () {
            let random = Math.floor(Math.random() * 9)
            image.src = images[random]
        }, 5000)
    }

    function addAnimalEntities() {
        animals.forEach(function (animal, index) {
            sceneEl.insertAdjacentHTML('beforeend', `<a-entity data-name="${animal}" id="${animal}-entity" mindar-image-target="targetIndex: ${index}"><a-gltf-model id="${animal}-model" rotation="0 0 0 " position="0 0 0" scale="1 1 1" src="#${animal}" animation-mixer></a-entity>`)
            addVisibleEntitiesToArrayListener(animal)
            removeLostEntitiesFromArrayListener(animal)
        });
    }

    function addFoodEntities() {
        let index = animals.length
        food.forEach(function (food) {
            sceneEl.insertAdjacentHTML('beforeend', `<a-entity data-name="${food}" id="${food}-entity" mindar-image-target="targetIndex: ${index}"><a-gltf-model id="${food}-model" class="clickable" position="0 0 0" scale="0.3 0.3 0.3" src="#${food}"></a-entity>`)
            addFoodListener(food)
            index++
        });
    }

    function addFoodListener(entity) {
        document.querySelector(`#${entity}-entity`).addEventListener("targetFound", event => {
            const entity_model = document.querySelector(`#${entity}-model`)
            entity_model.classList.add("clickable")
            entity_model.setAttribute('visible', true)
        });
        document.querySelector(`#${entity}-entity`).addEventListener("click", event => {
            if (visibleAnimals.length > 0) {
                let entity_model = document.querySelector(`#${entity}-model`)
                entity_model.setAttribute('visible', false)
                entity_model.classList.remove("clickable")
                let hearts = document.getElementsByClassName("heart")
                for (var i = 0; i < hearts.length; i++) {
                    hearts[i].classList.add('active');
                }
                setTimeout(function() {
                    for (var i = 0; i < hearts.length; i++) {
                        hearts[i].classList.remove('active');
                    }
                }, 10000);
            }
        });
    }

    function addVisibleEntitiesToArrayListener(entity) {
        document.querySelector(`#${entity}-entity`).addEventListener("targetFound", event => {
            console.log(`${entity} found`);
            visibleAnimals.push(entity)
        });
    }
    function removeLostEntitiesFromArrayListener(entity) {
        document.querySelector(`#${entity}-entity`).addEventListener("targetLost", event => {
            console.log(`${entity} lost`);
            let name = event.target.getAttribute("data-name");
            visibleAnimals = visibleAnimals.filter(item => item !== name)
        });
    }

    init()
});