const form = document.getElementById("form");

const fullName = document.getElementById("fullName");
const age = document.getElementById("age");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const checkPassword = document.getElementById("checkPassword");

const successMessage =
  document.getElementById("successMessage");


form.addEventListener("submit", function (event) {

  event.preventDefault();

  checkInput();

});


function checkInput() {

  const fullNameValue =
    fullName.value.trim();

  const ageValue =
    age.value.trim();

  const emailValue =
    email.value.trim();

  const genderValue =
    gender.value;

  const phoneValue =
    phoneNumber.value.trim();

  const passwordValue =
    password.value.trim();

  const checkPasswordValue =
    checkPassword.value.trim();


  let isValid = true;


  /* =========================
     FULL NAME
  ========================= */

  if (fullNameValue === "") {

    setErrorMessage(
      fullName,
      "Le nom complet est obligatoire."
    );

    isValid = false;

  } else if (fullNameValue.length < 3) {

    setErrorMessage(
      fullName,
      "Le nom doit contenir au moins 3 caractères."
    );

    isValid = false;

  } else {

    setSuccessMessage(fullName);
  }


  /* =========================
     AGE
  ========================= */

  if (ageValue === "") {

    setErrorMessage(
      age,
      "L'âge est obligatoire."
    );

    isValid = false;

  } else if (
    Number(ageValue) < 18 ||
    Number(ageValue) > 100
  ) {

    setErrorMessage(
      age,
      "L'âge doit être compris entre 18 et 100 ans."
    );

    isValid = false;

  } else {

    setSuccessMessage(age);
  }


  /* =========================
     EMAIL
  ========================= */

  if (emailValue === "") {

    setErrorMessage(
      email,
      "L'adresse email est obligatoire."
    );

    isValid = false;

  } else if (!isValidateEmail(emailValue)) {

    setErrorMessage(
      email,
      "Veuillez entrer une adresse email valide."
    );

    isValid = false;

  } else {

    setSuccessMessage(email);
  }


  /* =========================
     GENDER
  ========================= */

  if (genderValue === "default") {

    setErrorMessage(
      gender,
      "Veuillez sélectionner votre genre."
    );

    isValid = false;

  } else {

    setSuccessMessage(gender);
  }


  /* =========================
     PHONE
  ========================= */

  if (phoneValue === "") {

    setErrorMessage(
      phoneNumber,
      "Le numéro de téléphone est obligatoire."
    );

    isValid = false;

  } else if (
    !/^[0-9]{10}$/.test(phoneValue)
  ) {

    setErrorMessage(
      phoneNumber,
      "Le numéro doit contenir exactement 10 chiffres."
    );

    isValid = false;

  } else {

    setSuccessMessage(phoneNumber);
  }


  /* =========================
     PASSWORD
  ========================= */

  if (passwordValue === "") {

    setErrorMessage(
      password,
      "Le mot de passe est obligatoire."
    );

    isValid = false;

  } else if (passwordValue.length < 8) {

    setErrorMessage(
      password,
      "Le mot de passe doit contenir au moins 8 caractères."
    );

    isValid = false;

  } else {

    setSuccessMessage(password);
  }


  /* =========================
     CONFIRM PASSWORD
  ========================= */

  if (checkPasswordValue === "") {

    setErrorMessage(
      checkPassword,
      "Veuillez confirmer votre mot de passe."
    );

    isValid = false;

  } else if (
    passwordValue !== checkPasswordValue
  ) {

    setErrorMessage(
      checkPassword,
      "Les mots de passe ne correspondent pas."
    );

    isValid = false;

  } else {

    setSuccessMessage(checkPassword);
  }


  /* =========================
     FINAL RESULT
  ========================= */

  if (isValid) {

    successMessage.classList.add("show");

    setTimeout(function () {

      successMessage.classList.remove("show");

    }, 5000);

  } else {

    successMessage.classList.remove("show");
  }
}


/* =========================
   ERROR
========================= */

function setErrorMessage(input, message) {

  const formControl =
    input.parentElement;

  const small =
    formControl.querySelector("small");

  small.textContent = message;

  formControl.className =
    "form-control error";
}


/* =========================
   SUCCESS
========================= */

function setSuccessMessage(input) {

  const formControl =
    input.parentElement;

  const small =
    formControl.querySelector("small");

  small.textContent =
    "Champ valide";

  formControl.className =
    "form-control success";
}


/* =========================
   EMAIL VALIDATION
========================= */

function isValidateEmail(email) {

  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email);
}