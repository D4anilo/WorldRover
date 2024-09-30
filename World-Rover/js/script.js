//SISTEMA DE SALVAMENTO

document.querySelectorAll('.like').forEach(likeElement => {
    likeElement.addEventListener('click', function() {

        const icon = this.querySelector('.fa-bookmark');

        if (icon.style.color === 'rgb(46, 28, 209)') {
            icon.style.color = 'rgb(6, 0, 71)';
        } else {
            icon.style.color = 'rgb(46, 28, 209)';
        }
    });
});

//CARROSEL

const container = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');
let index = 0;

function showImages() {
    container.style.transform = `translateX(-${index * (100 / 4)}%)`;
}

function moveLeft() {
    index = Math.max(index - 1.5, 0);
    showImages();
}

function moveRight() {
    const totalBlocks = blocks.length;
    const maxIndex = totalBlocks - 4; 
    index = Math.min(index + 1.5, maxIndex);
    showImages();
}

showImages();

showImages();

//BOTÃO DE VOLTAR AO TOPO

const scrollToTopButton = document.getElementById('scrollToTop');


window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopButton.style.display = 'flex';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = function(e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
};

