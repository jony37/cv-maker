"use strict";

const clearBtn = document.querySelector(".clear-btn"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  option = document.querySelector(".option"),
  tableDiv = document.querySelector(".table-div");

option.style.display = "none";
tableDiv.style.display = "none";

const inputName = document.querySelector(".input-name"),
  inputSurname = document.querySelector(".input-surname"),
  inputLoc = document.querySelector(".input-location"),
  inputEmail = document.querySelector(".input-email"),
  inputNumber = document.querySelector(".input-number"),
  inputLanguage = document.querySelector(".input-language"),
  inputIlm = document.querySelector(".input-ilim"),
  inputUnvon = document.querySelector(".input-unvon"),
  textArea = document.querySelector("#textarea"),
  inputFile = document.querySelector(".input-file"),
  imggg = document.querySelector("#img"),
  finalyBTN = document.querySelector(".finalyBTN");

finalyBTN.addEventListener("click", function () {
  // localStorage.setItem('inputName', inputName.value);
  localStorage.setItem("InputSurName", inputSurname.value);
  localStorage.setItem("inputLoc", inputLoc.value);
  localStorage.setItem("inputEmail", inputEmail.value);
  localStorage.setItem("inputNumber", inputNumber.value);
  localStorage.setItem("inputLanguage", inputLanguage.value);
  localStorage.setItem("inputIlm", inputIlm.value);
  localStorage.setItem("inputUnvon", inputUnvon.value);
  localStorage.setItem("textArea", textArea.value);

  window.location = "default.html";
});

const fileInput = document.getElementById("fileInput");
const preview = document.getElementById("preview");

fileInput.addEventListener("change", function () {
  const file = fileInput.files[0];
  if (file) {
    const reader = new FileReader();

    reader.onload = function (event) {
      preview.src = event.target.result;
      preview.style.display = "block"; // Показываем изображение
      localStorage.setItem("img", event.target.result);
    };

    reader.readAsDataURL(file);
  }
});

const name1 = document.querySelector(".name"),
  lastName = document.querySelector(".lastname"),
  location22 = document.querySelector(".location"),
  number = document.querySelector(".numberin"),
  emaill = document.querySelector(".email"),
  languages = document.querySelector(".languages"),
  daraja = document.querySelector(".daraja"),
  unvon = document.querySelector(".unvon"),
  textar = document.querySelector(".textar"),
  phoneIcon = document.querySelector("#phone-icon"),
  emailIcon = document.querySelector("#email-icon"),
  nameDiv = document.querySelector(".nameDiv"),
  lastNameDiv = document.querySelector(".lastnameDiv"),
  joyi = document.querySelector(".joyi"),
  yili = document.querySelector(".yili"),
  mukofot = document.querySelector(".mukofot"),
  til = document.querySelector(".til"),
  ilmdaraja = document.querySelector(".ilmdaraja"),
  ilmunvon = document.querySelector(".ilmunvon"),
  textdiv = document.querySelector(".textdiv");

nameDiv.style.display = "none";
lastNameDiv.style.display = "none";
joyi.style.display = "none";
yili.style.display = "none";
mukofot.style.display = "none";
til.style.display = "none";
ilmdaraja.style.display = "none";
ilmunvon.style.display = "none";
textdiv.style.display = "none";

function InputsValue() {
  inputName.addEventListener("input", function () {
    let inputNameValue = inputName.value,
      formattedName = "";
    for (let i = 0; i < inputNameValue.length; i++) {
      formattedName += inputNameValue[i];
      if ((i + 1) % 30 === 0) {
        formattedName += "<br>";
      }
    }
    name1.innerHTML = formattedName;
    nameDiv.style.display = "block";
    if (inputNameValue !== "") {
      nameDiv.style.display = "block";
    } else {
      nameDiv.style.display = "none";
    }

    localStorage.setItem("inputName", formattedName);
  });

  inputSurname.addEventListener("input", function () {
    let inputSurnameValue = inputSurname.value,
      formattedSurName = "";
    for (let i = 0; i < inputSurnameValue.length; i++) {
      formattedSurName += inputSurnameValue[i];

      if ((i + 1) % 10 === 0) {
        formattedSurName += "<br>";
      }
    }

    lastName.innerHTML = formattedSurName;
    if (inputSurnameValue !== "") {
      lastNameDiv.style.display = "block";
    } else {
      lastNameDiv.style.display = "none";
    }
  });

  inputLoc.addEventListener("input", function () {
    let inputLocValue = inputLoc.value,
      formattedLoc = "";

    for (let i = 0; i < inputLocValue.length; i++) {
      formattedLoc += inputLocValue[i];

      if ((i + 1) % 30 === 0) {
        formattedLoc += "<br>";
      }
    }
    location22.innerHTML = formattedLoc;

    if (inputLocValue !== "") {
      mukofot.style.display = "block";
    } else {
      mukofot.style.display = "none";
    }
  });

  inputEmail.addEventListener("input", function () {
    let inputEmailValue = inputEmail.value,
      formattedLoc = "";

    for (let i = 0; i < inputEmailValue.length; i++) {
      formattedLoc += inputEmailValue[i];

      if ((i + 1) % 1 === 0) {
        formattedLoc += "<br>";
      }
    }

    emaill.innerHTML = inputEmail.value;
    if (inputEmailValue !== "") {
      joyi.style.display = "block";
    } else {
      joyi.style.display = "none";
    }
  });

  inputNumber.addEventListener("input", function () {
    let inputNumberValue = inputNumber.value;

    number.innerHTML = inputNumber.value;
    if (inputNumberValue !== "") {
      yili.style.display = "block";
    } else {
      yili.style.display = "none";
    }
  });

  inputLanguage.addEventListener("input", function () {
    let inputLanguageValue = inputLanguage.value;

    languages.innerHTML = inputLanguage.value;
    if (inputLanguageValue !== "") {
      til.style.display = "block";
    } else {
      til.style.display = "none";
    }
  });

  inputIlm.addEventListener("input", function () {
    let inputIlmValue = inputIlm.value;

    daraja.innerHTML = inputIlm.value;
    if (inputIlmValue !== "") {
      ilmdaraja.style.display = "block";
    } else {
      ilmdaraja.style.display = "none";
    }
  });

  inputUnvon.addEventListener("input", function () {
    let inputUnvonValue = inputUnvon.value;

    unvon.innerHTML = inputUnvon.value;
    if (inputUnvonValue !== "") {
      ilmunvon.style.display = "block";
    } else {
      ilmunvon.style.display = "none";
    }
  });

  textArea.addEventListener("input", function () {
    let textValue = textArea.value;
    let formattedText = "";

    for (let i = 0; i < textValue.length; i++) {
      formattedText += textValue[i];

      if ((i + 1) % 60 === 0) {
        formattedText += "<br>";
      }
    }
    textar.innerHTML = formattedText;

    if (textValue !== "") {
      textdiv.style.display = "block";
    } else {
      textdiv.style.display = "none";
    }
  });
}
InputsValue();

const tdParernt = document.querySelector(".td-parent"),
  parentName = document.querySelector(".parent-name"),
  parentAge = document.querySelector(".parent-age"),
  parentIsh = document.querySelector(".parent-ish"),
  parentLoc = document.querySelector(".parent-location"),
  th = document.querySelectorAll(".th"),
  table = document.querySelector("tr");

nextBtn.addEventListener("click", function () {
  option.style.display = "block";
  tableDiv.style.display = "block";
});

function ParentInput() {
  const finalyBtn = document.querySelector(".finaly"),
    tBody = document.querySelector("tbody"),
    select = document.querySelector("select");

  finalyBtn.addEventListener("click", function () {
    const parentName = document.querySelector(".parent-name"),
      parentAge = document.querySelector(".parent-age"),
      parentIsh = document.querySelector(".parent-ish"),
      parentLoc = document.querySelector(".parent-location");

    const selectedValue = select.value;

    if (
      parentName.value === "" &&
      parentAge.value === "" &&
      parentIsh.value === "" &&
      parentLoc.value === ""
    ) {
      // alert("Пожалуйста, заполните все поля.");
      return;
    } else {
      let tr = document.createElement("tr");
      tr.innerHTML = `
                <td>${selectedValue}</td>
                <td>${parentName.value}</td>
                <td>${parentAge.value}</td>
                <td>${parentIsh.value}</td>
                <td>${parentLoc.value}</td>
            `;
      tBody.appendChild(tr);

      const tbodyData = tBody.innerHTML;
      localStorage.setItem("tBody", tbodyData);
    }

    // let tr = document.createElement("tr");
    // tr.innerHTML = `
    //     <td>${selectedValue}</td>
    //     <td>${parentName.value}</td>
    //     <td>${parentAge.value}</td>
    //     <td>${parentIsh.value}</td>
    //     <td>${parentLoc.value}</td>
    // `;
    // tBody.appendChild(tr);

    parentName.value = "";
    parentAge.value = "";
    parentIsh.value = "";
    parentLoc.value = "";
  });
}

ParentInput();

function ClearB() {
  let int = document.querySelectorAll("input");
  int.forEach((element) => {
    element.value = "";
  });
  textArea.value = "";
}

clearBtn.addEventListener("click", function () {
  ClearB();
});

// scroll nav
const scrollNavbar = document.querySelector(".scrol-nav");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    scrollNavbar.classList.add("scrol-nav__active");
  } else {
    scrollNavbar.classList.remove("scrol-nav__active");
  }
});

// dark mode
const navLink = document.querySelectorAll(".nav-link"),
  btnDark = document.querySelectorAll(".dark-mode"),
  body = document.querySelector("body"),
  formInput = document.querySelector(".form-input"),
  formTitle = document.querySelector(".form-input-title"),
  label = document.querySelectorAll("label"),
  input = document.querySelectorAll("input"),
  text = document.querySelector("textarea");

btnDark.forEach((element) => {
  element.addEventListener("click", function () {
    navLink.forEach((element2) => {
      element2.classList.toggle("text-light");
    });

    body.classList.toggle("bg-dark");
    formInput.classList.toggle("bg-dark");
    formInput.classList.toggle("borderAll");
    formTitle.classList.toggle("text-light");

    label.forEach((element) => {
      element.classList.toggle("text-light");
    });

    input.forEach((element) => {
      element.classList.toggle("bg-dark");
      element.classList.toggle("borderAll");
      element.classList.toggle("text");
    });
    text.classList.toggle("bg-dark");
    text.classList.toggle("text-light");
    scrollNavbar.classList.toggle("bg-dark");
  });
});
