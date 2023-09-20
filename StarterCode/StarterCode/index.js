const hamburgerBttn = document.querySelector('.hamburger')
const hamburgerBttn1 = document.querySelector('.bar1')
const hamburgerBttn2 = document.querySelector(".bar2");
const hamburgerBttn3 = document.querySelector(".bar3");
const mobileDrawer = document.querySelector(".mobileNav");

hamburgerBttn.addEventListener('click', () => {
    hamburgerBttn1.classList.toggle('anBar1');
    hamburgerBttn2.classList.toggle('anBar2');
    hamburgerBttn3.classList.toggle('anBar3');
    mobileDrawer.classList.toggle("mobileNavAn");
})