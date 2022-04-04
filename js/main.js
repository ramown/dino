const background = document.querySelector('.background');
const dino = document.querySelector('.dino');

let isJumping = false;
let positionDino = 0;

function handleKeyUp(event) {
    if(event.key === ' ' || event.key === 'ArrowUp') {
        if(!isJumping) {
            jump()
        }
    }
}

function jump() {
    isJumping = true;

    let upInterval = setInterval( () => {
        if (positionDino >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval( () => {
                if (positionDino <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    positionDino -= 5;
                    dino.style.bottom = positionDino + 'px';
                }
            }, 20);
        } else {
            positionDino += 40;
            dino.style.bottom = positionDino + 'px';
        }
    }, 20);
}


function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1024;
    let randomTime = Math.random() * 1000 + 1000;

    cactus.classList.add('cactus');
    cactus.style.left = 1024 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if(cactusPosition > 0 && cactusPosition < 60 && positionDino < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 5;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout( createCactus, randomTime)
}

createCactus();

document.addEventListener('keyup', handleKeyUp);
