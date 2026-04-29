// Leo Mullholland
//April 29th, 2026
// JS Image Swap Project

const modelImages= ["img/01irl.webp", "img/01irl2.png"];

const imgElement = document.getElementById("model-frame");

const preload = new Image();
preload.src = modelImages[1];

imgElement.addEventListener('mouseenter', () => {
     imgElement.src = modelImages[1];
});

imgElement.addEventListener('mouseleave', () => {
     imgElement.src = modelImages[0];
});