const NavScroll = document.querySelector("#NavScroll");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    NavScroll.classList.remove("d-none");
    NavScroll.classList.add("d-block");
  } else {
    NavScroll.classList.remove("d-block");
    NavScroll.classList.add("d-none");
  }
}

const btnNav = document.querySelector("#btn-nav");
const iconOpen = document.querySelector("#icon-open");
const iconClose = document.querySelector("#icon-close");
const MainNavScroll = document.querySelector("#MainNavScroll");

btnNav.addEventListener("click", function (e) {
  e.preventDefault();

  const isOpenVisible = iconOpen.classList.contains("d-block");

  if (isOpenVisible) {
    iconOpen.classList.remove("d-block");
    iconOpen.classList.add("d-none");
    iconClose.classList.remove("d-none");
    iconClose.classList.add("d-block");


    MainNavScroll.classList.remove("d-none");
    MainNavScroll.classList.add("d-block");
  } else {
    iconClose.classList.remove("d-block");
    iconClose.classList.add("d-none");
    iconOpen.classList.remove("d-none");
    iconOpen.classList.add("d-block");

    MainNavScroll.classList.remove("d-block");
    MainNavScroll.classList.add("d-none");
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".product-tabs .nav-item a");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
      e.preventDefault();

      // إزالة active من جميع الروابط
      tabs.forEach(t => t.classList.remove("active"));

      // إضافة active للرابط الحالي
      this.classList.add("active");

      // إخفاء جميع المحتويات
      panes.forEach(pane => pane.classList.remove("show", "active"));


      const target = document.querySelector(this.getAttribute("data-bs-target"));
      if (target) target.classList.add("show", "active");
    });
  });
});



document.querySelectorAll('.advanced-zoom-container').forEach(container => {
  const img = container.querySelector('.advanced-zoom-image');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
    const offsetY = ((e.clientY - rect.top) / rect.height - 0.5) * 100;

    img.style.transform = `scale(2) translate(${ -offsetX }%, ${ -offsetY }%)`;
  });

  container.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1) translate(0,0)';
  });
});


function changeImage(element) {
  const newSrc = element.getAttribute('src');
  document.getElementById('mainImage').setAttribute('src', newSrc);
  document.querySelectorAll('.thumbnail-img').forEach(img => img.classList.remove('active-thumbnail'));
  element.classList.add('active-thumbnail');
}