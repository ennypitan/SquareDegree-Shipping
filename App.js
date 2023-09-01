// AOS
AOS.init({
    duration: 1200,
  })

  
  var splide = new Splide( '#first-slider', {
    type    : 'loop',
    perPage : 3.5,
    autoplay: true,
    perMove: 1,
    // padding: '5rem',
    wheel    : true,
    gap:'1.5rem',
    breakpoints: {
      760: {
        perPage: 3,
      },
    },
    breakpoints: {
      480: {
        perPage: 1,
      },
    }
  } );
  
  splide.mount();

  var splide = new Splide( '#second-slider', {
    type    : 'loop',
    perPage : 4,
    autoplay: true,
    perMove: 1,
    arrows:  false,
    pagination: false,
    height: '100px',
    // padding: '5rem',
    wheel    : true,
    interval: number = 2000
   
  } );
  
  splide.mount();

   
//hamburger

const hamburger = document.querySelector('.responsive-menu-icon');
const mobileMenu = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('active')
  mobileMenu.classList.toggle('active')
})