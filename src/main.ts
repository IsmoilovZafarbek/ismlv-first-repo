const box = document.querySelector('.box') as HTMLDivElement;
const button = document.querySelector('.btn') as HTMLButtonElement;

function generateHexColor(){
    let hexColor = '#';
    const hexValues = '0123456789abcdef';
    for (let i = 0; i < 6; i++) {
        hexColor += hexValues[Math.floor(Math.random() * hexValues.length)];
    }
    return hexColor;
};
button.onclick = () => {
    const randomColor = generateHexColor();
    box.style.backgroundColor = randomColor;
    box.textContent = randomColor;
}