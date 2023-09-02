var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
   
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    grabCursor : "true",

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

