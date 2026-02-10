// document.addEventListener("DOMContentLoaded", function () {
//   const swiper = new Swiper(".banner-swiper", {
//     direction: "horizontal", // Slides left to right
//     loop: true, // Infinite loop
//     speed: 600, // Speed of the transition (0.6s)
//     autoplay: {
//       delay: 2000, // Stays for 2 seconds (1s might be too fast to read!)
//       disableOnInteraction: false,
//     },
//     // Optional: add a "fade" effect instead of slide if you prefer
//     // effect: 'slide',
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".banner-swiper", {
    direction: "horizontal",
    loop: true,
    speed: 600,
    autoplay: {
      delay: 2000,
    },
  });
});
