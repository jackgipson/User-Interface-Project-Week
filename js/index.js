// // JS goes here
// const toggleMenu = () => {
//    menu.classList.toggle('menu--open');
// };

// const menu = document.querySelector('.menu');

// const menuButton = document.querySelector('.menu-button');

// menuButton.addEventListener('click', e => {
//     toggleMenu();
//   });

// document.querySelector('.menu-button').addEventListener('click', e => {
//     this.classList.toggle('menu--open');
// });

// $(".menu-button").click(function(){
//     $(this).toggleClass(".menu-button-close"); 
//    });

// class Menu {
//     constructor(button) {
//         this.menuButtons = button;
//         this.menuButtonOpen = button.querySelector('.menu-button');
//         this.menuButtonClose = button.querySelector('.menu-button-close');
       
//         this.menuButtons.addEventListener('click', () => this.toggleMenu());
//     }
//     // Methods
//     toggleMenu() {
//       this.menuButtonOpen.classList.toggle('hide-image');
//       this.menuButtonClose.classList.toggle('hide-image');    
//     }
//   }

//   const menus = document.querySelectorAll('.menu-button');
// console.log(menus);
//   menus.forEach(button => new Menu(button));


// let dropDown = document.querySelector('.menu-buttons')
// let hamburgerButton = document.querySelector('.menu-button-open')
// let hamburgerButtonClose = document.querySelector('.menu-button-close')

// dropDown.addEventListener('click', () => {
//     hamburgerButton.classList.toggle('hide-image')
//     hamburgerButtonClose.classList.toggle('hide-image')
// })






class TabLink {
    constructor(element) {
      
       this.element = element;
      
      
       this.data = this.element.dataset.tab;
      
     
       this.itemElement = document.querySelector(`.service-content[data-tab='${this.data}']`);
      
      
       this.tabItem = new TabItem(this.itemElement);
      
      
      this.element.addEventListener('click', () => this.select());
    };

    select() {
       
         const links = document.querySelectorAll('.tabs-link');
    
       
         Array.from(links).forEach(link => link.classList.remove('tabs-link-selected')); 
    
    
         this.element.classList.add('tabs-link-selected');
        
     
        this.tabItem.select();
      }
    }

    class TabItem {
        constructor(element) {
     
           this.element = element;
        }

    select() {
    
         const items = document.querySelectorAll('.service-content');
    
     
        items.forEach(item => item.classList.remove('tabs-item-selected'));
        
        
        this.element.classList.add('tabs-item-selected');
      }
    }







let links = document.querySelectorAll('.tabs-link');
 links.forEach(links => new TabLink(links));

