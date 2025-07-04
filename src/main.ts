// src/main.ts
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const btn = document.querySelector(".btn") as HTMLButtonElement;
const photo = document.querySelector(".photo") as HTMLImageElement;

function randomNumber(){
    return Math.floor(Math.random() * 8) + 1;
}

btn.onclick = () => {
    photo.src = `src/photo/photo-${randomNumber()}.jpg`;
};