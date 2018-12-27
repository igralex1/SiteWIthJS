
// Меню
var a = document.querySelectorAll('ul > li > a');

for(var i = 0; i < a.length ; i++){
    a[i].onmouseover = function(){
        this.style.fontSize = "20px";
        this.style.color = "#ffeb3b";
        this.style.transition = "0.4s";
     }
     a[i].onmouseout = function(){
         this.style.fontSize = "14px";
         this.style.color = '#fff';
     }
}
// Печатающийся текст в прямом направлении 
var titles = document.querySelector(".titles__first");
var titlesFirst = document.querySelector(".titles__text");
var textFirstCont = titlesFirst.textContent;
titlesFirst.style.display = "none";


for (var i = 0; i < textFirstCont.length; i++) {
    (function(i) {
      setTimeout(function() {
        // Created textNode to append
        var texts = document.createTextNode(textFirstCont[i]);
        var span = document.createElement('span');
        span.style.font = "40px Arial Regular"
        span.appendChild(texts);
        titles.appendChild(span);
      }, 75 * i);
    }(i));
  };

// Появляющийся текст
function fadeIn(h1, time) {
    //Текст невидим
    h1.style.opacity = 0;
    //Время начала загрузки страницы
    var last = +new Date();
    
    var tick = function() {
      h1.style.opacity = +h1.style.opacity + 
      (new Date() - last) / time;
      last = +new Date();
      
      if (+h1.style.opacity < 1) {
        (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
      }
    };
    tick();
  }
var h1 = document.querySelector("h1");
fadeIn(h1, 4000);

// Выплывающий блоки
// левые
// правые

var serv = document.getElementById("services");
var portf = document.getElementById("portfolio");


var last_known_scroll_position = 0;
var tickingOne = false;
var tickingTwo = false;


window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;
  
  if (!tickingOne) {
    window.requestAnimationFrame(function() {
      if (this.last_known_scroll_position >= 30){
        waveLeft(serv);
        tickingOne = true;
      }
    });
  }
  
  if(!tickingTwo){
    window.requestAnimationFrame(function(){
          if (this.last_known_scroll_position >= 360){
          waveRight(portf);
        tickingTwo = true;
         }
    })
}
  


});

// Выплывание блока слева
function waveLeft(block){
    var blockInFunc = block;
    var start = Date.now();
    var timer = setInterval(function(){
      var timePassed = Date.now() - start;
        if (timePassed >= 1000) {
          clearInterval(timer);
          return;
        }
       blockInFunc.style.left = timePassed - 1000 + "px";
     },10);
}

// Выплывание блока справа
function waveRight(block){
  var blockInFunc = block;
  var start = Date.now();
  var timer = setInterval(function(){
    var timePassed = Date.now() - start;
      if (timePassed >= 1000) {
        clearInterval(timer);
        return;
      }
     blockInFunc.style.right = timePassed - 1000 + "px";
   },10);
}
// Появляющийся блок








// Задание на завтра
// 1. Модальное окно при клике
// 2. Кнопку на css красиво сделать
// http://nisnom.com/knopki-dlya-sajta-s-effektami-i-animatsiej-html-css-i-javascript-jquery/
//
// 5. Сделаьб footer красиво
// 6. Сверстай сайт еще один посложнеее

