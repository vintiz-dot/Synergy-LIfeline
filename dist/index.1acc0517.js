!function(){"use strict";const e=(e,t=!1)=>(e=e.trim(),t?[...document.querySelectorAll(e)]:document.querySelector(e)),t=(t,i,n,a=!1)=>{let s=e(i,a);s&&(a?s.forEach((e=>e.addEventListener(t,n))):s.addEventListener(t,n))};let i=e(".back-to-top");if(i){const e=()=>{window.scrollY>100?i.classList.add("active"):i.classList.remove("active")};window.addEventListener("load",e),n=document,a=e,n.addEventListener("scroll",a)}var n,a;t("click",".mobile-nav-toggle",(function(t){e("#navbar").classList.toggle("navbar-mobile"),this.classList.toggle("bi-list"),this.classList.toggle("bi-x")})),t("click",".navbar .dropdown > a",(function(t){e("#navbar").classList.contains("navbar-mobile")&&(t.preventDefault(),this.nextElementSibling.classList.toggle("dropdown-active"))}),!0);let s=e("#preloader");s&&window.addEventListener("load",(()=>{s.remove()})),new Swiper(".testimonials-slider",{speed:600,loop:!0,autoplay:{delay:5e3,disableOnInteraction:!1},slidesPerView:"auto",pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}}}),window.addEventListener("load",(()=>{AOS.init({duration:1e3,easing:"ease-in-out",once:!0,mirror:!1})}))}();
//# sourceMappingURL=index.1acc0517.js.map
