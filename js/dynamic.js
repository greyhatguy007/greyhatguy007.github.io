const getNow = () => {
    const now = new Date();
    return `${now.getDate()} - ${now.getUTCMonth()} - ${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
}

const randomColor = () => {
    let rcolor = `rgb(${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)},${Math.floor(Math.random()*256)})`
    return rcolor;
}
const h = document.querySelector(`html`);
h.style.backgroundImage = `linear-gradient(to right, ${randomColor()},${randomColor()})`;
document.querySelector(`style`).innerHTML = `
.center {
    text-align:center;
    
}

.body{
    background-color : ${randomColor()}

}

.mt{
    padding-top:42vh;
}
`;


const r = document.querySelector('.root');
r.style.color = 'white';

r.innerHTML = `<div>
<h1>Ritvik's Dynamic Website</h1>
</div>
<div class='current center'>
<h2></h2></div>`;

document.querySelector(".root>div").classList.add("center", "mt");


console.log(getNow());

setInterval(() => {
    document.querySelector(".current>h2").textContent = getNow();
}, 1000)

setInterval(() => {
    h.style.backgroundImage = `linear-gradient(to right, ${randomColor()},${randomColor()})`;
}, 1000);