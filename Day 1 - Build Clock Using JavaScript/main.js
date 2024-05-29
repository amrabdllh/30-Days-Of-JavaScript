const mn = document.querySelector('#mnt');
const sc = document.querySelector('#dtk');
const hr = document.querySelector('#jm');

const deg = 6;
setInterval(() => {
    let day = new Date();
    let ms = day.getMilliseconds() * deg;
    let mm = day.getMinutes() * deg;
    let hrs = day.getHours() * 30;
    let ss = day.getSeconds() * deg + ms / 1000;
    
    jm.style.transform = `rotateZ(${hrs}deg)`;
    mnt.style.transform = `rotateZ(${mm}deg)`;
    dtk.style.transform = `rotateZ(${ss}deg)`;
})