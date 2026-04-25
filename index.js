
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

const digital = document.getElementById("digital");
const dateText = document.getElementById("date");

function clock(){

const now = new Date();

let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

const hDeg = (h * 30) + (m * 0.5);
const mDeg = m * 6;
const sDeg = s * 6;

hour.style.transform = `translateX(-50%) rotate(${hDeg}deg)`;
minute.style.transform = `translateX(-50%) rotate(${mDeg}deg)`;
second.style.transform = `translateX(-50%) rotate(${sDeg}deg)`;

/* DIGITAL */

if(h < 10) h = "0"+h;
if(m < 10) m = "0"+m;
if(s < 10) s = "0"+s;

digital.innerText = `${h}:${m}:${s}`;

/* DATE */

const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

let day = days[now.getDay()];
let month = months[now.getMonth()];
let date = now.getDate();
let year = now.getFullYear();

dateText.innerText = `${day} | ${date} ${month} ${year}`;

}

setInterval(clock,1000);
clock();

/* MODE TOGGLE */

function toggleMode(){

document.body.classList.toggle("dark");
document.body.classList.toggle("light");

}
