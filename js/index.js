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


// class Drop {
//     constructor(element) {
      
//       // Assign this.element to the dropdown element
//       this.element = element;
      
//       // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
//       this.button = this.element.querySelector('.menu-buttons');
    
//       // assign the reference to the ".dropdown-content" class found in the dropdown element
//       this.content = this.element.querySelector('.menu');
      
//       // Add a click handler to the button reference and call the toggleContent method.
//       this.button.addEventListener('click', () => {
//         this.toggleContent();
//       })
//     console.log();
//     }


//     toggleContent() {
      
//       // Toggle the ".dropdown-hidden" class off and on
//       this.content.classList.toggle('hide-image');
//     }
//   }




// let dropDown = document.querySelector('.menu-buttons')
// let hamburgerButton = document.querySelector('.menu-button-open')
// let hamburgerButtonClose = document.querySelector('.menu-button-close')

// dropDown.addEventListener('click', () => {
//     hamburgerButton.classList.toggle('hide-image')
//     hamburgerButtonClose.classList.toggle('hide-image')
// })






// class TabLink {
//     constructor(element) {
      
//        this.element = element;
      
      
//        this.data = this.element.dataset.tab;

      
     
//        this.itemElement = document.querySelector(`.tab[data-tab='${this.data}']`);
      
    

//        this.tabItem = new TabItem(this.itemElement);
      
      
//       this.element.addEventListener('click', () => this.select());
//     };

//     select() {
       
//          const links = document.querySelectorAll('.tab');
    
       
//          Array.from(links).forEach(link => link.classList.remove('tabs-link-selected')); 
    
    
//          this.element.classList.add('tabs-link-selected');
        
     
//         this.tabItem.select();
//       }
//     }

//     class TabItem {
//         constructor(element) {
     
//            this.element = element;
//         }

//     select() {
    
//          const items = document.querySelectorAll('.service-content');
    
     
//         items.forEach(item => item.classList.remove('tabs-item-selected'));
        
        
//         this.element.classList.add('tabs-item-selected');
//       }
//     }







// let links = document.querySelectorAll('.tabs-link');
//  links.forEach(links => new TabLink(links));


class Dropdown {
    constructor(element) {       
      
      // Assign this.element to the dropdown element
      this.element = element;
      
      // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
      this.button = this.element.querySelector(".dropdown-button");
      
      // assign the reference to the ".dropdown-content" class found in the dropdown element
      this.content = this.element.querySelector(".dropdown-content");

      this.closeButton = this.element.querySelector(".dropdown-close");
      
      // Add a click handler to the button reference and call the toggleContent method.
      this.button.addEventListener('click', () => {          
        this.toggleContent();
      });

      this.closeButton.addEventListener('click', () => {
        this.toggleContent();
      });
    }
  
    toggleContent() {
      
      // Toggle the ".dropdown-hidden" class off and on
      this.content.classList.toggle("dropdown-hidden");
    }
  }
  
  // Nothing to do here, just study what the code is doing and move on to the Dropdown class
  let dropdowns = document.querySelectorAll('.dropdown');
  dropdowns = Array.from(dropdowns).map( dropdown => new Dropdown(dropdown));