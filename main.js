const images = document.querySelectorAll('.grid-images');

const changeImg = () => {
    if(window.innerWidth <= 1081){
      images[0].setAttribute('src', 'images/mobile/image-deep-earth.jpg');
      images[1].setAttribute('src', 'images/mobile/image-night-arcade.jpg');
      images[2].setAttribute('src', 'images/mobile/image-soccer-team.jpg');
      images[3].setAttribute('src', 'images/mobile/image-grid.jpg');
      images[4].setAttribute('src', 'images/mobile/image-from-above.jpg');
      images[5].setAttribute('src', 'images/mobile/image-pocket-borealis.jpg');
      images[6].setAttribute('src', 'images/mobile/image-curiosity.jpg');
      images[7].setAttribute('src', 'images/mobile/image-fisheye.jpg');

    }
    else{
      images[0].setAttribute('src', 'images/desktop/image-deep-earth.jpg');
      images[1].setAttribute('src', 'images/desktop/image-night-arcade.jpg');
      images[2].setAttribute('src', 'images/desktop/image-soccer-team.jpg');
      images[3].setAttribute('src', 'images/desktop/image-grid.jpg');
      images[4].setAttribute('src', 'images/desktop/image-from-above.jpg');
      images[5].setAttribute('src', 'images/desktop/image-pocket-borealis.jpg');
      images[6].setAttribute('src', 'images/desktop/image-curiosity.jpg');
      images[7].setAttribute('src', 'images/desktop/image-fisheye.jpg');
    }
};

window.addEventListener('DOMContentLoaded', changeImg);
window.addEventListener('resize', changeImg);
