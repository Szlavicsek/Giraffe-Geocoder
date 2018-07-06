const giraffe_horn1 = document.querySelector('#horn1');
const giraffe_horn2 = document.querySelector('#horn2');
const giraffe_ear = document.querySelector('.giraffe-ear');
const giraffe_head = document.querySelector('.giraffe-head');
const giraffe_container = document.querySelector('.giraffe');
const doc_body = document.querySelector('body');
const search_trigger = document.querySelector('.trigger');
const searchbar = document.querySelector('.searchbar-wrapper');
const search_icon = document.querySelector('.search-icon');

let popUp = function() {
  searchbar.style.top = "10vh";
  search_icon.style.width = `${search_icon.offsetHeight}px`;
  console.log(window.innerHeight);
  giraffe_container.classList.add("giraffe-popup");
  giraffe_container.style.bottom = "0px";
  giraffe_head.classList.add("giraffe-head-popup");
  giraffe_ear.classList.add("ear-anim");
  giraffe_horn1.classList.add("giraffe-horn1-popup");
  giraffe_horn2.classList.add("giraffe-horn2-popup");

  setTimeout(function() {
    searchbar.style.width = "80%";
  }, 600);

  setTimeout(function() {
    giraffe_ear.classList.remove("ear-anim");
    giraffe_ear.classList.add("ear-loop");
    giraffe_horn1.style.top = "20px";
  }, 900);

  setTimeout(function() {
    giraffe_container.classList.remove("giraffe-popup");
    giraffe_head.classList.remove("giraffe-head-popup");
    giraffe_horn2.style.top = "20px";
    giraffe_horn1.classList.remove("giraffe-horn1-popup");
    giraffe_horn2.classList.remove("giraffe-horn2-popup");
    giraffe_horn1.classList.add("horn-loop");
    giraffe_horn2.classList.add("horn-loop");
  }, 1090);
};

function giraffeGoesDown() {
  giraffe_container.classList.add("giraffe-sinks");
  giraffe_head.classList.add("giraffe-head-sinks");
  searchbar.style.width = "80px";

  setTimeout(function() {
    searchbar.style.top = "-100px";
  }, 600);

  setTimeout(function() {
    giraffe_container.style.bottom = "-450px";
    giraffe_container.classList.remove("giraffe-sinks");
    giraffe_head.classList.remove("giraffe-head-sinks");
    giraffe_horn1.style.top = "35px";
    giraffe_horn2.style.top = "35px";
    document.querySelector('#result').style.opacity = "1";
    document.querySelector('#back').style.opacity = "1"
  }, 950);
};

window.addEventListener("resize", function() {
  search_icon.style.width = `${search_icon.offsetHeight}px`;
  // console.log(window.innerHeight);
  // console.log(Math.floor(window.innerHeight / 1.8));
  // giraffe_container.style.transform = `scale(${Math.floor(window.innerHeight / 1.8)})`
})

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    popUp();
  };
});

search_trigger.addEventListener("click", function() {
  giraffeGoesDown();
  codeAddress()
});

document.querySelector('#back').addEventListener("click", function() {
  setTimeout(popUp, 350)
  document.querySelector('#result').style.opacity = "0";
  document.querySelector('#result').style.display = "none";
  document.querySelector('#back').style.opacity = "0";
  document.querySelector('#my-address').value = "";
  document.querySelector('#my-address').focus();
})