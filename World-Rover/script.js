//SISTEMA DE SALVAMENTO

document.querySelectorAll('.like').forEach(likeElement => {
    likeElement.addEventListener('click', function() {

        const icon = this.querySelector('.fa-bookmark');

        if (icon.style.color === 'rgb(20, 4, 161)') {
            icon.style.color = 'rgb(6, 0, 71)';
        } else {
            icon.style.color = 'rgb(20, 4, 161)';
        }
    });
});

//CARROSEL

const container = document.querySelector('.container');
const blocks = document.querySelectorAll('.block');

let index = 0;

function showImages() {
    const totalBlocks = blocks.length;
    const maxIndex = totalBlocks - 4; 
    container.style.transform = `translateX(-${index * (100 / 4)}%)`;
}

function startDragging(e) {
    let startX = e.type === 'mousedown' ? e.pageX : e.touches[0].pageX;

    function dragMove(e) {
        const currentX = e.type === 'mousemove' ? e.pageX : e.touches[0].pageX;
        const diff = startX - currentX;

        if (diff > 50) {
            index = Math.min(index + 1, blocks.length - 4);
            showImages();
            stopDragging();
        } else if (diff < -50) {
            index = Math.max(index - 1, 0);
            showImages();
            stopDragging();
        }
    }

    function stopDragging() {
        container.removeEventListener('mousemove', dragMove);
        container.removeEventListener('mouseup', stopDragging);
        container.removeEventListener('touchmove', dragMove);
        container.removeEventListener('touchend', stopDragging);
    }

    container.addEventListener('mousemove', dragMove);
    container.addEventListener('mouseup', stopDragging);
    container.addEventListener('touchmove', dragMove);
    container.addEventListener('touchend', stopDragging);
}

container.addEventListener('mousedown', startDragging);
container.addEventListener('touchstart', startDragging);

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

