const botonSpanish=document.getElementById('spanish');
const botonEnglish=document.getElementById('english');
const hiThere=document.getElementById('hiThere');
const im=document.getElementById('im');
const ican=document.getElementById('ican');
const aboutNav=document.getElementById('aboutNav');
const contactNav=document.getElementById('contactNav');
const myworks=document.getElementById('myworks');
const mainProjectH=document.getElementById('mainProjectH');
const mainProjectD=document.getElementById('mainProjectD');
const procj1T=document.getElementById('procj1T');
const procj1D=document.getElementById('procj1D');
const procj2T=document.getElementById('procj2T');
const procj2D=document.getElementById('procj2D');
const procj3T=document.getElementById('procj3T');
const procj3D=document.getElementById('procj3D');
const procj4T=document.getElementById('procj4T');
const procj4D=document.getElementById('procj4D');
const aboutmeH=document.getElementById('aboutmeH');
const aboutmeD=document.getElementById('aboutmeD');
const languages=document.getElementById('languages');
const frameworks=document.getElementById('frameworks');
const libraries=document.getElementById('libraries');
const databases=document.getElementById('databases');
const skills=document.getElementById('skills');
const message=document.getElementById('message');
const company=document.getElementById('company');
const name=document.getElementById('name');
const email=document.getElementById('email');
const write=document.getElementById('write');
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








const spanish={
    hi:'Hola.<br>Soy Alex',
    im:'Soy un Desarrollador de Software',
    ican:'Yo puedo ayudarte a crear un producto, aplicación o sitio web a travéz de mi trabajo y experiencia! Si te gustan mis proyectos, y tienes un proyecto que nesesita programarse, no dudes en contactarme.',
    aboutNav:'Sobre Mí',
    contactNav:'Contacto',
    botonSpanish:'Español',
    botonEnglish:'Inglés',
    myworks:'Mi Trabajo Reciente',
    mainProjectH:'Red Social de Biología',
    mainProjectD:'Esta es una red social para biólogos donde el usuario puede compartir sus avistamientos de especies, compartir posts, seguir otro usuarios, y registrar sus actividad a diario y semanalmente.',
    procj1T:'Batería',
    procj1D:'Toca la batería con el Teclado',
    procj2T:'Eventos',
    procj2D:'Es un sitio web de Eventos donde el usuario puede asistir a eventos crear eventos, incluye una autenticación de usuario.',
    procj3T:'Generador de Memes',
    procj3D:'Un generador de memes usando la API pública de (imgflip).',
    procj4T:'Buscador de Letras',
    procj4D:'Busca letras de canciónes usando la API (musixMatch).',
    aboutmeH:'Sobre mí',
    aboutmeD:'Hola soy Alex Zambrano soy un desarrollador de software enfocado a producción de Quito-Ecuador. Mi habilidad en tecnologías de web es particularmente en Javascript y Ruby on Rails. Me enfoco en brindar valor comercial mientras construyo aplicaciónes mantenibles con pruebas y adoptando estándares de producción.',
    languages:'Lenguajes',
    libraries:'Librerías',
    databases:'Bases de Datos',
    skills:'Herramientas',
    message:'Yo siempre estoy interesado en escuchar sobre nuevos proyectos, así que si te gustaría hablar ponte en contacto.',
    company:'Compania',
    name:'Nombre',
    write:'Escribe tu mensaje',
    botonSend:'Contacto'

}

const english ={
    hi:"Hey There.<br>I'm Alex",
    im:"I'm a Software Developer",
    ican:"I can help you to build a product, feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don't hestiate to contact me.",
    aboutNav:'About',
    contactNav:'Contact',
    botonSpanish:'Spanish',
    botonEnglish:'English',
    myworks:'My Recent Works',
    mainProjectH:'Biologist Social Media',
    mainProjectD:'This is a social-media where the user can share the species sightings with other users, share posts, follow other users, and track his activity daily and weekly.',
    procj1T:'Drum Machine',
    procj1D:'Play the drum with the keyboard',
    procj2T:'Events',
    procj2D:'This is a events web-site where the user can attend events and post events, and it includes user authentication.',
    procj3T:'Meme Generator',
    procj3D:'A meme generator using a Public API (imgflip).',
    procj4T:'Lyrics Finder',
    procj4D:'This is a lyrics finder using the API (musixMatch).',
    aboutmeH:'About me',
    aboutmeD:"Hi, I'm Alex Zambrano I am a product-focused software developer from Quito-Ecuador. My expertise is in web technologies, particularly JavaScript and Ruby on Rails. I focus on delivering business value while building maintainable applications with tests and embracing standards.",
    languages:'Languages',
    libraries:'Libraries',
    databases:'Databases',
    skills:'Skills',
    message:"I'm always interested in hearing about new projects, so If you'd like to chat please get in touch.",
    company:'Company',
    name:'Name',
    write:'Write your Message',
    botonSend:'Get In Touch'

}

botonSpanish.addEventListener('click',()=> {
    hiThere.innerHTML=spanish.hi,
    im.textContent=spanish.im,
    ican.textContent=spanish.ican,
    aboutNav.textContent=spanish.aboutNav,
    contactNav.textContent=spanish.contactNav,
    botonEnglish.textContent=spanish.botonEnglish,
    botonSpanish.textContent=spanish.botonSpanish,
    myworks.textContent=spanish.myworks,
    mainProjectH.textContent=spanish.mainProjectH,
    mainProjectD.textContent=spanish.mainProjectD,
    procj1T.textContent=spanish.procj1T,
    procj1D.textContent=spanish.procj1D,
    procj2T.textContent=spanish.procj2T,
    procj2D.textContent=spanish.procj2D,
    procj3T.textContent=spanish.procj3T,
    procj3D.textContent=spanish.procj3D,
    procj4T.textContent=spanish.procj4T,
    procj4D.textContent=spanish.procj4D,
    aboutmeH.textContent=spanish.aboutmeH,
    aboutmeD.textContent=spanish.aboutmeD,
    languages.textContent=spanish.languages,
    libraries.textContent=spanish.libraries,
    databases.textContent=spanish.databases,
    skills.textContent=spanish.skills,
    message.textContent=spanish.message,
    company.placeholder=spanish.company,
    name.placeholder=spanish.name,
    write.placeholder=spanish.write,
    botonSend.textContent=spanish.botonSend
    
})

botonEnglish.addEventListener('click', ()=>{
    hiThere.innerHTML=english.hi,
    im.textContent=english.im,
    ican.textContent=english.ican,
    aboutNav.textContent=english.aboutNav,
    contactNav.textContent=english.contactNav,
    botonSpanish.textContent=english.botonSpanish,
    botonEnglish.textContent=english.botonEnglish,
    myworks.textContent=english.myworks,
    mainProjectH.textContent=english.mainProjectH,
    mainProjectD.textContent=english.mainProjectD,
    procj1T.textContent=english.procj1T,
    procj1D.textContent=english.procj1D,
    procj2T.textContent=english.procj2T,
    procj2D.textContent=english.procj2D,
    procj3T.textContent=english.procj3T,
    procj3D.textContent=english.procj3D,
    procj4T.textContent=english.procj4T,
    procj4D.textContent=english.procj4D,
    aboutmeH.textContent=english.aboutmeH,
    aboutmeD.textContent=english.aboutmeD,
    languages.textContent=english.languages,
    libraries.textContent=english.libraries,
    databases.textContent=english.databases,
    skills.textContent=english.skills,
    message.textContent=english.message,
    company.placeholder=english.company,
    name.placeholder=english.name,
    write.placeholder=english.write,
    botonSend.textContent=english.botonSend
});

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



