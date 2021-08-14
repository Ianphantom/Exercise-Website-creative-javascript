const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll('input[type="range"]');
const currentHexes = document.querySelectorAll(".color h2");
let initialColor;

function generateHex(){
    const hexColor = chroma.random();
    return hexColor;
}

function randomColors(){
    colorDivs.forEach((div, index) =>{
        const hexText = div.children[0];
        const randomColors = generateHex();
        div.style.backgroundColor = randomColors;
        hexText.innerText = randomColors;
        checkTextContrast(randomColors, hexText)
    });
}

function checkTextContrast(color,text){
    const luminance = chroma(color).luminance();
    if(luminance > 0.5){
        text.style.color = "black";
    }else{
        text.style.color = "white"
    }
}

randomColors();