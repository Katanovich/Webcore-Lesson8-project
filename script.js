let swiper;
function initSwiper() {
  if (window.innerWidth < 768 && !swiper) {
    swiper = new Swiper(".swiper", {
      slidesPerView: 1.2,
      spaceBetween: 10,
      centeredSlides: false,
      slidesOffsetBefore: 16,
      slidesOffsetAfter: 16,
      //   loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  } else if (window.innerWidth >= 768 && swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}
initSwiper();
window.addEventListener("resize", initSwiper);

const button = document.querySelector("#expandBtn");
const brandList = document.querySelector(".brand__list");
const btnText = document.querySelector(".expand-button__text");

button.addEventListener("click", () => {
  brandList.classList.toggle("brand__list--expanded");

  if (brandList.classList.contains("brand__list")) {
    btnText.textContent = "Показать все ";
  } else {
    btnText.textContent = "Скрыть";
  }
});
