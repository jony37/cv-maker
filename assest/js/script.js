// scroll Navbar
const scrollNavbar = document.querySelector(".scrol-nav");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    scrollNavbar.classList.add("scrol-nav__active");
  } else {
    scrollNavbar.classList.remove("scrol-nav__active");
  }
});

// dark mode
const btnDark = document.querySelectorAll(".dark-mode"),
  navLink = document.querySelectorAll(".nav-link"),
  text = document.querySelectorAll(".text"),
  subtitle = document.querySelectorAll(".subtitle"),
  body = document.querySelector("body"),
  home = document.querySelector(".home"),
  dark = document.querySelectorAll(".dark"),
  light = document.querySelectorAll(".sun"),
  testimonial = document.querySelector(".testimonial"),
  coment = document.querySelectorAll(".coment-item"),
  featuresItem = document.querySelectorAll(".featurse-col__item"),
  formInput = document.querySelector(".form-input"),
  inputs = document.querySelectorAll("input"),
  darkText = document.querySelectorAll(".dark-text");

btnDark.forEach((element) => {
  element.addEventListener("click", function () {
    body.classList.toggle("bg-dark");
    scrollNavbar.classList.toggle("bg-dark");
    home.classList.toggle("bg-dark");
    testimonial.classList.toggle("bg-dark");
    text.forEach((element) => {
      element.classList.toggle("text-light");
    });
    subtitle.forEach((element) => {
      element.classList.toggle("text-light");
    });
    navLink.forEach((element) => {
      element.classList.toggle("text-light");
    });
    scrollNavbar.classList.toggle("border");
    // element.innerHTML = '<i class="fa-regular fa-sun"></i>';
    dark.forEach((element) => {
      element.classList.toggle("none");
    });
    light.forEach((element) => {
      element.classList.toggle("block");
    });
    featuresItem.forEach((element) => {
      element.classList.toggle("border-light");
    });
    coment.forEach((element) => {
      element.classList.toggle("bg-dark");
      element.classList.toggle("border-light");
    });
    inputs.forEach((element) => {
      console.log(element);
    });
    darkText.forEach((element) => {
      element.classList.toggle("text-light");
    });
  });
});

// Carusel
const slides = document.querySelectorAll(".testimonial-slide__item"),
  wrapper = document.querySelector(".testimonial-slider__wrapper"),
  Fluid = document.querySelector(".testimonial-slider__inner"),
  prev = document.querySelector(".testimonial-slider-prev"),
  next = document.querySelector(".testimonial-slider-next"),
  width = window.getComputedStyle(wrapper).width,
  widthNum = +width.slice(0, width.length - 2);

let slideindex = 1;
let offset = 0;

Fluid.style.display = "flex";
Fluid.style.transition = ".7s";
slides.forEach((element) => {
  element.style.width = "400px";
});

let johaOff;

slides.forEach((element) => {
  let www = window.getComputedStyle(element).width;
  let wwwNum = +www.slice(0, www.length - 2);
  johaOff = wwwNum;
});

function autoSlide() {
  if (Fluid.style.transform === `translateX(-${1200}px)`) {
    offset = 0;
    slideindex = 1;
  } else {
    offset += johaOff;
    slideindex++;
  }

  Fluid.style.transform = `translateX(-${offset}px)`;
}

const slideInterval = 2000;
let avtoS = setInterval(autoSlide, slideInterval);

next.addEventListener("click", function () {
  clearInterval(avtoS);
  if (Fluid.style.transform === `translateX(-${1200}px)`) {
    offset = 0;
    slideindex = 1;
  } else {
    offset += johaOff;
    slideindex++;
  }

  Fluid.style.transform = `translateX(-${offset}px)`;
  avtoS = setInterval(autoSlide, slideInterval);
});

prev.addEventListener("click", function () {
  clearInterval(avtoS);
  if (offset === 0) {
    offset = 0;
    slideindex = 1;
  } else {
    offset -= johaOff;
    slideindex--;
  }

  Fluid.style.transform = `translateX(-${offset}px)`;
  avtoS = setInterval(autoSlide, slideInterval);
});

// page script
const btn = document.querySelectorAll(".btn");
btn.forEach((element) => {
  element.addEventListener("click", function () {
    window.location.href = "./cvlist.html";
  });
});

//
// function ParentInput () {
//     var select = document.getElementById("select");
//     var selectedValue = select.value;
//     let tr = document.createElement('tr');
//     let Option2 = document.querySelector('.optionOnasi');
//     let otasiO = document.querySelector('.otasiO');
//     for (let i = 0; i < th.length; i++){
//         let td = document.createElement('td')
//         // td.textContent = th[i];
//         tr.appendChild(td);

//         if (selectedValue === 'Onasi') {
//             let optionOnasi = document.querySelector('.optionOnasi');
//             const OnasiName = document.querySelector('.OnasiName'),
//             OnasiAge = document.querySelector('.OnasiAge'),
//             OnasiIsh = document.querySelector('.OnasiIsh'),
//             OnasiLoc = document.querySelector('.OnasiLoc');
//             if (i === 0) {
//                 tr.firstChild.innerHTML = selectedValue;
//             } else if (i === 1) {
//                 OnasiName.addEventListener('input', function () {
//                     td.innerHTML = OnasiName.value;
//                 })
//             } else if (i === 2) {
//                 OnasiAge.addEventListener('input', function () {
//                     td.innerHTML = OnasiAge.value;
//                 })
//             } else if (i === 3) {
//                 OnasiIsh.addEventListener('input', function () {
//                     td.innerHTML = OnasiIsh.value;
//                 })
//             } else if (i === 2) {
//                 OnasiLoc.addEventListener('input', function () {
//                     td.innerHTML = OnasiLoc.value;
//                 })
//             }

//             else if (i === 1) {
//                 parentName.id = 'totoy1';
//                 parentName.classList.remove('parent-name');
//                 let toty1 = document.querySelector('#totoy1')
//                 parentName.addEventListener('input', function () {
//                     td.innerHTML = parentName.value;
//                 })
//             } else if (i === 2) {
//                 parentAge.addEventListener('input', function () {
//                     td.innerHTML = parentAge.value;
//                 })
//             } else if (i === 3) {
//                 parentIsh.addEventListener("input", function (){
//                     td.innerHTML = parentIsh.value;
//                 })
//             } else if (i === 4) {
//                 parentLoc.addEventListener('input', function() {
//                     td.innerHTML = parentLoc.value;
//                 })
//             }

//             optionOnasi.style.display = 'block'
//         } else {
//             parentName.value = '';
//             parentAge.value = '';
//             parentIsh.value = '';
//             parentLoc.value = '';
//             optionOnasi.style.display = 'none'
//         }

//         if (selectedValue === "Opasi") {
//             let optionOpasi = document.querySelector('.optionOpasi'),
//             OpasiName = document.querySelector('.opasiName'),
//             OpasiAge = document.querySelector('.opasiAge'),
//             OpasiIsh = document.querySelector('.opasiIsh'),
//             OpasiLoc = document.querySelector('.opasiLoc');

//             if (i === 0) {
//                 tr.firstChild.innerHTML = selectedValue;
//             }  else if (i === 1) {
//                 OpasiName.addEventListener('input', function () {
//                     td.innerHTML
//                 })
//             } else if (i === 2) {
//                 parentAge.addEventListener('input', function () {
//                     td.innerHTML = parentAge.value;
//                 })
//             } else if (i === 3) {
//                 parentIsh.addEventListener("input", function (){
//                     td.innerHTML = parentIsh.value;
//                 })
//             } else if (i === 4) {
//                 parentLoc.addEventListener('input', function() {
//                     td.innerHTML = parentLoc.value;
//                 })
//             }

//         }else {
//             parentName.value = '';
//             parentAge.value = '';
//             parentIsh.value = '';
//             parentLoc.value = '';
//         }

//         // if (selectedValue === "Singlisi") {
//         //     if (i === 0) {
//         //         tr.firstChild.innerHTML = selectedValue;
//         //     }  else if (i === 1) {
//         //         parentName.addEventListener('input', function () {
//         //             td.innerHTML = parentName.value;
//         //         })
//         //     } else if (i === 2) {
//         //         parentAge.addEventListener('input', function () {
//         //             td.innerHTML = parentAge.value;
//         //         })
//         //     } else if (i === 3) {
//         //         parentIsh.addEventListener("input", function (){
//         //             td.innerHTML = parentIsh.value;
//         //         })
//         //     } else if (i === 4) {
//         //         parentLoc.addEventListener('input', function() {
//         //             td.innerHTML = parentLoc.value;
//         //         })
//         //     }
//         // }else {
//         //     parentName.value = '';
//         //     parentAge.value = '';
//         //     parentIsh.value = '';
//         //     parentLoc.value = '';
//         // }

//         // if (selectedValue === "Akasi") {
//         //     if (i === 0) {
//         //         tr.firstChild.innerHTML = selectedValue;
//         //     }  else if (i === 1) {
//         //         parentName.addEventListener('input', function () {
//         //             td.innerHTML = parentName.value;
//         //         })
//         //     } else if (i === 2) {
//         //         parentAge.addEventListener('input', function () {
//         //             td.innerHTML = parentAge.value;
//         //         })
//         //     } else if (i === 3) {
//         //         parentIsh.addEventListener("input", function (){
//         //             td.innerHTML = parentIsh.value;
//         //         })
//         //     } else if (i === 4) {
//         //         parentLoc.addEventListener('input', function() {
//         //             td.innerHTML = parentLoc.value;
//         //         })
//         //     }
//         // }else {
//         //     parentName.value = '';
//         //     parentAge.value = '';
//         //     parentIsh.value = '';
//         //     parentLoc.value = '';
//         // }

//         // if (selectedValue === "Opasi") {
//         //     if (i === 0) {
//         //         tr.firstChild.innerHTML = selectedValue;
//         //     }  else if (i === 1) {
//         //         parentName.addEventListener('input', function () {
//         //             td.innerHTML = parentName.value;
//         //         })
//         //     } else if (i === 2) {
//         //         parentAge.addEventListener('input', function () {
//         //             td.innerHTML = parentAge.value;
//         //         })
//         //     } else if (i === 3) {
//         //         parentIsh.addEventListener("input", function (){
//         //             td.innerHTML = parentIsh.value;
//         //         })
//         //     } else if (i === 4) {
//         //         parentLoc.addEventListener('input', function() {
//         //             td.innerHTML = parentLoc.value;
//         //         })
//         //     }
//         // }else {
//         //     parentName.value = '';
//         //     parentAge.value = '';
//         //     parentIsh.value = '';
//         //     parentLoc.value = '';
//         // }

//         // if (selectedValue === "Opasi") {
//         //     tr.firstChild.innerHTML = selectedValue;
//         // }
//                 // if (selectedValue === 'Otasi') {
//         //     if (i === 0) {
//         //         tr.firstChild.innerHTML = selectedValue;
//         //     } else if (i === 1) {
//         //         parentName.addEventListener('input', function () {
//         //             td.innerHTML = parentName.value;
//         //         })
//         //     } else if (i === 2) {
//         //         parentAge.addEventListener('input', function () {
//         //             td.innerHTML = parentAge.value;
//         //         })
//         //     } else if (i === 3) {
//         //         parentIsh.addEventListener("input", function (){
//         //             td.innerHTML = parentIsh.value;
//         //         })
//         //     } else if (i === 4) {
//         //         parentLoc.addEventListener('input', function() {
//         //             td.innerHTML = parentLoc.value;
//         //         })
//         //     }
//         // } else {
//         //     parentName.value = '';
//         //     parentAge.value = '';
//         //     parentIsh.value = '';
//         //     parentLoc.value = '';
//         // }

//     }

//     tBody.appendChild(tr)
// }
// ParentInput()
