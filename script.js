let container = document.querySelector(".container");
let randomSorah = document.querySelector(".random-sorah");
let generateButton = document.querySelectorAll(".generate-b");
let nameArr = document.querySelector(".name-ar");
let nameEn = document.querySelector(".name-en");
let sorrahNumms = document.querySelector(".sorrah-numbers");
let SorrahLocation = document.querySelector(".location");

let min = 78 - 1 /* this one for indexing*/;
let max = 85 - 1 /* this one for indexing*/;


generateButton.forEach(button => {
    button.addEventListener('click', function () {
        fetching();
    });
});


async function fetching() {
    let randomIndex = Math.ceil(Math.random() * (max - min) + min);
    await fetch("Quran.json").then((res) => res.json())
        .then((res) => {
            console.log(res[randomIndex])
            nameArr.textContent = res[randomIndex]['name'];
            nameEn.textContent = res[randomIndex]['name_translation'];
            sorrahNumms.textContent = `${res[randomIndex]['array'].length} آيه`;
            SorrahLocation.textContent = `__${res[randomIndex]['type']}__`;
        });
    container.classList.add("hidden");
    randomSorah.classList.remove("hidden");
}