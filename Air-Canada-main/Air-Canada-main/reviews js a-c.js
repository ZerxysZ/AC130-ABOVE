//employee statements REVIEW PROJECT

// local reviews data
const reviews = [{
    id: 1,
    name: "Victoria justice",
    job: "Flight Attendant",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I miss working for AirCanada. It’s a challenging job with different task and responsibilities. Worked in cycles and could do shift trades with co-workers to make extra money and get more time off to proudly travel the world representing our loved Canadian flag.",
  },
  {
    id: 2,
    name: "Cydney Kamei",
    job: "Security",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "I worked for Air Canada straight out of high school for 2 years, it was my first career. I felt incredibly proud to work for the company and had amazing opportunities to travel to many places around the world. I loved the fact that they have a union to protect the employees",
  },
  {
    id: 3,
    name: "Eren Yeager",
    job: "CEO of Air Canada",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "To think that I would be granted the opportunity of being established as the CEO of Air Canada, Truly grateful to be apart of this organization with our amazing colleagues",
  },
  {
    id: 4,
    name: "Gohan Henderson",
    job: "Air Traffic Controller",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "I would recommend this career path to anyone who would like a work-life-balance. I have met many other flight attendants who are able to live abroad and work out of Toronto or others who have careers in other fields and fly on certain days of the week. The employee benefits is the top perk of this career!",
  },
];
// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

//set starting item
let currentItem = 0;

// load intial item
window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

// show person based on item

function showPerson() {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * reviews.length)
  console.log(currentItem);
  showPerson();
});