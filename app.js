const leng = document.getElementById('leng');
const downloadResume = document.getElementById('downloadResume');
const roboGif = document.getElementById('roboGif');
const bioSocial = document.getElementById('bioSocial');
const batery = document.getElementById('batery');
const eventt = document.getElementById('event');
const heroes = document.getElementById('heroes');



let le = 'en';
leng.addEventListener('click', () => {
 
  if (le === 'en') {
    leng.innerHTML = 'ES  <i class="fa fa-caret-down" aria-hidden="true"></i>';
    le = 'es';
    
    downloadResume.href = 'https://drive.google.com/u/0/uc?id=1Abo8T7WzuYzAKe0O11QctYDCj_h6CDfW&export=download';
  } else {
    leng.innerHTML = 'EN  <i class="fa fa-caret-down" aria-hidden="true"></i>';
    le = 'en';
    downloadResume.href = 'https://drive.google.com/u/0/uc?id=14CbJO5N-q1jyUXDrA-zrCbCOKBK3nmEJ&export=download';
  }
});

const TypeWriter = function (txtEle, words, wait = 3000) {
  this.txtEle = txtEle;
  this.index = 0;
  this.wait = wait;
  this.text = '';
  this.words = words;
  this.isDeleting = false;
  this.type();
};

// type method
TypeWriter.prototype.type = function () {
  const current = this.index % this.words.length;
  const fullText = this.words[current];
  // check deleting
  if (this.isDeleting) {
    // Remove char
    this.text = fullText.substring(0, this.text.length - 1);
  } else {
    // add char
    this.text = fullText.substring(0, this.text.length + 1);
  }
  this.txtEle.innerHTML = `<span class="cur">${this.text}</span>`;

  let typeSpeed = 80;
  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.text === fullText) {
    typeSpeed = this.wait;
    setTimeout(() => { this.isDeleting = true; }, 3000);
  } else if (this.isDeleting && this.text === '') {
    this.isDeleting = false;
  }


  console.log(fullText);
  setTimeout(() => this.type(), 80);
};

document.addEventListener('DOMContentLoaded', init);

function init() {
  const textEle = document.getElementById('ican');
  const words = JSON.parse(textEle.getAttribute('data-words'));
  const wait = textEle.getAttribute('data-wait');
  new TypeWriter(textEle, words, wait);
}