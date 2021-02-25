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
const formTerms = document.getElementById('checkbox1')

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
    let terms = formTerms.checked;

    // send if the form is valid
    return (ville && terms);
}

// is one town selected
function isOneTownSelected() {
    for (let ville of formVilles) {
        if (ville.checked == true) {
            return true;
        }
    }
    return false;
}