let generateMain = document.querySelector(".generate");
let fromRange = document.getElementsByName("from-sorah")[0];
let toRange = document.getElementsByName("to-sorah")[0];
let min = 144, max = 41;
// Second Box

let aya = document.querySelector(".aya");
let sorrahName = document.querySelector(".sorrah-name");
let ayaId = document.querySelector(".aya-id");
let sorrahLength = document.querySelector(".sorrah-length");
// 
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

fromRange.onchange = function () {
    min = +fromRange.value;
}
toRange.onchange = function () {
    max = +toRange.value;
}



generateMain.addEventListener('click', () => {
    if (min > max) {
        [max, min] = [min, max];
    }
    fetching();
}
)

async function fetching() {
    let sorrahIndex = Math.floor(Math.random() * (max - min + 1) + min) - 1; // min => max , -1 for indexing in json file
    await fetch("programming/Quran.json")
        .then((result) => result.json())
        .then((data) => {
            let ayaIndex = Math.floor(Math.random() * (data[sorrahIndex]['array'].length));
            let randAya = data[sorrahIndex]['array'][ayaIndex]['ar'];
            let id = data[sorrahIndex]['array'][ayaIndex]['id'];
            let length = data[sorrahIndex]['array'].length;

            aya.textContent = randAya;
            sorrahName.textContent = data[sorrahIndex]['name'];
            ayaId.textContent = id;
            sorrahLength.textContent = length;
        });
    box1.style.display = "none";
    box2.style.display = "block";
}
