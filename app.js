const leng = document.getElementById('leng');
const downloadResume = document.getElementById('downloadResume');
const roboGif = document.getElementById('roboGif');
const bioSocial = document.getElementById('bioSocial');
const p1i1=document.getElementById('p1i1').addEventListener('click', changeImg);
const p1i2=document.getElementById('p1i2').addEventListener('click', changeImg);
const p1i3=document.getElementById('p1i3').addEventListener('click', changeImg);
const p2i1=document.getElementById('p2i1').addEventListener('click', changeImg2);
const p2i2=document.getElementById('p2i2').addEventListener('click', changeImg2);
const p2i3=document.getElementById('p2i3').addEventListener('click', changeImg2);
const p2i4=document.getElementById('p2i4').addEventListener('click', changeImg2);

let le = 'en';
leng.addEventListener('click', () => {
  if (le === 'en') {
    leng.innerHTML = 'ES  <i class="fa fa-caret-down" aria-hidden="true"></i>';
    le = 'es';
    downloadResume.href = 'https://drive.google.com/u/0/uc?id=1AkmvRXZhdDcH_Kef47EDaHN4un4gbjjS&export=download';
  } else {
    leng.innerHTML = 'EN  <i class="fa fa-caret-down" aria-hidden="true"></i>';
    le = 'en';
    downloadResume.href = 'https://drive.google.com/u/0/uc?id=1PrrVdhM-YF7zorg10wRDWf9VbNybQn92&export=download';
  }
});

function changeImg (){
  if(this.id==='p1i1'){
    roboGif.src='./image/img1.png'
  }else if(this.id==='p1i2'){
    roboGif.src='./image/img2.png'
  }else if(this.id==='p1i3'){
    roboGif.src='./image/robogif.gif'
  }
}

function changeImg2 (){
  if(this.id==='p2i1'){
    bioSocial.src='./image/biologist.png'
  }else if(this.id==='p2i2'){
    bioSocial.src='./image/bio2.png'
  }else if(this.id==='p2i3'){
    bioSocial.src='./image/bio3.png'
  }else if(this.id==='p2i4'){
    bioSocial.src='./image/bio4.png'
  }
}


const TypeWriter = function (txtEle,words,wait=3000) {
  this.txtEle=txtEle;
  this.index=0;
  this.wait=wait;
  this.text='';
  this.words=words;
  this.isDeleting=false;
  this.type()
};

//type method
TypeWriter.prototype.type=function(){
  const current= this.index%this.words.length;
  const fullText= this.words[current]
  //check deleting
  if(this.isDeleting){
    //Remove char
    this.text = fullText.substring(0,this.text.length-1);
  }else{
    //add char
    this.text = fullText.substring(0,this.text.length+1);

  }
  this.txtEle.innerHTML=`<span class="cur">${this.text}</span>`;

  let typeSpeed=80;
  if(this.isDeleting){
    typeSpeed /=2;
  }

  if(!this.isDeleting&&this.text===fullText){
    typeSpeed=this.wait
    setTimeout(()=>{ this.isDeleting=true;},3000)
   

  }else if (this.isDeleting && this.text==='') {
    this.isDeleting=false;
  }


  console.log(fullText);
  setTimeout(()=>this.type(),80)
};

document.addEventListener('DOMContentLoaded', init);

function init(){
  const textEle=document.getElementById('ican');
  const words=JSON.parse(textEle.getAttribute('data-words'));
  const wait=textEle.getAttribute('data-wait');
  new TypeWriter(textEle,words,wait)
}