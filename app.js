const botonSend=document.getElementById('botonSend');
const formContact=document.getElementById('formContact');
var btnP1=document.getElementById('btnP1');
var btnP2=document.getElementById('btnP2');
var btnP3=document.getElementById('btnP3');
var btnP3=document.getElementById('btnP3');
const diss1=document.querySelector('.diss1');
const diss2=document.querySelector('.diss2');
const diss3=document.querySelector('.diss3');
const diss4=document.querySelector('.diss4');
const modalCs=document.querySelectorAll('.modal1C');
const modalC1=modalCs[0];
const modalC2=modalCs[1];
const modalC3=modalCs[2];
const modalC4=modalCs[3];
const closes=document.querySelectorAll('.closeB');
const close1=closes[0];
const close2=closes[1];
const close3=closes[2];
const close4=closes[3];



btnP1.addEventListener('click', (e)=> {
    e.preventDefault();
    diss1.style.display='block';
    setTimeout(()=>{
        modalC1.classList.toggle("modalX");
    },30)
});

btnP2.addEventListener('click', (e)=> {
    e.preventDefault();
    diss2.style.display='block';
    setTimeout(()=>{
        modalC2.classList.toggle("modalX");
    },30)     
});

btnP3.addEventListener('click', (e)=> {
    e.preventDefault();
    diss3.style.display='block';
    setTimeout(()=>{
        modalC3.classList.toggle("modalX");
    },30)     
});

btnP4.addEventListener('click', (e)=> {
    e.preventDefault();
    diss4.style.display='block';
    setTimeout(()=>{
        modalC4.classList.toggle("modalX");
    },30)     
});

close1.addEventListener('click',(e)=>{
    e.preventDefault();
    modalC1.classList.toggle("modalX");
    setTimeout(()=>{
        diss1.style.display='none';
    },500)
});

close2.addEventListener('click',(e)=>{
    e.preventDefault();
    modalC2.classList.toggle("modalX");
    setTimeout(()=>{
        diss2.style.display='none';
    },500)
});

close3.addEventListener('click',(e)=>{
    e.preventDefault();
    modalC3.classList.toggle("modalX");
    setTimeout(()=>{
        diss3.style.display='none';
    },500)
});

close4.addEventListener('click',(e)=>{
    e.preventDefault();
    modalC4.classList.toggle("modalX");
    setTimeout(()=>{
        diss4.style.display='none';
    },500)
});



