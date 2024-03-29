const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 20,
  navigation: false,

  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

const marq_swiper = new Swiper(".marquee", {
  loop: true,
  spaceBetween: 20,
  navigation: false,
  direction: "horizontal",
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },

  breakpoints: {
    1024: {
      slidesPerView: 8,
    },
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

const marq_swiper2 = new Swiper(".marquee2", {
  loop: true,
  spaceBetween: 20,
  navigation: false,
  direction: "horizontal",
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  breakpoints: {
    1024: {
      slidesPerView: 8,
    },
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

const marq_swiper3 = new Swiper(".marquee3", {
  loop: true,
  spaceBetween: 10,
  navigation: false,
  direction: "horizontal",
  speed: 5000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: true,
  },

  breakpoints: {
    1024: {
      slidesPerView: 5,
    },
    768: {
      slidesPerView: 3,
    },
    320: {
      slidesPerView: 3,
    },
  },
});

var mySwiper = new Swiper(".cat_swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 4, // Show 4 cards at a time
  centeredSlides: true,
  // Adjust spacing between cards as needed
  grabCursor: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 5, // Rotate each card by 90 degrees
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 5,
    },
    320: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 5,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// AOS Initialize

AOS.init();
