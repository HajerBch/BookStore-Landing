
let searchBox=document.querySelector(".search-form");
document.querySelector("#search-btn").onclick=()=>{
    searchBox.classList.toggle("active");
};

let loginForm=document.querySelector(".login-form-container");
document.querySelector("#login-btn").onclick=()=>{
    loginForm.classList.add("active");
}
document.querySelector("#close-login-btn").onclick=()=>{
    loginForm.classList.remove("active");
}


window.onscroll=()=>{
    searchBox.classList.remove("active");
    if (window.scrollY>100){
        document.querySelector("header #header-2").classList.add("active");
    }else{
        document.querySelector("header #header-2").classList.remove("active");
    }
};
var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".featured-swiper", {
    spaceBetween: 10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  
  var swiper = new Swiper(".arrivals", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:3500,
        disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
