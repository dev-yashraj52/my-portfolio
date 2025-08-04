

const skillOption1 = document.querySelector("#skill-option1");
const skillOption2 = document.querySelector("#skill-option2");
const skillOption3 = document.querySelector("#skill-option3");
const skillOption4 = document.querySelector("#skill-option4");

// language button click logic
skillOption1.onclick = function () {

    skillOption1.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption2.classList.remove("active");
    skillOption4.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.classList.remove("active");
    });

    const skillItemCurrent = document.querySelectorAll(".skill-item.language");
    skillItemCurrent.forEach(item => {
        item.classList.add("active");
    });
};

// framework button click logic
skillOption2.onclick = function () {

    skillOption2.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption1.classList.remove("active");
    skillOption4.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.classList.remove("active");
    });

    const skillItemCurrent = document.querySelectorAll(".skill-item.framework");
    skillItemCurrent.forEach(item => {
        item.classList.add("active");
    });
};

// tools button click logic
skillOption3.onclick = function () {

    skillOption3.classList.add("active");

    skillOption1.classList.remove("active");
    skillOption2.classList.remove("active");
    skillOption4.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.classList.remove("active");
    });

    const skillItemCurrent = document.querySelectorAll(".skill-item.tools");
    skillItemCurrent.forEach(item => {
        item.classList.add("active");
    });
};

//more-skills button click logic
skillOption4.onclick = function () {

    skillOption4.classList.add("active");

    skillOption3.classList.remove("active");
    skillOption1.classList.remove("active");
    skillOption2.classList.remove("active");

    const skillItem = document.querySelectorAll(".skill-item");
    skillItem.forEach(item => {
        item.classList.remove("active");
    });

    const skillItemCurrent = document.querySelectorAll(".skill-item.more-skills");
    skillItemCurrent.forEach(item => {
        item.classList.add("active");
    });
};