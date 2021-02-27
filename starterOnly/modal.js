function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalbgII = document.querySelector(".bgroundII");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnClose = document.querySelector(".close");
const modalBtnCloseII = document.querySelector(".closeII");
const modalBtnCloseIII = document.querySelector(".btn-submitII");
const formVilles = document.getElementsByName("location");
const formTerms = document.getElementById('checkbox1');
const formTermsError = document.getElementById('errorTerms');
const formInputs = [
    document.getElementById('prenom'),
    document.getElementById('nom'),
    document.getElementById('mail'),
    document.getElementById('dateNaissance'),
    document.getElementById('combienTournois')
];
const form = document.forms[0];

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// launch modalII 
function launchModalII() {
    modalbgII.style.display = "block";
}

// close modal event
modalBtnClose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// close modalII event
modalBtnCloseII.addEventListener("click", closeModalII);

// close modalII event (button)
modalBtnCloseIII.addEventListener("click", closeModalII);

// close modal form
function closeModalII() {
    modalbgII.style.display = "none";
}

// the form validation //
function validate() {
    // variables to check
    let validInputs, aTownSelected, validTerms;

    // check all text inputs error
    validInputs = true;
    for (let input of formInputs) {
        if (!input.validity.valid) validInputs = false;
    }

    // check if one town's selected
    aTownSelected = isOneTownSelected();

    // check terms validation
    validTerms = isValidatedTerms();

    // if it's ok send the form and the confirmation modal
    if (validInputs && aTownSelected && validTerms) {
        closeModal();
        launchModalII();
        return true;
    } else return false;
}

// check if one town's selected
function isOneTownSelected() {
    for (let ville of formVilles) {
        ville.parentElement.setAttribute("data-error-visible", "true");
        if (ville.checked == true) {
            ville.parentElement.setAttribute("data-error-visible", "false");
            return true;
        }
    }
    return false;
}

// check terms validation
function isValidatedTerms() {
    if (formTerms.checked) {
        formTerms.parentElement.setAttribute("data-error-visible", "false");
        return true;
    } else {
        formTerms.parentElement.setAttribute("data-error-visible", "true");
        return false;
    }
}

// inputs text listeners (invalid and blur)
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        checkInputsErrors(formInputs[i]);
        validate();
    });
    formInputs[i].addEventListener('blur', function(e) {
        checkInputsErrors(formInputs[i]);
    });
}

// check inputs errors with the listeners
function checkInputsErrors(el) {
    if (el.validity.valid) {
        el.parentElement.setAttribute("data-error-visible", "false");
    } else {
        el.parentElement.setAttribute("data-error-visible", "true");
    }

}