const swiperDelivery = new Swiper('.swiper-custm', {
    speed: 400,
    loop: true,
    simulateTouch: true,
    slidesPerView: 3,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      enabled: true,
    },
    navigation: {
      enabled: true,
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique',
    },

    
  }); 