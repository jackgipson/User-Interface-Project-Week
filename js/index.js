// JS goes here
const toggleMenu = () => {
    menu.classList.toggle('menu--open');
};

const menu = document.querySelector('.menu');

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', e => {
    toggleMenu();
  });









// const toggleMenu = () => {
//     // Toggle the "menu--open" class on your menu refence. 
//     menu.classList.toggle('menu--open'); // this puts the class onto html but is not shown in html file itself
//   };
  
//   // Start Here: Create a reference to the ".menu" class
//   const menu = document.querySelector('.menu'); // This is creating a reference to the .menu class
  
//   // create a reference to the ".menu-button" class
//   const menuButton = document.querySelector('.menu-button');
  
//   // Using your menuButton reference, add a click handler that calls toggleMenu
//   menuButton.addEventListener('click', e => {
//     toggleMenu();
//   });
  
//   TweenMax.to('.menu-button', 10, {left:600, ease:Elastic.easeOut});  // animation sliding the menu hamburger with elastic snapback
  