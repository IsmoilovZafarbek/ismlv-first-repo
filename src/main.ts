
const previousBtn = document.querySelector(".previous-btn") as HTMLButtonElement;
const nextBtn = document.querySelector(".next-btn") as HTMLButtonElement;
const photo = document.querySelector(".photo") as HTMLImageElement;
const startBtn = document.querySelector(".btn-animation") as HTMLButtonElement;

const images = [
    "src/photo/photo-1.jpg",
    "src/photo/photo-2.jpg",
    "src/photo/photo-3.jpg",
    "src/photo/photo-4.jpg",
    "src/photo/photo-5.jpg",
    "src/photo/photo-6.jpg",
    "src/photo/photo-7.jpg",
    "src/photo/photo-8.jpg"
]

let currentIdx = 0;
function updateImage() {
    photo.src = images[currentIdx];
  }
  
  nextBtn.addEventListener("click", () => {
    currentIdx = (currentIdx + 1) % images.length;
    updateImage();
  });
  
  previousBtn.addEventListener("click", () => {
    currentIdx = (currentIdx - 1 + images.length) % images.length;
    updateImage();
  });


  let intervalId: number | null = null;

function randomNumber(){
    return Math.floor(Math.random() * 8) + 1;
}

startBtn.addEventListener("click", () => {
    
   
    if(startBtn.innerText === "Start Animation") {
        startBtn.innerText = "Stop Animation";
        intervalId = setInterval(() => {
            const random = randomNumber();

            photo.src = `src/photo/photo-${random}.jpg`;
        }, 1500);
    } else if(startBtn.innerText === "Stop Animation") {
        startBtn.innerText = "Start Animation";
        if (intervalId !== null) {
            clearInterval(intervalId);
            intervalId = null;
        }
        photo.src = "src/photo/photo-1.jpg";
    }
});