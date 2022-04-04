const dino = document.querySelector('.dino');

function handleKeyUp(event) {
    if(event.key === ' ') {
        jump()
    }
}

function jump() {
    let position = 0;
    let up = false;

    let upInterval = setInterval( () => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval( () => {
                if (position <= 0) {
                    clearInterval(downInterval);
                } else {
                    position -= 20;
                    dino.style.bottom = position + 'px';
                }
            }, 20);
        } else {
            position += 20;
            dino.style.bottom = position + 'px';
        }
    }, 20);
}

document.addEventListener('keyup', handleKeyUp);
