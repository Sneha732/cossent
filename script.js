 document.querySelectorAll(".slider-container").forEach(container => {
 const track = container.querySelector(".slider-track");
      const btnLeft = container.querySelector(".slider-btn.left");
      const btnRight = container.querySelector(".slider-btn.right");
      const products = container.querySelectorAll(".item");

      let index = 0;
      let itemsPerView = getItemsPerView();

      function getItemsPerView() {
        if (window.innerWidth <= 480) return 1;
        if (window.innerWidth <= 768) return 2;
        return 4;
      }

      function updateSlider() {
        const itemWidth = products[0].offsetWidth;
        track.style.transform = `translateX(-${index * itemWidth}px)`;
      }

      btnRight.addEventListener("click", () => {
        if (index < products.length - itemsPerView) {
          index++;
          updateSlider();
        }
      });

      btnLeft.addEventListener("click", () => {
        if (index > 0) {
          index--;
          updateSlider();
        }
      });

      window.addEventListener("resize", () => {
        itemsPerView = getItemsPerView();
        index = 0;
        updateSlider();
      })
    });