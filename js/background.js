const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
]

const chooseImg = images[Math.floor(Math.random()*images.length)];

// js에서 html element를 역으로 만들어서 html로 연결시키는 것. 
const bgImage = document.createElement("img");
bgImage.src = `img/${chooseImg}`;

//html의 body에 만들어 놓은 element를 붙인다. 
document.body.appendChild(bgImage);