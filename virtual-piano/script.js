function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.piano-key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('piano-key-active');
}
function playAudio(src) {
    const audio = new Audio();
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
}

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const COLLECTION = document.querySelectorAll(".piano-key");
const piano = document.querySelector(".piano");
const pianoКeys = document.querySelectorAll(".piano-key");

piano.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("piano-key")) {
      mouseDown = true;
      const note = event.target.dataset.note;
      const src = `assets/audio/${note}.mp3`;
      playAudio(src);
      pianoКeys.forEach((elem) => {
        if (elem.classList.contains("piano-key-active")) {
          elem.classList.remove("piano-key-active");
          elem.classList.remove("piano-key-active-pseudo");
        }
      });
      event.target.classList.add("piano-key-active");
      event.target.classList.add("piano-key-active-pseudo");
    }
})  


function removeTransition(e) {
    if(e.propertyName !== 'transform') return;
    this.classList.remove('piano-key-active');
}

const keys = document.querySelectorAll('.piano-key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)

document.querySelector('.fullscreen').addEventListener('click', toggleScreen);

function check (){
    console.log('fullscreenEnabled: ');
    console.log(document.fullscreenEnabled);
}
function toggleScreen() {
        document.documentElement.requestFullscreen();
        if(document.fullscreenEnabled){
            document.exitFullscreen();
        }
}
const Letters = document.querySelector(".btn-letters");
const Notes = document.querySelector(".btn-notes");
const Container = document.querySelector(".btn-container");
const btn = document.querySelectorAll(".btn");

Container.addEventListener("mousedown", (event) => {
    if (event.target.classList.contains("btn")) {
      btn.forEach((elem) => {
        if (elem.classList.contains("btn-active")) {
          elem.classList.remove("btn-active");
        }
      });
      event.target.classList.add("btn-active");
    }
  });

Letters.addEventListener("click", () => {
    keys.forEach((elem) => {
      if (!elem.classList.contains("piano-key-letter")) {
        elem.classList.add("piano-key-letter");
      }
    });
  });
  
Notes.addEventListener("click", () => {
    keys.forEach((elem) => {
      if (elem.classList.contains("piano-key-letter")) {
        elem.classList.remove("piano-key-letter");
      }
    });
  });
  
  