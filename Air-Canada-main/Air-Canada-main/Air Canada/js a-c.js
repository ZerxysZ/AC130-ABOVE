//navigation bar javascript (NAVBAR PROJECT)
const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    //console.log(links.classList);
    //console.log(links.classList.contains('random'));
    //console.log(links.classList.contains('links'));
    //    if(links.classList.contains('show-links')) {
    //        links.classList.remove('show-links')
    //    }
    //        else {
    //          links.classList.add('show-links');
    //    }
    links.classList.toggle('show-links');
});

//rating buttons (COUNTER PROJECT) js

// set intial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count += 2;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = "grey";
        }
        if (count < 0) {
            value.style.color = "red";
        }
        if (count === 0) {
            value.style.color = "black";
        }
        value.textContent = count;
    });
});

//color scheeme javascript (COLOR FLIPER PROJECT)

const colors = ["green", "red", "blue", "black", "gray", "yellow", "purple", "white"];
const btn = document.getElementById("btn-hero");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    // console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}