
const imagesToLoad = document.querySelectorAll('img[data-src]'); 
//images to load=list of items.

//intersectionObserver let you know when an observed element enters or exits the browser's viewport(tracks elements scrolling into view.)

const imgOptions = { 
    threshold: 1, 
    rootMargin: "0px 0px 50px 0px" //top, right, bottom, left

};


const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src'); 

    };
};

if ('IntersectionObserver' in window) { 
    const imgObserver = new IntersectionObserver((items) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);
    //load images if necessary
    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else { 
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}