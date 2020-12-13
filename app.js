const leng = document.getElementById('leng');
const downloadResume = document.getElementById('downloadResume');
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

  let typeSpeed=300;
  if(this.isDeleting){
    typeSpeed /=2;
  }

  if(!this.isDeleting&&this.text===fullText){
    typeSpeed=this.wait
    this.isDeleting=true;

  }


  console.log(fullText);
  setTimeout(()=>this.type(),500)
};

document.addEventListener('DOMContentLoaded', init);

function init(){
  const textEle=document.getElementById('ican');
  const words=JSON.parse(textEle.getAttribute('data-words'));
  const wait=textEle.getAttribute('data-wait');
  new TypeWriter(textEle,words,wait)
}