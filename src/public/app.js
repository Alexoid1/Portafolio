const botonSpanish=document.getElementById('spanish');
const botonEnglish=document.getElementById('english');
const hiThere=document.getElementById('hiThere');
const im=document.getElementById('im');
const ican=document.getElementById('ican');
const aboutNav=document.getElementById('aboutNav');
const contactNav=document.getElementById('contactNav');
const myworks=document.getElementById('myworks');

const spanish={
    hi:'Hola.<br>Soy Alex',
    im:'Soy un Desarrollador de Software',
    ican:'Yo puedo ayudarte a crear un producto, aplicación o sitio web a travéz de mi trabajo y experiencia! Si te gustan mis proyectos, y tienes un proyecto que nesesita programarse, no dudes en contactarme.',
    aboutNav:'Sobre Mí',
    contactNav:'Contacto',
    botonSpanish:'Español',
    botonEnglish:'Inglés',
    myworks:'Mi Trabajo Reciente'

}

const english ={
    hi:"Hey There.<br>I'm Alex",
    im:"I'm a Software Developer",
    ican:"I can help you to build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hestiate to contact me.",
    aboutNav:'About',
    contactNav:'Contact',
    botonSpanish:'Spanish',
    botonEnglish:'English',
    myworks:'My Recent Works'

}

botonSpanish.addEventListener('click',()=> {
    hiThere.innerHTML=spanish.hi,
    im.textContent=spanish.im,
    ican.textContent=spanish.ican,
    aboutNav.textContent=spanish.aboutNav,
    contactNav.textContent=spanish.contactNav,
    botonEnglish.textContent=spanish.botonEnglish,
    botonSpanish.textContent=spanish.botonSpanish,
    myworks.textContent=spanish.myworks
})

botonEnglish.addEventListener('click', ()=>{
    hiThere.innerHTML=english.hi,
    im.textContent=english.im,
    ican.textContent=english.ican,
    aboutNav.textContent=english.aboutNav,
    contactNav.textContent=english.contactNav,
    botonSpanish.textContent=english.botonSpanish,
    botonEnglish.textContent=english.botonEnglish,
    myworks.textContent=english.myworks
})