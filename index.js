const images = document.querySelectorAll('.swiperImg');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
let currentImage = 0;
for(let i=0; i<images.length;i++) {
    images[i].addEventListener('click', function() {
        nextSlide();
    })
}
function nextSlide() {
    if(currentImage>=images.length-1) {
        show(0);
    }
    else {
        show(currentImage+1);
    }
}
prevArrow.addEventListener('click', function() {
    if(currentImage-1 < 0) {
        show(currentImage-1 + images.length)
    }
    else {
        show(currentImage-1)
    }
})
nextArrow.addEventListener('click', function() {
    nextSlide();
})
function show(index) {
        images[currentImage].style.opacity = '0';
        images[index].style.opacity = '1';
        // setTimeout(function() {
        //     images[currentImage].style.display = 'none';
        //     images[index].style.display = 'block';
        // }, 300)  
        currentImage = index;
    }   
show(currentImage+1);
