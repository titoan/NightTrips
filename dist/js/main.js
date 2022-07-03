function getTabs() {
  let tabsTitles = document.querySelectorAll(".tabs__menu li");
  tabsTitles = [...tabsTitles];

  let tabsContent = document.querySelectorAll(".tabs__content");
  tabsContent = [...tabsContent];

  tabsTitles.forEach((item, index) => {
    item.addEventListener("click", function () {
      removeClass(tabsTitles, "active");
      this.classList.add("active");

      tabsContent.forEach((item, ind, arr) => {
        item.classList.remove("active");
        if (arr.indexOf(item) == index) {
          item.classList.add("active");
        }
      });
    });
  });

  function removeClass(arr, className) {
    arr.forEach((item) => {
      item.classList.remove(className);
    });
  }
}
getTabs();

function getSlider() {
  let sliderContainer = document.querySelector(".tab-slider__container");
  let sliderNavElems = document.querySelectorAll(".tab-slider__nav");
  sliderNavElems = [...sliderNavElems];

  sliderNavElems.forEach(function (item) {
    let [navPrev, navNext] = item.children;
    let width = 0;

    navPrev.addEventListener("click", function () {
      let a = this.parentElement.previousSibling;
      width += 486;
      a.style.right = width + "px";
    });

    navNext.addEventListener("click", function () {
      let a = this.parentElement.previousSibling;
      width -= 486;
      a.style.right = width + "px";
    });
  });
}
getSlider();
