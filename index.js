const yesBtn = document.querySelector('#yesBtn');
const sorBtn = document.querySelector('#sorpresaBtn');

yesBtn.addEventListener('click',function () {
    alert('Ahi nos vemos :) y...')
    alert('Nunca olvides que...')
    alert('Te quiero mucho Samantha <3')
});

sorBtn.addEventListener('click',function () {
    open('//www.youtube.com/watch?v=P3cffdsEXXw')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    sorBtn.style.display='inline'
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})