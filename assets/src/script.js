const eyes = document.querySelectorAll('.penguin__sparkle')

setInterval(function() {
    eyes.forEach(eye => {
        eye.classList.toggle('active')
    })
}, 5000)
