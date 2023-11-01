(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();
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
var main = document.querySelector("main");
var item1=document.querySelector(".main-item1");
var item2 =document.querySelector(".main-item2");
item1.addEventListener("click", function () {  
  home.style.display="block";
  album_detial.style.display="none";
});
item2.addEventListener("click", function () {  
  home.style.display="none";
  album_detial.style.display="block";
});
