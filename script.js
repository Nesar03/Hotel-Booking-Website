const navbar = document.querySelector(".header .navbar")


const active =document.querySelector('#menu-btn');
active.addEventListener("click",()=>{
    navbar.classList.toggle('active');
})

window.addEventListener("scroll",()=>{
    navbar.classList.remove('active');
})

 var swiper = new Swiper(".home-slider", {
    loop:true,
    effect: "coverflow",
      grabCursor: true,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

     var swiper = new Swiper(".gallery-slider", {
    loop:true,
    effect: "coverflow",
    slidesPerView: "auto",
    centeredSlides:true,
      grabCursor: true,
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
      },
     pagination:{
      el: ".swiper-pagination",
     },
     autoplay: {
    delay: 2000,   // 2 seconds delay between slides
    disableOnInteraction: false, // keeps autoplay running even if you swipe
    //  speed: 3000,
  },
 
    });

    const sliderEl = document.querySelector('.gallery-slider');

sliderEl.addEventListener('mouseenter', () => {
  swiper.autoplay.start();  // start auto sliding when mouse enters
});

sliderEl.addEventListener('mouseleave', () => {
  swiper.autoplay.stop();   // stop auto sliding when mouse leaves
});


 var swiper = new Swiper(".review-slider", {
    loop:true,
    slidesPerView: "auto",
      grabCursor: true,
    spaceBetween:30,
     pagination:{
      el: ".swiper-pagination",
     },
     breakpoints:   {
        768: {
          slidesPerView: 1,
        },
        1200: {
          slidesPerView: 2,
        },
      },
 });