/* 
------------------------------
------------------------------
like/dislike buttons + counter 
------------------------------
------------------------------
*/

// select buttons
const likeBtn = document.querySelector('#like-btn');
const dislikeBtn = document.querySelector('#dislike-btn');
const resetBtn = document.querySelector('.reset');
const value = document.querySelector('.likes-num');

let likes = 0; 

// change colour of likes if it is positive, negative, or 0
function likesColour() {
    if (likes > 0) {
        value.style.color = "white";
    } else if (likes < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}

// change value of 'likes' by clicking like/dislike/reset buttons
likeBtn.addEventListener('click', function() {
    likes += 2;
    value.textContent = likes;
    likesColour();
});
dislikeBtn.addEventListener('click', function() {
    likes--;
    value.textContent = likes;
    likesColour();
});
resetBtn.addEventListener('click', function() {
    likes = 0;
    value.textContent = likes;
    likesColour();
});



/* 
-----------------------------
-----------------------------
       nav bar toggle
-----------------------------
-----------------------------
*/

const navToggleBtn = document.querySelector('.nav-toggle-btn');
const navbar = document.querySelector('.nav-btn-container');

navToggleBtn.addEventListener('click', function() {
    navbar.classList.toggle("show-nav");
});

/* 
-----------------------------
-----------------------------
   colour scheme switcher
-----------------------------
-----------------------------
*/

const navItems = document.querySelectorAll('.nav-item');
const pageLinks = document.querySelectorAll('.page-btn');
const colourBtn = document.querySelector('.colour-btn');
const subHeaders = document.querySelectorAll('.subhdr');

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// get random hex colour scheme when button is clicked
function randomNum() {
    return Math.floor(Math.random() * hex.length);
}

colourBtn.addEventListener('click', function() {
    let randomColour = '#';
    for(let i = 0; i < 6; i++) {
        randomColour += hex[randomNum()];
    }
    navItems[0].style.color = randomColour;
    navItems[1].style.color = randomColour;
    navItems[2].style.color = randomColour;
    navItems[3].style.color = randomColour;
    navItems[4].style.color = randomColour;
    navItems[5].style.color = randomColour;
    navItems[6].style.color = randomColour;
    pageLinks[0].style.color = randomColour;
    pageLinks[1].style.color = randomColour;
    pageLinks[2].style.color = randomColour;
    navToggleBtn.style.color = randomColour; // navToggleBtn is defined under "nav bar toggle" section
    subHeaders[0].style.color = randomColour;
    subHeaders[1].style.color = randomColour;
    subHeaders[2].style.color = randomColour;
    subHeaders[3].style.color = randomColour;
    reviewName.style.color = randomColour; // reviewName is defined under "reviews" section
}); 

/* 
-----------------------------
-----------------------------
          reviews
-----------------------------
-----------------------------
*/

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
const img = document.querySelector('.review-img');
const reviewName = document.querySelector('.reviewer-name');
const reviewPositon = document.querySelector('.reviewer-position');
const reviewText = document.querySelector('.review-text');

// review content
const reviewContent = [
    {   
        image: "https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUGH5e4gdeRarf2QNIqls6jallcYKUqI-RAc1TOB1LRF50sUxqdgp0BE0lwxm8RCLuw",
        name: "Vivy Flurotite",
        position: "Technician",
        review: "Being An Artificial Intelligent Robot From the Future, I am able to provide my intellectual manifestations to this beautiful company known as Air Canada. They treat me like i'm a human being, I appreciate them."
    },
    {   
        image: "https://i.imgur.com/x609Isa.gif",
        name: "Leonardo Watch",
        position: "CEO of Air Canada",
        review: "I use to acknowledge myself as A weak individual, a person who wouldn't be able to provide of use to anyone, never in the deepest trenches of our galatic atmosphere would have I thought to be the CEO of Air Canada. Everyone here treats me with respect, they encourage me to be the best that I can and I cannot be more thankful to to my employees."
    },
    {   
        image: "https://s7.postimg.cc/m2psd9gob/Alchemist.gif",
        name: "The Full Metal Alchemist",
        position: "Mechanic",
        review: "Considering that I am the Full Metal Alchemist, I suppose its only right that I distribute my intelligence to this pitiful company. I could care less, I only care about the Pay."
    },
    {   
        image: "https://static.wikia.nocookie.net/vsbattles/images/b/b0/Buzzsaw2.gif/revision/latest/scale-to-width-down/250?cb=20190516092112",
        name: "Speedwagon",
        position: "Marketing Director",
        review: "Ever Since Leonardo Watch saved my life during the fall of shambella, I have swore allegiance towards himself and knowing that hes the CEO of Air Canada, the least I can do is assist in marketing considering the fact that my net worth is 4 dollars."
    },
    {   
        image: "https://i.pinimg.com/564x/6d/5f/30/6d5f306e65ea61ba5a26bead7117e2ca--zyzz-workout-gym-motivation.jpg",
        name: "Zyzz",
        position: "Aestitics",
        review: "Brah we're all gonna make it, I wont allow any the lazy slobs enter the plane without getting SHREDDED BRAH, MIRIN our physiques, aestitics is KING we're all going to make it. Also, Air Canada is a really good industry."
    },
    {   
        image: "https://www.surreyschools.ca/schools/kwantlenpark/Style%20Library/Images/048.jpg",
        name: "KP Secondary",
        position: "Investor",
        review: "I am A whole school, why am I even working as a Investor you may ask? Well, thats because A school has an analytical mindset too. Air Canada is the best Airline to exist, even considering that I am a whole school I dont mind investing my net worth into this establishment."
    }
]

let reviewNum = 0;

// get review content
function getReview() {
    const item = reviewContent[reviewNum];
    img.src = item.image;
    reviewName.textContent = item.name;
    reviewPositon.textContent = item.position;
    reviewText.textContent = item.review;
}

// get random review
function randomReview() {
    return Math.floor(Math.random() * reviewContent.length);
}

// go to next review
nextBtn.addEventListener('click', function() {
    reviewNum++;
    if (reviewNum > reviewContent.length - 1) {
        reviewNum = 0;
    }
    getReview();
    console.log(reviewNum);
});

// go to prev review
prevBtn.addEventListener('click', function() {
    reviewNum--;
    if (reviewNum < 0) {
        reviewNum = reviewContent.length - 1;
    }
    getReview();
});

// go to random review 
randomBtn.addEventListener('click', function() {
    reviewNum = randomReview();
    getReview();
});



