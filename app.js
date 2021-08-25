// import functions
const catImg = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
const puppyImg = document.getElementById('puppy');
const puppySound = document.getElementById('puppy-sound');


// reference needed DOM elements


// set event listeners 

catImg.addEventListener('click', () => {
    catSound.play();
});

horseImg.addEventListener('click', () => {
    horseSound.play();

});

puppyImg.addEventListener('click', () => {
    puppySound.play();
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
