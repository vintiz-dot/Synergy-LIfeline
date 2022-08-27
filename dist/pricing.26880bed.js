"use strict";const privateClass=document.querySelector(".private-class"),privateContainer=document.querySelector(".private-container"),overlay=document.querySelector(".overlay"),closeModal=document.querySelector(".close-modal"),header=document.getElementById("header"),footer=document.getElementById("footer"),callbtn=document.getElementById("call-us"),venue=document.getElementById("location"),hourOfContacts=document.getElementById("hours"),numberOfContacts=document.getElementById("contacts-week"),privatePrice=document.getElementById("private-price");function toggleHidden(){overlay.classList.toggle("hidden"),privateContainer.classList.toggle("hidden")}function privateCost(){privatePrice.innerHTML="";let e=4*+venue.value*+hourOfContacts.value*+numberOfContacts.value;const t=` <p style="margin: auto;\nfont-size: 36px;\ncolor: #5fcf80;\nfont-weight: 600;\nfont-family: Poppins, sans-serif;\nmargin-bottom: 20px;"><sup>₦</sup>${e},000<span style="\ncolor: #777777;\nfont-size: 16px;\nfont-weight: 300;">/Month</span>`;0!=e&&privatePrice.insertAdjacentHTML("beforeend",t)}privateClass.addEventListener("click",(function(){toggleHidden(),privateContainer.scrollIntoView({block:"center",behavior:"auto",inline:"start"})})),closeModal.addEventListener("click",toggleHidden),overlay.addEventListener("click",toggleHidden),document.addEventListener("keydown",(function(e){"Escape"==e.key&&(overlay.classList.contains("hidden")||toggleHidden())})),venue.addEventListener("change",privateCost),hourOfContacts.addEventListener("change",privateCost),numberOfContacts.addEventListener("change",privateCost);
//# sourceMappingURL=pricing.26880bed.js.map