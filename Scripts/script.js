Function debounce[function, wait = 20, immediate = true] {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) function.apply(context, args);
        };
        var callNow = immeadiate && ! timeout;
        clearTimeout(later, wait);
        if (callNow) func.apply(context, args)
    };
};

const sliderImages = document.querySelectorAll('#slide-in');

function checkSlde() {
    sliderImages.forEach(slideerImages=> {
        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImages.height / 2;
        // bottom of the Image
        const imageBottom - sliderImage.offsetTop; + sliderImage.height;
        const isHalfShown - sliderInAt < sliderImage.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce [checkSlide]);

