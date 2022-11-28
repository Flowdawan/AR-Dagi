export class Animal {
    constructor(sceneEl) {
        this.visibleAnimals = []
        this.sceneEl = sceneEl
        this.animals = [
            {
                "name": "cat",
                "position": "0 0 0",
                "scale": "1 1 1"
            },
            {
                "name": "duck",
                "position": "0 0 0",
                "scale": "1 1 1"
            },
            {
                "name": "elephant",
                "position": "0 0 0",
                "scale": "0.01 0.01 0.01"
            },
            {
                "name": "goat",
                "position": "0 0 0",
                "scale": "1 1 1"
            },
            {
                "name": "monkey",
                "position": "0.5 0 0",
                "scale": "0.4 0.4 0.4"
            },
            {
                "name": "rabbit",
                "position": "0 0 0",
                "scale": "1.2 1.2 1.2"
            },
            {
                "name": "raccoon",
                "position": "0 0 0",
                "scale": "1 1 1"
            },
            {
                "name": "snake",
                "position": "0 0 0",
                "scale": "0.7 0.7 0.7"
            },
            {
                "name": "tiger",
                "position": "0 0 0",
                "scale": "0.6 0.6 0.6"
            },
        ]
    }
    addAnimalEntities() {
        this.animals.forEach((animal, index) => {
            this.sceneEl.insertAdjacentHTML('beforeend', `<a-entity data-name="${animal.name}" id="${animal.name}-entity" mindar-image-target="targetIndex: ${index}"><a-gltf-model id="${animal.name}-model" rotation="0 0 0" position="${animal.position}" scale="${animal.scale}" src="#${animal.name}" animation-mixer></a-entity>`)
            this.addVisibleEntitiesToArrayListener(animal)
            this.removeLostEntitiesFromArrayListener(animal)
        });
    }

    addVisibleEntitiesToArrayListener(entity) {
        document.querySelector(`#${entity.name}-entity`).addEventListener("targetFound", event => {
            console.log(`${entity.name} found`);
            this.visibleAnimals.push(entity)
        });
    }
    removeLostEntitiesFromArrayListener(entity) {
        document.querySelector(`#${entity.name}-entity`).addEventListener("targetLost", event => {
            console.log(`${entity.name} lost`);
            let name = event.target.getAttribute("data-name");
            this.visibleAnimals = this.visibleAnimals.filter(item => item !== name)
        });
    }
}