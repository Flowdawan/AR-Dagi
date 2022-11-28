export class Food {
    constructor(sceneEl, animal) {
        this.sceneEl = sceneEl
        this.animal = animal
        this.food = [
            {
                "name": "apple",
                "position": "0 0 0",
                "scale": "0.3 0.3 0.3"
            },
            {
                "name": "banana",
                "position": "0.08 0.08 0.08",
                "scale": "0 0 0"
            },
        ]

    addFoodEntities() {
        let index = this.animal.animals.length
        this.food.forEach((food) => {
            this.sceneEl.insertAdjacentHTML('beforeend', `<a-entity data-name="${food}" id="${food}-entity" mindar-image-target="targetIndex: ${index}"><a-gltf-model id="${food}-model" class="clickable" position="0 0 0" scale="0.3 0.3 0.3" src="#${food}"></a-entity>`)
            this.addFoodListener(food)
            index++
        });
    }

    addFoodListener(entity) {
        document.querySelector(`#${entity}-entity`).addEventListener("targetFound", event => {
            const entity_model = document.querySelector(`#${entity}-model`)
            entity_model.classList.add("clickable")
            entity_model.setAttribute('visible', true)
        });
        document.querySelector(`#${entity}-entity`).addEventListener("click", event => {
            if (this.animal.visibleAnimals.length > 0) {
                let entity_model = document.querySelector(`#${entity}-model`)
                entity_model.setAttribute('visible', false)
                entity_model.classList.remove("clickable")
                let hearts = document.getElementsByClassName("heart")
                for (var i = 0; i < hearts.length; i++) {
                    hearts[i].classList.add('active');
                }
                setTimeout(function () {
                    for (var i = 0; i < hearts.length; i++) {
                        hearts[i].classList.remove('active');
                    }
                }, 10000);
            }
        });
    }
}


