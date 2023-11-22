const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const gallery = $('#gallery')
const listAblumSlide = $('.lobby_listitemalbum')
const rankList = $('.listitem.rank-list')
const listDiscoveryRight = $('.discovery-listitem_right')
const listDiscoveryCenter = $('.discovery-listitem_center')
const listDiscoveryLeft = $('.discovery-listitem_left')
const listBroadcast = $('.broadcast-listitem')
const listALbumchill = $('.albumchill-list')
const Nowplayingsong_thumb = $('.nowplaying__main--left--img img')
const Nowplayingsong_nameSong = $('.nowplaying__main--left--title span')
const Nowplayingsong_nameSinger = $('.nowplaying__main--left--title a')
const audio=$('#audio')
const btnPlay = $('.play')
const btnShowPlaylist=$('.level-item_playlist button')
const modelPlaylist=$('.player-queue')
const app = {
    currentIndex: 0,
    isPlaying: false,
    song: [
        {
            name: 'Kiểu như tâm tình',
            singer: 'Nam Cocain',
            path: '/access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
            image: '/access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',

        },
        {
            name: 'Truy lùng',
            singer: 'Nam Cocain',
            path: '/access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
            image: '/access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg'
        },
        {
            name: 'Lose Control',
            singer: 'Hedley',
            path: '/access/audio/y2mate.com - Lose Control Radio Edit  Hedley抖音TikTok最红的网络歌曲抖音.mp3',
            image: '/access/image/img square/artworks-000629761276-nbw3ci-t500x500 - Copy.jpg '
        },
        {
            name: 'Honesty',
            singer: 'Pink Sweat ',
            path: '/access/audio/y2mate.com - VietsubLyrics Pink Sweat  Honesty  ft Jessie Reyez Remix.mp3',
            image: '/access/image/img square/95eea0506460632bc18e4c3dad6652ca.1000x1000x1.png'
        },
        {
            name: 'Honesty',
            singer: 'Pink Sweat ',
            path: '/access/audio/y2mate.com - VietsubLyrics Pink Sweat  Honesty  ft Jessie Reyez Remix.mp3',
            image: '/access/image/img square/95eea0506460632bc18e4c3dad6652ca.1000x1000x1.png'
        },
        {
            name: 'Honesty',
            singer: 'Pink Sweat ',
            path: '/access/audio/y2mate.com - VietsubLyrics Pink Sweat  Honesty  ft Jessie Reyez Remix.mp3',
            image: '/access/image/img square/95eea0506460632bc18e4c3dad6652ca.1000x1000x1.png'
        },

    ],
    album: [
        {
            singer: 'Nam Cocain',
            image: '/access/image/img retangle/013c60ba209da55605a97d3ffb47a062.jpg'
        },
        {
            singer: 'Nam Cocain',
            image: '/access/image/img retangle/14a6bc4408e442dc2a892e1d4a189887.jpg'
        },
        {
            singer: 'Nam Cocain',
            image: '/access/image/img retangle/5b7f86734f0247aa188769c3ed6e22d5.jpg'
        },
        {
            singer: 'Nam Cocain',
            image: '/access/image/img retangle/80405e75fdb7f92d373b96ae3edae932.jpg'
        },
        {
            singer: 'Nam Cocain',
            image: '/access/image/img retangle/maxresdefault.jpg'
        },
        {
            singer: 'Nam Cocain',
            image: '/access/image/img retangle/maxresdefault.jpg'
        },
    ],
    render: function () {
        const htmlGalleryItem = this.song.map(song => {
            return `
            <a href="#">
                <figure>
                    <img src="${song.image}"
                        alt="Clouds in shades of blue and gold at sunrise. "
                        title="Photo by Łukasz Łada for Unsplash">
                    <figcaption>${song.name}</figcaption>
                </figure>
            </a>
            `
        })
        const htmlLobbyItem = this.album.map(album => {
            return `                 
                <a href="#" class="album-item album-item0">
                    <div class="album-item_img ">
                        <img src="${album.image}"
                            alt="">
                    </div>
                </a>                    
                `
        })

        const htmlRankItem = this.song.map((song, index) => {
            return `
                <div class="item rank-item "data-index=${index}>
                    <span class="rank-item_rating">${index + 1}</span>
                    <div class="item_img rank-item_img">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="item_profile rank-item_profile">
                        <h4>${song.name}</h4>
                        <a href="">${song.singer}</a>                        
                    </div>
                    <audio class="audio" src="${song.path}"></audio>
                </div>
            `
        })
        const htmlDiscoveryItem = this.song.map(song => {
            return `         
                <div  class="item discovery-item">               
                        <div class="item_img discovery-item_img">
                            <img src="${song.image}"
                                alt="">
                        </div>
                        <div class="item_profile discovery-item_profile">
                            <h4>${song.name}</h4>
                            <a href="">${song.singer}</a>
                        </div>          
                </div>          
          `
        })
        const htmlBroadcastItem = this.song.map(song => {
            return `       
            <div class="broadcast-item">
                <a href="">
                    <div class="broadcast-item_img">
                        <img src="${song.image}" alt="">
                    </div>
                    <div class="broadcast-item_frofile">
                        <div class="profile-img">
                            <img src="${song.image}" alt="">
                        </div>
                        <div class="profile-details">
                            <span>${song.singer}</span>
                        </div>
                     </div>
                </a>
            </div>           
          `
        })
        const htmlALbumchillItem = this.album.map(album => {
            return `
            <a href="#">
                <div class="albumchill-item">
                    <div class="albumchill-item_img">
                        <img src="${album.image}"
                            alt="">
                    </div>
                    <div class="albumchill-item_profile">
                        <p href=""> ${album.singer}</p>
                    </div>
                </div>
            </a>
          `
        })
        listAblumSlide.innerHTML = htmlLobbyItem.join('')
        gallery.innerHTML = htmlGalleryItem.join('')
        rankList.insertAdjacentHTML('afterbegin', htmlRankItem.join(''))
        listDiscoveryRight.innerHTML = htmlDiscoveryItem.join('')
        listDiscoveryCenter.innerHTML = htmlDiscoveryItem.join('')
        listDiscoveryLeft.innerHTML = htmlDiscoveryItem.join('')
        listBroadcast.innerHTML = htmlBroadcastItem.join('')
        listALbumchill.innerHTML = htmlALbumchillItem.join('')
    },   
    handleEvents: function () {
        const _this = this      
        rankList.onclick = function (e) {
            let RankItem_Node = e.target.closest('.rank-item')
            if (RankItem_Node) {
                app.currentIndex = RankItem_Node.dataset.index                   
                _this.loadCurrentSong()
                audio.play()                                     
            }                     
        }                                                                                                                                                                               
        
        //xử lí play/pause
        btnPlay.onclick = function () {      
            if (_this.isPlaying ) {
                audio.pause()                            
            }
            else {
                audio.play()                               
            }
        }
        // xử lí khi nhạc đang play
        audio.onplay = function () {
            _this.isPlaying = true
            btnPlay.innerHTML='<ion-icon name="pause-circle-outline"></ion-icon>'
        }
        //Xử lý khi nhạc bị pause
        audio.onpause = function () {
            _this.isPlaying = false
            btnPlay.innerHTML='<ion-icon name="play-circle-outline"></ion-icon>'
        }

        btnShowPlaylist.addEventListener("click",function(){
            modelPlaylist.style.display="block";
        })
    },
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.song[this.currentIndex]
            }
        })
    },

    loadCurrentSong: function () {
        Nowplayingsong_thumb.src = this.currentSong.image
        Nowplayingsong_nameSong.textContent = this.currentSong.name
        Nowplayingsong_nameSinger.textContent = this.currentSong.singer
        audio.src=this.currentSong.path
    },
  
    start: function () {
        //Render lại playlist 
        this.render()

        this.handleEvents()
                

        // Định nghĩa các thuộc tính cho object
        this.defineProperties()

        this.loadCurrentSong()

       

    }
}
app.start()
// var main = document.querySelector("main");
// function loadPage(pageName) {
//     fetch(pageName + '.html') // Gửi yêu cầu HTTP GET để lấy nội dung của trang theo đường dẫn pageName
//         .then(response => response.text()) // Chuyển đổi phản hồi thành văn bản
//         .then(html => {
//             document.addEventListener('DOMContentLoaded', function () {
//                 app.updateElementst();
//                 app.start()
//             });
//             main.innerHTML = html; // Cập nhật nội dung của phần main-content
//             // Thay đổi URL mà không làm tải lại trang, để thể hiện đường dẫn mới trong thanh địa chỉ
//             // history.pushState({}, '', '/' + pageName);
//         })
//         .catch(error => console.error('Fetch error:', error)); // Xử lý lỗi trong quá trình tải trang
// }
