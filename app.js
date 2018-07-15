const giraffe_horn1 = document.querySelector('#horn1');
const giraffe_horn2 = document.querySelector('#horn2');
const giraffe_ear = document.querySelector('.giraffe-ear');
const giraffe_head = document.querySelector('.giraffe-head');
const giraffe_body = document.querySelector('.giraffe-body');
const giraffe_container = document.querySelector('.giraffe');
const doc_body = document.querySelector('body');
const search_trigger = document.querySelector('.trigger');
const searchbar = document.querySelector('.searchbar-wrapper');
const search_icon = document.querySelector('.search-icon');
const input_field = document.querySelector('#my-address');
const error_container = document.querySelector('.error_container');
const result_El = document.querySelector('#result');

$('body').css('height', $(window).height() + 'px');

// GIRAFFE POPS UP

let popUp = function() {
  searchbar.style.top = "10vh";
  giraffe_container.classList.add("giraffe-popup");
  giraffe_container.style.bottom = "0px";
  giraffe_head.classList.add("giraffe-head-popup");
  giraffe_ear.classList.add("ear-popup");
  giraffe_horn1.style.top = "35px";
  giraffe_horn2.style.top = "35px";
  giraffe_horn1.classList.add("giraffe-horn1-popup");
  giraffe_horn2.classList.add("giraffe-horn2-popup");

  setTimeout(function() {
    searchbar.style.width = "80%";
  }, 600);

  setTimeout(function() {
    giraffe_ear.classList.add("ear-loop");
    giraffe_horn1.style.top = "18px";
    giraffe_body.style.top = "50px";
  }, 1015);

  setTimeout(function() {
    input_field.focus();
    giraffe_container.classList.remove("giraffe-popup");
    // giraffe_body.classList.remove("giraffe-body-popup");
    giraffe_head.classList.remove("giraffe-head-popup");
    giraffe_horn2.style.top = "18px";
    giraffe_horn1.classList.remove("giraffe-horn1-popup");
    giraffe_horn2.classList.remove("giraffe-horn2-popup");
    giraffe_ear.classList.remove("ear-popup");
    giraffe_horn1.classList.add("horn-loop");
    giraffe_horn2.classList.add("horn-loop");
  }, 1090);
};

// GIRAFFE SINKS DOWN

function giraffeGoesDown() {
  giraffe_container.classList.add("giraffe-sinks");
  giraffe_head.classList.add("giraffe-head-sinks");
  searchbar.style.width = `${search_icon.offsetHeight}px`;

  setTimeout(function() {
    searchbar.style.top = "-100px";
  }, 600);

  setTimeout(function() {
    if (window.innerHeight > 1280) {
      giraffe_container.style.bottom = "-800px";
    } else if (window.innerHeight > 960) {
      giraffe_container.style.bottom = "-600px";
    } else if (window.innerHeight < 960 && window.innerHeight > 600) {
      giraffe_container.style.bottom = "-450px";
    } else {
      giraffe_container.style.bottom = "-400px";
    }
    giraffe_container.classList.remove("giraffe-sinks");
    giraffe_head.classList.remove("giraffe-head-sinks");
    giraffe_horn1.classList.remove("horn-loop");
    giraffe_horn2.classList.remove("horn-loop");
    result_El.style.opacity = "1";
    document.querySelector('#back').style.opacity = "1"
  }, 950);
};

// EVENT LISTENERS

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === "complete") {
    search_icon.style.display = "block";
    popUp();
  };
});

search_trigger.addEventListener("click", function() {
  if (input_field.value !== "") {
    codeAddress()
  }
});

document.querySelector('#back').addEventListener("click", function() {
  setTimeout(popUp, 350)
  result_El.style.opacity = "0";
  result_El.style.display = "none";
  document.querySelector('#back').style.opacity = "0";
  input_field.value = "";
  setTimeout(function() {
    input_field.focus();
  }, 1000)
})