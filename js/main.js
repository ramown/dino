const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.key === " ") {
        console.log('Pular');
    }
}

document.addEventListener('keyup', handleKeyUp);