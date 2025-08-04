

const skillOption2 = document.querySelector("#skill-option2");

skillOption2.onclick = function () {
    const skillOption1 = document.querySelector("#skill-option1");
    const skillOption3 = document.querySelector("#skill-option3");
    const skillOption4 = document.querySelector("#skill-option4");

    skillOption2.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption1.classList.remove("active");
    skillOption4.classList.remove("active");

};