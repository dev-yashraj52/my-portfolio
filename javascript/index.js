

const skillOption1 = document.querySelector("#skill-option2");
const skillOption2 = document.querySelector("#skill-option1");
const skillOption3 = document.querySelector("#skill-option3");
const skillOption4 = document.querySelector("#skill-option4");


skillOption1.onclick = function () {

    skillOption1.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption2.classList.remove("active");
    skillOption4.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.className = "skill-item framework";
    });
};

skillOption2.onclick = function () {

    skillOption2.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption1.classList.remove("active");
    skillOption4.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.className = "skill-item framework";
    });
};

skillOption3.onclick = function () {

    skillOption3.classList.add("active");

    skillOption1.classList.remove("active");
    skillOption2.classList.remove("active");
    skillOption4.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.className = "skill-item framework";
    });
};

skillOption4.onclick = function () {

    skillOption4.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption1.classList.remove("active");
    skillOption2.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.className = "skill-item framework";
    });
};