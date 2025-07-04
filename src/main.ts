
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';


const btn = document.querySelector(".btn") as HTMLButtonElement;
const photo = document.querySelector(".photo") as HTMLImageElement;
let intervalId: number | null = null;

function randomNumber(){
    return Math.floor(Math.random() * 8) + 1;
}

btn.addEventListener("click", () => {
   
    if(btn.innerText === "Start") {
        btn.innerText = "Stop";
        intervalId = setInterval(() => {
            const random = randomNumber();

            photo.src = `src/photo/photo-${random}.jpg`;
        }, 1500);
    } else if(btn.innerText === "Stop") {
        btn.innerText = "Start";
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        photo.src = "src/photo/photo-1.jpg";
    }
});
