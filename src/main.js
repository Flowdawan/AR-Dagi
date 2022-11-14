function changeOverlayImage() {
    let image = document.getElementById("overlayImage");
    let images = ["../assets/2d/cat.jpg", "../assets/2d/duck.jpg", "../assets/2d/goat.jpg", "../assets/2d/snake.jpg", "../assets/2d/tiger.jpg"]
    setInterval(function() {
        let random = Math.floor(Math.random() * 5)
        image.src = images[random]
    }, 8000)
}

changeOverlayImage()