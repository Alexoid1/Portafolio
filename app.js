const leng = document.getElementById('leng');
const downloadResume = document.getElementById('downloadResume');
const roboGif = document.getElementById('roboGif');
const bioSocial = document.getElementById('bioSocial');
const batery = document.getElementById('batery');
const eventt = document.getElementById('event');
const heroes = document.getElementById('heroes');
const p1i1 = document.getElementById('p1i1').addEventListener('click', changeImg);
const p1i2 = document.getElementById('p1i2').addEventListener('click', changeImg);
const p1i3 = document.getElementById('p1i3').addEventListener('click', changeImg);
const p2i1 = document.getElementById('p2i1').addEventListener('click', changeImg2);
const p2i2 = document.getElementById('p2i2').addEventListener('click', changeImg2);
const p2i3 = document.getElementById('p2i3').addEventListener('click', changeImg2);
const p2i4 = document.getElementById('p2i4').addEventListener('click', changeImg2);
const p3i1 = document.getElementById('p3i1').addEventListener('click', changeImg3);
const p3i2 = document.getElementById('p3i2').addEventListener('click', changeImg3);
const p3i3 = document.getElementById('p3i3').addEventListener('click', changeImg3);
const p4i1 = document.getElementById('p4i1').addEventListener('click', changeImg4);
const p4i2 = document.getElementById('p4i2').addEventListener('click', changeImg4);
const p4i3 = document.getElementById('p4i3').addEventListener('click', changeImg4);
const p5i1 = document.getElementById('p5i1').addEventListener('click', changeImg5);
const p5i2 = document.getElementById('p5i2').addEventListener('click', changeImg5);


let le = 'en';
leng.addEventListener('click', () => {
  if (le === 'en') {
    leng.innerHTML = 'ES  <i class="fa fa-caret-down" aria-hidden="true"></i>';
    le = 'es';
    downloadResume.href = 'https://drive.google.com/u/0/uc?id=1V2-6vMB1TFjEEmhRcJ4VwGrKkXHhjD2g&export=download';
  } else {
    leng.innerHTML = 'EN  <i class="fa fa-caret-down" aria-hidden="true"></i>';
    le = 'en';
    downloadResume.href = 'https://drive.google.com/u/0/uc?id=1q9XpoPtPtI4yR0yI6jjPrkWYFC9hnGZH&export=download';
  }
});

function changeImg() {
  if (this.id === 'p1i1') {
    roboGif.src = './image/img1.png';
  } else if (this.id === 'p1i2') {
    roboGif.src = './image/img2.png';
  } else if (this.id === 'p1i3') {
    roboGif.src = './image/robogif.gif';
  }
}

function changeImg2() {
  if (this.id === 'p2i1') {
    bioSocial.src = './image/biologist.png';
  } else if (this.id === 'p2i2') {
    bioSocial.src = './image/bio2.png';
  } else if (this.id === 'p2i3') {
    bioSocial.src = './image/bio3.png';
  } else if (this.id === 'p2i4') {
    bioSocial.src = './image/bio4.png';
  }
}

function changeImg3() {
  if (this.id === 'p3i1') {
    batery.src = './image/login.png';
  } else if (this.id === 'p3i2') {
    batery.src = './image/motos.png';
  }else if (this.id === 'p3i3') {
    batery.src = './image/book.png';
  }
}

function changeImg4() {
  if (this.id === 'p4i1') {
    eventt.src = './image/event.png';
  } else if (this.id === 'p4i2') {
    eventt.src = './image/events2.png';
  } else if (this.id === 'p4i3') {
    eventt.src = './image/events4.png';
  }
}

function changeImg5() {
  if (this.id === 'p5i1') {
    heroes.src = './image/heroes.png';
  } else if (this.id === 'p5i2') {
    heroes.src = './image/screen.png';
  }
}


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