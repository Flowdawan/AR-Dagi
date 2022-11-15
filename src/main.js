const animals = ["cat", "duck", "elephant", "goat", "gorilla", "monkey", "rabbit", "raccoon", "snake", "tiger"]

function changeOverlayImage() {
    let image = document.getElementById("overlayImage");
    let images = []
    animals.forEach(function (animal) {
        images.push(`../assets/2d/animals/${animal}.jpg`)
    });

    setInterval(function () {
        let random = Math.floor(Math.random() * 5)
        image.src = images[random]
    }, 5000)
}

function addEntities() {
    animals.forEach(function (animal, index) {
        document.getElementById("arScene").insertAdjacentHTML('beforeend', `<a-entity mindar-image-target="targetIndex: ${index}"> <a-gltf-model rotation="0 0 0 " position="0 0 0" scale="1 1 1" src="#${animal}" animation-mixer></a-entity>`)
    });
}

addEntities()
changeOverlayImage()