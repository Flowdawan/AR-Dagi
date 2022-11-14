function changeOverlayImage() {
    let image = document.getElementById("overlayImage");
    let images = ["../assets/2d/cat.jpg", "../assets/2d/duck.jpg", "../assets/2d/goat.jpg", "../assets/2d/gorilla.jpg", "../assets/2d/monkey.jpg", "../assets/2d/rabbit.jpg", "../assets/2d/raccoon.jpg", "../assets/2d/snake.jpg", "../assets/2d/tiger.jpg"]
    setInterval(function() {
        let random = Math.floor(Math.random() * 5)
        image.src = images[random]
    }, 8000)
}


function addEntityModels() {
    const animals = ["cat", "duck", "elephant", "goat", "gorilla", "monkey", "rabbit", "raccoon", "snake", "tiger"]
    animals.forEach(function (animal, index) {
        document.getElementById("arScene").insertAdjacentHTML('afterbegin', `<a-entity mindar-image-target="targetIndex: ${index}"> <a-gltf-model rotation="0 0 0 " position="0 -0.25 0" scale="0.5 0.5 0.5" src="#${animal}" animation-mixer></a-entity>`)
    });
}


addEntityModels()
changeOverlayImage()