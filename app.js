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

const TypeWriter = function (txt,words,wait=3000) {
  this.index=0;
  this.text='';
  this.isDeleting=false;
  this.type=function(){

  };
};

document.addEventListener('DOMcontentLoaded', init);

function init(){
  const textEle=document.getElementById('ican');
  const words=JSON.parse(textEle.getAttribute('data-words'));
  const wait=textEle.getAttribute('data-wait');
  new TypeWriter(textEle,word,wait)
}