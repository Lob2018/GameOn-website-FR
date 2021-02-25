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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalBtnCLose = document.querySelector(".close");
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
const formVillesError = document.getElementById('errorVilles');


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
    modalbg.style.display = "block";
}

// close modal event
modalBtnCLose.addEventListener("click", closeModal);

// close modal form
function closeModal() {
    modalbg.style.display = "none";
}

// the form validation //
function validate() {
    // one town is selected
    let ville = isOneTownSelected();

    // terms are validated
    let terms = isValidatedTerms();

    // send if the form is valid
    return (ville && terms);
}

// is one town selected
function isOneTownSelected() {
    for (let ville of formVilles) {
        if (ville.checked == true) {
            formVillesError.style.display = 'none';
            return true;
        }
    }
    formVillesError.style.display = 'block';
    return false;
}

// are terms validated
function isValidatedTerms() {
    if (formTerms.checked) {
        formTermsError.style.display = 'none';
        return true;
    } else {
        formTermsError.style.display = 'block';
        return false;
    }
}

// inputs listeners
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener('invalid', function(e) {
        e.preventDefault();
        e.stopPropagation();
        checkInputsErrors(formInputs[i]);
        validate();
    });
    formInputs[i].addEventListener('blur', function(e) {
        checkInputsErrors(formInputs[i]);
        validate();
    });
}

// check inputs errors
function checkInputsErrors(el) {
    if (el.nextElementSibling != null) {
        if (el.validity.valid) {
            el.nextElementSibling.style.display = 'none';
            el.style.border = "none";
        } else {
            el.nextElementSibling.style.display = 'block';
            el.style.border = "0.15rem solid #FF0000";
        }
    }
}