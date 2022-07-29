let movies = [
    {
        name: "falcon and the winter soldier",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisising alit.",
        image: "images/slider 2.png"
    },
    {
        name: "loki",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisising alit.",
        image: "images/slider 1.png"

    },
    {
        name: "wanda vision",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisising alit.",
        image: "images/slider 3.png"
    },
    {
        name: "luca",
        des:
            "Lorem ipsum dolor sit amet consectetur adipisising alit.",
        image: "images/slider 5.png"
    }


];
const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0;//track the current slide
const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    // create DOM elements
    let slide = document.createElement('div');
    var imageElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    // attaching all elements
    imageElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imageElement);
    carousel.appendChild(slide);

    // setting up images
    imageElement.src = movies[slideIndex].image;
    slideIndex++

    // setting elements classnames
    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';

    sliders.push(slide);
    if (slide.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% -${30 * (sliders.length - 2)
            }px)`;

    }
}
for (let i = 0; i < 3; i++) {
    createSlide();
}
setInterval(() => {
    createSlide();
}, 3000);

// video cards
const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListner("mouseover", () => {
        let video = item.children[1];
        video.play()
    });
    item.addEventListner("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});
// card sliders
let cardContainers = [...document.querySelectorAll('.card-container')];
let preBtns = [...document.querySelectorAll('.pre-btn')];
let nxtBtns = [...document.querySelectorAll('.nxtBtns')];

cardContainers.forEach((items, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.Width;

    nxtBtns[i].addEventListner('click', () => {
        item.scrollleft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () => {
        item.scrollleft -= containerWidth = 200;
    })
})



