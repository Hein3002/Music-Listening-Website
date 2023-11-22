// (function () {
// 	window.onload = () => {
// 		const obj = document.querySelectorAll("#gallery a figure");
// 		const time = 10000;
// 		function animStart() {
// 			if (obj.classList.contains("active") == false) {
// 				obj.classList.add("active");
// 				setTimeout(() => {
// 					animEnd();
// 				}, time);
// 			}
// 		}
// 		function animEnd() {
// 			obj.classList.remove("active");
// 			obj.offsetWidth;
// 		}
// 		document.addEventListener("scroll", function () {
// 			// scroll or scrollend
// 			animStart();
// 		});
// 		window.addEventListener("resize", animStart);
// 		animStart();
// 	};
// })();
function nextAlbumb() {
    let lists = document.querySelectorAll('.album-item');
    document.querySelector('.lobby_listitemalbum').appendChild(lists[0]);
}

function backAlbumb() {
    let lists = document.querySelectorAll('.album-item');
    document.querySelector('.lobby_listitemalbum').prepend(lists[lists.length - 1]);
}

document.querySelector('.lobby_buttom-next .next').onclick = nextAlbumb;
document.querySelector('.lobby_buttom-back .back').onclick = backAlbumb;

document.addEventListener("DOMContentLoaded", function() {
    setInterval(backAlbumb, 6000);
});

var listImg = document.querySelectorAll(".broadcast-item");
var listClass = ['gallery__item--first',
'gallery__item--selectbefor', 
'gallery__item--last', 
'gallery__item--previous',
'gallery__item--selectafter', 
'gallery__item--next'
];
var currentIndex = 0;

function updateClasses() {
  for (let i = 0; i < listImg.length; i++) {
    listImg[i].classList.remove(...listClass); 
    listImg[i].classList.add(listClass[currentIndex]);
    currentIndex++;
    if (currentIndex >= listClass.length) {
      currentIndex = 0;
    }
  }
  around(listClass);
}

function around(listClass) {
    lastItem=listClass[listClass.length - 1];
  for (let i = listImg.length - 1; i > 0; i--) {
    listClass[i] = listClass[i - 1];
  }
  listClass[0] = lastItem;
}
document.addEventListener("DOMContentLoaded", function() {
    updateClasses();
    setInterval(updateClasses, 6000); 
  });

var album_detial=document.querySelector(".album-detail");
var home=document.querySelector(".home-page-content");
var music_detail =document.querySelector(".music-deltail");
var main = document.querySelector("main");
var item1=document.querySelector(".main-item1");
var item2 =document.querySelector(".main-item2");
item1.addEventListener("click", function () {  
  home.style.display="block";
  album_detial.style.display="none";
  music_detail_detial.style.display="none";

});
item2.addEventListener("click", function () {  
  home.style.display="none";
  album_detial.style.display="block";
  music_detail.style.display="none";
});



const btnPlayVisulazer =document.querySelector('.music-detail_left_bottom .music-profile button');
const canvas = document.querySelector('.music-detail_right_visualazer canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const ctx=canvas.getContext('2d');
let audioSoure;
let analyser;
btnPlayVisulazer.addEventListener('click',function(){
    const audio =document.querySelector('.music-detail_right_visualazer canvas audio');  
    const audioCtx=new (window.AudioContext || window.webkitAudioContext)();  
    audio.play();
    audioSoure=audioCtx.createMediaElementSource(audio);
    analyser=audioCtx.createAnalyser();
    audioSoure.connect(analyser);
    analyser.connect(audioCtx.destination);
    analyser.fftSize=256;
    const docaomoisongnhac=analyser.frequencyBinCount;//chua một nửa số ffsize dụng để chứa độ cao của tất cả các thanh nhạc
    const mangdocao=new Uint8Array(docaomoisongnhac);//chuyển các giá trị lấy dc từ docaomoisongnhac thành kiểu dữ liệu unit8

    const dorong1songnhac=canvas.width/2/docaomoisongnhac;
    let docao1songnhac;
    let x;
    function animate()
    {   
        x=0;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        analyser.getByteFrequencyData(mangdocao);
        drawVisualazerX(x,mangdocao,docaomoisongnhac,docao1songnhac,dorong1songnhac);            
        requestAnimationFrame(animate);       
    }
    animate();

    function drawVisualazerX(x,mangdocao,docaomoisongnhac,docao1songnhac,dorong1songnhac){
     for(let i=0;i<docaomoisongnhac;i++){
      docao1songnhac=mangdocao[i]/1.5;
      const red =50+(i*2);
      const green = 0;
      const blue =110+(i*2) ;
      ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';    
      if(docao1songnhac>120)      
      {
        docao1songnhac=docao1songnhac+10
      }  
      else{
        docao1songnhac=docao1songnhac-1
      }
      ctx.fillRect(canvas.width/2 - x,canvas.height/2-docao1songnhac,dorong1songnhac,docao1songnhac);
      ctx.fillRect(canvas.width/2 - x,canvas.height/2,dorong1songnhac,docao1songnhac);
      x+=(2*dorong1songnhac);
      console.log(docao1songnhac)
    }
     for(let i=0;i<docaomoisongnhac;i++){
      docao1songnhac=mangdocao[i]/1.5;
      const red = 50+(i*2);
      const green = 0 ;
      const blue =  110+(i*2); 
      ctx.fillStyle = 'rgb(' + red + ',' + green + ',' + blue + ')';   
      if(docao1songnhac>120)      
      {
        docao1songnhac=docao1songnhac+10
      }   
      else{
        docao1songnhac=docao1songnhac-1
      }        
      ctx.fillRect(x-canvas.width/2,canvas.height/2-docao1songnhac,dorong1songnhac,docao1songnhac);
      ctx.fillRect(x-canvas.width/2,canvas.height/2,dorong1songnhac,docao1songnhac);
      x+=(2*dorong1songnhac);      
  }      
  } 
})