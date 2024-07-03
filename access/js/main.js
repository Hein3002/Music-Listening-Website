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
var play_queue=$('.level-item_playlist');
var mediaFullElements = $$('.media_full');
// -------------------song------------------------
const Nowplayingsong_thumb = $('.nowplaying__main--left--img img')
const Nowplayingsong_nameSong = $('.nowplaying__main--left--title span')
const Nowplayingsong_nameSinger = $('.nowplaying__main--left--title a')
const audio=$('#audio')
const btnShowPlaylist=$('.level-item_playlist button')
const modelPlaylist=$('.player-queue')

const progress=$('#progress')
const progresRank=$('.progress-Rank')
const prevBtn=$('.backSong')
const nextBtn=$('.fonward')
const btnPlay = $('.play')
const btnRepeat= $('.again')
const btnRandom= $('.shuffle')
const RankAcive_thumb=$('.rank-active_thumb img')
const progressVolum=$('.nowplaying_main-rihgt-item .level-item_volum button input')
const inputSearch=$('.header-left_search input')
// --------------------album---------------------
const Album_Thumb=$('.album-thumb img')
const Album_Name=$('.album-profile .profile_title')
const Album_DayUpLoad=$('.album-profile .updateday')
const Album_Artists=$('.album-profile .artists')
const Album_NumberOfLike=$('.album-profile .like')
const listNhacInAlbum=$('.album-content .media-playlist')
listNhacInCurrentAlbum=[]
// ------------------------artist----------------------
listNhacCuaNgheSi=[]
// ------------------songdetail----------------------
const MusicDetial_thumb =$('.music-top_thumb img')
const MusicDetial_name =$('.music-detail_right_top .music-name')
const MusicDetial_singer =$('.music-detail_right_top .music-artists span:nth-child(2)')
const MusicDetial_Artists_thumb=$('.artist-thumb img')
const MusicDetial_Artists_name=$('.artist-item_right .artist-profile span:nth-child(2)')
const SongInterRest=$('.music-detail_interest_content .media-playlist')
// ----------------------songqueue------------------
const add_favorites_list=$('.level-item_song-queue item_song-queue ion-icon:nth-child(1)')
const listMedia_OnPlay=$('.list-item_media-active')
const listMedia_NotOnPlay=$('.list-item_media-not-active')
// --------------------------library------------------------------\
const listSongInLibraryHTML=$('.bottom-section-song_library .media-playlist')
SongAppendLibrary=localStorage.getItem('SongAppendLibrary') ?JSON.parse(localStorage.getItem('SongAppendLibrary')):[]
listNhacYeuThich=[]

const app = {
    currentIndex: 0,
    currentIndexAlbum:0,
    isPlaying: false,
    isRandom:false,
    isRepeat:false,
    song: [
        {
            idNhac:0,
            name: 'Kiểu như tâm tình',
            singer: 'Nam Cocain',
            path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
            image: 'access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',
            ngayPhatHanh:'30/12/2023',
            theLoai:'EDM',
            luotNghe:0

        },
        {
            idNhac:1,
            name: 'Truy lùng',
            singer: 'Nam Cocain',
            path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
            image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
            ngayPhatHanh:'21/12/2023',
            theLoai:'EDM',
            luotNghe:0,
        },
        {
            idNhac:2,
            name: 'Tương Tư',
            singer: 'CLOW',
            path: 'access/audio/y2mate.com - TƯƠNG TƯ  CLOW X FLEPY ft DARKC  Official Video.mp3',
            image: 'access/image/img square/17b16b32dfe8046bd341b7a7b4b6292b.jpg',
            ngayPhatHanh:'1/12/2023',
            theLoai:'V-POP',
            luotNghe:0
        },
        {
            idNhac:3,
            name: 'Honesty',
            singer: 'Pink Sweat',
            path: 'access/audio/y2mate.com - VietsubLyrics Pink Sweat  Honesty  ft Jessie Reyez Remix.mp3',
            image: 'access/image/img square/95eea0506460632bc18e4c3dad6652ca.1000x1000x1.png',
            ngayPhatHanh:'11/12/2023',
            theLoai:'EDM',
            luotNghe:0
        },
        {
            idNhac:4,
            name: 'Quan Trọng Là Tâm Hồn',
            singer: 'Nam Cocain',
            path: 'access/audio/y2mate.com - NAMLEE FT 1NG  QUAN TRỌNG LÀ TÂM HỒN  PROD MEMORIUM .mp3',
            image: 'access/image/img square/411b231e50a4f2b84179cd3aee5c82d6.jpg',
            ngayPhatHanh:'30/12/2023',
            theLoai:'EDM',
            luotNghe:0
        },
        {
            idNhac:5,
            name: 'All I Want',
            singer: 'Olivia Rodrigo',
            path: 'access/audio/y2mate.com - Olivia Rodrigo  All I Want Official Video.mp3',
            image: 'access/image/img square/Olivia_Rodrigo_-_All_I_Want.png',
            ngayPhatHanh:'31/12/2023',
            theLoai:'EDM',
            luotNghe:0
        },
        {
            idNhac:6,
            name: 'Over',
            singer: 'Khôi Vũ',
            path: 'access/audio/y2mate.com - OVER  KHOI VU  Cover Khởi Vy.mp3',
            image: 'access/image/img square/6c735c4f45ba67dfa55dfdc4bfcf8683.jpg',
            ngayPhatHanh:'31/12/2023',
            theLoai:'EDM',
            luotNghe:0
        },
        {
            idNhac:7,
            name: 'Bạn Của Tao',
            singer: 'YoungH x Binz x SO x Pjpo',
            path: 'access/audio/y2mate.com - BẠN CỦA TAO  YoungH x Binz x SO x Pjpo  2015  Video Lyrics.mp3',
            image: 'access/image/img square/32a35f4d26ee56366397c09953f6c269.jpg',
            ngayPhatHanh:'31/12/2023',
            theLoai:'EDM',
            luotNghe:0
        },
        {
            idNhac:8,
            name: 'I lost this lover',
            singer: 'AMEE',
            path: 'access/audio/y2mate.com - Lyrics anh đánh rơi người yêu này  Andiez ft AMEE English Cover Ver By Lam Lam.mp3',
            image: 'access/image/img square/ab6765630000ba8af62365dddd0e487e3f1e6d4b.jpg',
            ngayPhatHanh:'31/12/2023',
            theLoai:'EDM',
            luotNghe:0
        },

    ],
    album: [
        {
            idAlbum:0,
            nameAlbum:'99%',
            artists: 'Nam Cocain',
            nhacInAlbum:[
                {
                    idNhac:0,
                    name: 'Kiểu như tâm tình',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
                    image: 'access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',
                    thoiLuong:'04:30'
        
                },
                {
                    idNhac:1,
                    name: 'Truy lùng',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
                    image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:2,
                    name: 'Tương Tư',
                    singer: 'CLOW X FLEPY',
                    path: 'access/audio/y2mate.com - TƯƠNG TƯ  CLOW X FLEPY ft DARKC  Official Video.mp3',
                    image: 'access/image/img square/17b16b32dfe8046bd341b7a7b4b6292b.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:3,
                    name: 'Honesty',
                    singer: 'Pink Sweat ',
                    path: 'access/audio/y2mate.com - VietsubLyrics Pink Sweat  Honesty  ft Jessie Reyez Remix.mp3',
                    image: 'access/image/img square/95eea0506460632bc18e4c3dad6652ca.1000x1000x1.png',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:4,
                    name: 'Quan Trọng Là Tâm Hồn',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMLEE FT 1NG  QUAN TRỌNG LÀ TÂM HỒN  PROD MEMORIUM .mp3',
                    image: 'access/image/img square/411b231e50a4f2b84179cd3aee5c82d6.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:5,
                    name: 'Honesty',
                    singer: 'Pink Sweat ',
                    path: 'access/audio/y2mate.com - Olivia Rodrigo  All I Want Official Video.mp3',
                    image: 'access/image/img square/Olivia_Rodrigo_-_All_I_Want.png',
                    thoiLuong:'04:30'
                },
            ],
            timeUpLoad:'2-4-2023',
            image: 'access/image/img retangle/013c60ba209da55605a97d3ffb47a062.jpg',
            like: 10
        },
        {
            idAlbum:1,
            nameAlbum:'99%',
            artists: 'Nam Cocain',          
            nhacInAlbum:[
                {
                    idNhac:0,
                    name: 'Lệ Lưu Ly',
                    singer: 'Vũ Phụng Tiên',
                    path: 'access/audio/y2mate.com - LỆ LƯU LY  VŨ PHỤNG TIÊN X DT TẬP RAP X DRUM7  OFFICIAL LYRIC VIDEO.mp3',
                    image: 'access/image/img square/ab67616d00001e02e75f76ad00f94ccc944a8bb7.jpg',
                    thoiLuong:'04:30'
        
                },
                {
                    idNhac:1,
                    name: 'Truy lùng',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
                    image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:2,
                    name: 'Tương Tư',
                    singer: 'CLOW X FLEPY',
                    path: 'access/audio/y2mate.com - TƯƠNG TƯ  CLOW X FLEPY ft DARKC  Official Video.mp3',
                    image: 'access/image/img square/17b16b32dfe8046bd341b7a7b4b6292b.jpg',
                    thoiLuong:'04:30'
                },
               
            ],
            image: 'access/image/img retangle/14a6bc4408e442dc2a892e1d4a189887.jpg',
            timeUpLoad:'2-4-2023',
            like:100
        },
        {
            idAlbum:2,      
            nameAlbum:'99%',
            artists: 'Nam Cocain',
            nhacInAlbum:[
                {
                    idNhac:0,
                    name: 'Kiểu như tâm tình',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
                    image: 'access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',
                    thoiLuong:'04:30'
        
                },
                {
                    idNhac:1,
                    name: 'Truy lùng',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
                    image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
                    thoiLuong:'04:30'
                },
               
                {
                    idNhac:2,
                    name: 'Quan Trọng Là Tâm Hồn',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMLEE FT 1NG  QUAN TRỌNG LÀ TÂM HỒN  PROD MEMORIUM .mp3',
                    image: 'access/image/img square/411b231e50a4f2b84179cd3aee5c82d6.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:3,
                    name: 'All I Want',
                    singer: 'Olivia Rodrigo',
                    path: 'access/audio/y2mate.com - Olivia Rodrigo  All I Want Official Video.mp3',
                    image: 'access/image/img square/Olivia_Rodrigo_-_All_I_Want.png',
                    thoiLuong:'04:30'
                },
            ],
            image: 'access/image/img retangle/5b7f86734f0247aa188769c3ed6e22d5.jpg',
            timeUpLoad:'2-4-2023',
            like:100
        },
        {
            idAlbum:3,
            nameAlbum:'99%',
            artists: 'Nam Cocain',
            nhacInAlbum:[
                {
                    idNhac:0,
                    name: 'Kiểu như tâm tình',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
                    image: 'access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',
                    thoiLuong:'04:30'
        
                },
                {
                    idNhac:1,
                    name: 'Truy lùng',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
                    image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:2,
                    name: 'Tương Tư',
                    singer: 'CLOW X FLEPY',
                    path: 'access/audio/y2mate.com - TƯƠNG TƯ  CLOW X FLEPY ft DARKC  Official Video.mp3',
                    image: 'access/image/img square/17b16b32dfe8046bd341b7a7b4b6292b.jpg',
                    thoiLuong:'04:30'
                },
               
                {
                    idNhac:5,
                    name: 'All I Want',
                    singer: 'Olivia Rodrigo',
                    path: 'access/audio/y2mate.com - Olivia Rodrigo  All I Want Official Video.mp3',
                    image: 'access/image/img square/Olivia_Rodrigo_-_All_I_Want.png',
                    thoiLuong:'04:30'
                },
            ],
            image: 'access/image/img retangle/80405e75fdb7f92d373b96ae3edae932.jpg',
            timeUpLoad:'2-4-2023',
            like:100
        },
        {
            idAlbum:4,
            nameAlbum:'99%',
            artists: 'Nam Cocain',
            nhacInAlbum:[
                {
                    idNhac:0,
                    name: 'Kiểu như tâm tình',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
                    image: 'access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',
                    thoiLuong:'04:30'
        
                },
                {
                    idNhac:1,
                    name: 'Truy lùng',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
                    image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:2,
                    name: 'Tương Tư',
                    singer: 'CLOW X FLEPY',
                    path: 'access/audio/y2mate.com - TƯƠNG TƯ  CLOW X FLEPY ft DARKC  Official Video.mp3',
                    image: 'access/image/img square/17b16b32dfe8046bd341b7a7b4b6292b.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:3,
                    name: 'Honesty',
                    singer: 'Pink Sweat ',
                    path: 'access/audio/y2mate.com - VietsubLyrics Pink Sweat  Honesty  ft Jessie Reyez Remix.mp3',
                    image: 'access/image/img square/95eea0506460632bc18e4c3dad6652ca.1000x1000x1.png',
                    thoiLuong:'04:30'
                },               
            ],
            image: 'access/image/img retangle/505f9ed511c52a5a5986d0e3ebaa6f06.jpg',
            timeUpLoad:'2-4-2023',
            like:100
        },
        {
            idAlbum:5,
            nameAlbum:'99%',
            artists: 'Nam Cocain',
            nhacInAlbum:[
                {
                    idNhac:0,
                    name: 'Kiểu như tâm tình',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  KIỂU NHƯ TÂM TÌNH  PROD BOYZED   vy gieo đấy .mp3',
                    image: 'access/image/img square/5bbd37df58454293f7e92b56521d2a06.jpg',
                    thoiLuong:'04:30'
        
                },
                {
                    idNhac:1,
                    name: 'Truy lùng',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMCOCAIN aka NamLee  TRUY LÙNG  vy gieo đấy .mp3',
                    image: 'access/image/img square/artworks-mCqO00azIx3CGLKF-qIqC8A-t500x500.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:2,
                    name: 'Tương Tư',
                    singer: 'CLOW X FLEPY',
                    path: 'access/audio/y2mate.com - TƯƠNG TƯ  CLOW X FLEPY ft DARKC  Official Video.mp3',
                    image: 'access/image/img square/17b16b32dfe8046bd341b7a7b4b6292b.jpg',
                    thoiLuong:'04:30'
                },             
                {
                    idNhac:3,
                    name: 'Quan Trọng Là Tâm Hồn',
                    singer: 'Nam Cocain',
                    path: 'access/audio/y2mate.com - NAMLEE FT 1NG  QUAN TRỌNG LÀ TÂM HỒN  PROD MEMORIUM .mp3',
                    image: 'access/image/img square/411b231e50a4f2b84179cd3aee5c82d6.jpg',
                    thoiLuong:'04:30'
                },
                {
                    idNhac:4,
                    name: 'All I Want',
                    singer: 'Olivia Rodrigo',
                    path: 'access/audio/y2mate.com - Olivia Rodrigo  All I Want Official Video.mp3',
                    image: 'access/image/img square/Olivia_Rodrigo_-_All_I_Want.png',
                    thoiLuong:'04:30'
                },
            ],
            image: 'access/image/img retangle/ac10d5465dc16693e27c8dd63ae3e103.jpg',
            timeUpLoad:'2-4-2023',
            like:100
        },
    ],
    artist:[
        {
            idNgheSi:0,
            tenNgheSi:'Nam CoCain',
            imageNS:'access/image/img artist/28582b5e856d34f699b86d807fbe993d.jpg',
            flower:9.9999
        },
        {
            idNgheSi:1,
            tenNgheSi:'Pink Sweat',
            imageNS:'access/image/img artist/0bfeddcc803d504fd883ed2af6ab2866.jpg',
            flower:0            
        },
        {
            idNgheSi:2,
            tenNgheSi:'Khôi Vũ',
            imageNS:'access/image/img artist/8d3a0c7183c7e4e7b4d7fb8d5cba2f5f.jpg',
            flower:0            
        },
        {
            idNgheSi:3,
            tenNgheSi:'CLOW',
            imageNS:'access/image/img artist/5d215c86eff295a8e1093b61efa339ac.jpg',
            flower:0            
        },
        {
            idNgheSi:4,
            tenNgheSi:'BinZ',
            imageNS:'access/image/img artist/04aed9e81df90a6191d6e223b6d6b59a.jpg',
            flower:0          
        },
        {
            idNgheSi:5,
            tenNgheSi:'AMEE',
            imageNS:'access/image/img artist/2fda5f39b5adca3bad9c4bfc6d586f68.jpg',
            flower:0            
        },
        {
            idNgheSi:6,
            tenNgheSi:'Vũ Phụng Tiên',
            imageNS:'access/image/img artist/68b507635ac3e6e724f29f73b10f45c4.jpg',
            flower:0            
        }
    ],
    render: function () {
        const htmlGalleryItem = this.album.map((album)=> {
            return `
            <a href="#">
                <figure onclick="albumdetial()" data-index=${album.idAlbum}>
                    <img src="${album.image}"
                        alt="Clouds in shades of blue and gold at sunrise. "
                        title="Photo by Łukasz Łada for Unsplash">
                    <figcaption>${album.nameAlbum}</figcaption>
                </figure>
            </a>
            `
        })
        const htmlLobbyItem = this.album.map((album) => {
            return `                 
                <div   class="album-item">
                    <div onclick="albumdetial()" class="album-item_img"data-index=${album.idAlbum}>
                        <img src="${album.image}"
                            alt="">
                    </div>
                </div>                    
                `
        })

        const htmlRankItem = this.song.map((song, index) => {
            if(index<5){
                return `                        
                <div ${index==this.currentIndex?' style="background: rebeccapurple;"':''}  class="item rank-item "data-index=${song.idNhac} >
                    <span class="rank-item_rating">${index + 1}</span>
                    <div class="item_img rank-item_img">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="item_profile rank-item_profile">
                        <h4>${song.name}</h4>
                        <a href="#"onclick="artistdetail()">${song.singer}</a>                        
                    </div>
                    <audio class="audio" src="${song.path}"></audio>
                </div>
            `
            }
           
        })
        const htmlDiscoveryItem = this.song.map((song) => {
            if(this.tinhSoNgayTrongMang(song.ngayPhatHanh)<3)
            {               
                return `         
                    <div  class="item discovery-item"data-index=${song.idNhac}>               
                            <div class="item_img discovery-item_img">
                                <img src="${song.image}"
                                    alt="">
                            </div>
                            <div class="item_profile discovery-item_profile">
                                <h4>${song.name}</h4>
                                <a href="#"onclick="artistdetail()">${song.singer}</a>
                            </div>          
                    </div>          
              `
            }
           
        })
        const htmlBroadcastItem = this.album.map((album)=> {
            return `       
            <div onclick="albumdetial()" class="broadcast-item"data-index=${album.idAlbum}>                
                    <div class="broadcast-item_img">
                        <img src="${album.image}" alt="">
                    </div>
                    <div class="broadcast-item_frofile">
                        <div class="profile-img">
                            <img src="${album.image}" alt="">
                        </div>
                        <div class="profile-details">
                            <span>${album.artists}</span>
                        </div>
                     </div>            
            </div>           
          `
        })
        const htmlALbumchillItem = this.album.map((album) => {
            return `
           
                <div onclick="albumdetial()" class="albumchill-item"data-index=${album.idAlbum} >
                    <div class="albumchill-item_img">
                        <img src="${album.image}"
                            alt="">
                    </div>
                    <div class="albumchill-item_profile">
                        <p href=""> ${album.artists}</p>
                    </div>
                </div>            
          `
        })
        const htmlSonPlayList= this.song.map((song,index)=>{
            return index<=this.currentIndex?`
            <div class="media_full${index==this.currentIndex?' is-active':''}">
            <div class="media ">
                <div class="media-left">
                    <div class="media-left_thumb">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="media-left_content">
                        <div class="media-left_content_title">
                            <span>${song.name}</span>
                        </div>
                        <div class="media-left_content_artits">
                            <a>${song.singer}</a>                                                      
                        </div>
                    </div>
                </div>
                <div class="media-right">
                    <div class="level-item_song-queue">
                        <div class="item_song-queue ">
                                <ion-icon name="heart-outline" class="love"></ion-icon>
                            </div>
                            <div class="item_song-queue ">
                                <ion-icon name="ellipsis-horizontal-outline" class="more"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
            `:''            
        })
        $('.list-item_media-active').innerHTML=htmlSonPlayList.join('')
        listAblumSlide.innerHTML = htmlLobbyItem.join('')
        gallery.innerHTML = htmlGalleryItem.join('')        
        rankList.innerHTML= htmlRankItem.join('');
        listDiscoveryRight.innerHTML = htmlDiscoveryItem.join('')
        listDiscoveryCenter.innerHTML = htmlDiscoveryItem.join('')
        listDiscoveryLeft.innerHTML = htmlDiscoveryItem.join('')
        listBroadcast.innerHTML = htmlBroadcastItem.join('')
        listALbumchill.innerHTML = htmlALbumchillItem.join('')
    },  
    renderRank:function(){
        const htmlRankItem = this.song.map((song, index) => {
            if(index<5){
                return `            
                <div ${index==this.currentIndex?' style="background: rebeccapurple;"':''}  class="item rank-item "data-index=${song.idNhac} >
                    <span class="rank-item_rating">${index + 1}</span>
                    <div class="item_img rank-item_img">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="item_profile rank-item_profile">
                        <h4>${song.name}</h4>
                        <a href="#"onclick="artistdetail()">${song.singer}</a>                        
                    </div>
                    <audio class="audio" src="${song.path}"></audio>
                </div>
            `
            }
           
        })
        rankList.innerHTML=('afterbegin', htmlRankItem.join(''))
    },
    renderAbum:  function(){       
        const htmlAlbumDetailSong=listNhacInCurrentAlbum.map((listNhacInCurrentAlbum)=>{
            return`
                <div class="media-playlist_item" data-index=${listNhacInCurrentAlbum.idNhac}>
                    <div class="media-content_left">
                        <div class="media-playlist_checkbox">
                            <label class="checkbox">
                                <input type="checkbox" name="" id="">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="song-icon">
                            <ion-icon name="musical-notes-outline"></ion-icon>
                        </div>
                        <div class="song-thumb">
                            <img src="${listNhacInCurrentAlbum.image}" alt="">
                        </div>
                        <div class="song-profile">
                            <div class="song-profile_name">
                                <span>${listNhacInCurrentAlbum.name}</span>
                            </div>
                            <div class="song-profile_singer">
                                <a href="#"onclick="
                                
                                ()">${listNhacInCurrentAlbum.singer}</a>
                            </div>
                        </div>
                    </div>
                    <div class="meida-content_center">
                        <span>${listNhacInCurrentAlbum.name}</span>
                    </div>
                    <div class="media-content_right">
                        <div class="song-hover_item">
                            <div class="level">
                                <button><ion-icon name="mic-outline"></ion-icon></button>
                                <button> <ion-icon name="heart-outline" class="love"></ion-icon></i></button>
                            </div>
                        </div>
                        <div class="song-time">
                            <span>${listNhacInCurrentAlbum.thoiLuong}</span>
                        </div>                        
                    </div>                                      
                </div>
            `
        })
        listNhacInAlbum.innerHTML = htmlAlbumDetailSong.join('')
        
    },
    renderMusicDetail: function(){
        const htmlAlbumDetailMusic=this.song.map((song)=>{
            return`
                <div class="media-playlist_item" data-index=${song.idNhac}>
                    <div class="media-content_left">
                        <div class="media-playlist_checkbox">
                            <label class="checkbox">
                                <input type="checkbox" name="" id="">
                                <span class="checkmark"></span>
                            </label>
                        </div>
                        <div class="song-icon">
                            <ion-icon name="musical-notes-outline"></ion-icon>
                        </div>
                        <div class="song-thumb">
                            <img src="${song.image}" alt="">
                        </div>
                        <div class="song-profile">
                            <div class="song-profile_name">
                                <span>${song.name}</span>
                            </div>
                            <div class="song-profile_singer">
                                <a href="#"onclick="artistdetail()">${song.singer}</a>
                            </div>
                        </div>
                    </div>
                    <div class="meida-content_center">
                        <span>${song.name}</span>
                    </div>
                    <div class="media-content_right">
                        <div class="song-hover_item">
                            <div class="level">
                                <button><ion-icon name="mic-outline"></ion-icon></button>
                                <button> <ion-icon name="heart-outline" class="love"></ion-icon></button>
                            </div>
                        </div>
                        <div class="song-time">
                            <span>${song.thoiLuong}</span>
                        </div>
                    </div>
                </div>
            `
        })       
        SongInterRest.innerHTML=htmlAlbumDetailMusic.join('')
    },
    renderNhacCuaNgheSi:function(song){            
        if(song.length>0){          
           let newSong= song.map(song =>{
            return`        
            <div class="media_full">
            <div class="media ">
                <div class="media-left">
                    <div class="media-left_thumb">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="media-left_content">
                        <div class="media-left_content_title">
                            <span>${song.name}</span>
                        </div>
                        <div class="media-left_content_artits">
                            <a>${song.singer}</a>                                                      
                        </div>
                    </div>
                </div>
                <div class="media-right">
                    <div class="level-item_song-queue">
                        <div class="item_song-queue ">
                                    <ion-icon name="heart-outline" class="love"></ion-icon>
                                </div>
                                <div class="item_song-queue ">
                                    <ion-icon name="ellipsis-horizontal-outline" class="more"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
           })
            $('.content-multiline_right').innerHTML=newSong.join('')         
            
    }},
    RenderAppendSongInLybraryToHTML:function(array){
        listSongInLibraryHTML.innerHTML='';    
        let positionSongInLibrary    
        let infor
        if(array.length>0){
            array.forEach((song,index)=>{
                let newSong=document.createElement('div')
                if(listNhacInCurrentAlbum.length>0)
                {
                    positionSongInLibrary =listNhacInCurrentAlbum.findIndex((value)=>value.idNhac==song.IDSong)
                    infor=listNhacInCurrentAlbum[positionSongInLibrary]    
                }
                else{
                    positionSongInLibrary =app.song.findIndex((value)=>value.idNhac==song.IDSong);     
                    infor=app.song[positionSongInLibrary]    
                }                  
                                               
                newSong.classList.add('media-playlist_item')
                newSong.innerHTML=`               
                <div class="media-content_left">
                    <div class="media-playlist_checkbox">
                        <label class="checkbox">
                            <input type="checkbox" name="" id="">
                            <span class="checkmark"></span>
                        </label>
                    </div>
                    <div class="song-icon">
                        <ion-icon name="musical-notes-outline"></ion-icon>
                    </div>
                    <div class="song-thumb">
                        <img src="${infor.image}" alt="">
                    </div>
                    <div class="song-profile">
                        <div class="song-profile_name">
                            <span>${infor.name}</span>
                        </div>
                        <div class="song-profile_singer">
                            <a href="#"onclick="artistdetail()">${infor.singer}</a>
                        </div>
                    </div>
                </div>
                <div class="meida-content_center">
                    <span>${infor.name}</span>
                </div>
                <div class="media-content_right">
                    <div class="song-hover_item">
                        <div class="level">
                            <button><ion-icon name="mic-outline"></ion-icon></button>
                            <button> <ion-icon onclick="app.deleteSongInLybrary(${index})" name="remove-outline"></ion-icon></button>
                        </div>
                    </div>
                    <div class="song-time">
                        <span>${infor.thoiLuong}</span>
                    </div>
                </div> 
                `                                   
                listSongInLibraryHTML.appendChild(newSong)
            })
            
        }
    },   
    renderPlayListTop:function(){
    
        const htmlSonPlayList= this.song.map((song,index)=>{
            return index<=this.currentIndex?`
            <div class="media_full${index==this.currentIndex?' is-active':''}">
            <div class="media ">
                <div class="media-left">
                    <div class="media-left_thumb">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="media-left_content">
                        <div class="media-left_content_title">
                            <span>${song.name}</span>
                        </div>
                        <div class="media-left_content_artits">
                            <a>${song.singer}</a>                                                      
                        </div>
                    </div>
                </div>
                <div class="media-right">
                    <div class="level-item_song-queue">
                        <div class="item_song-queue ">
                                <ion-icon name="heart-outline" class="love"></ion-icon>
                            </div>
                            <div class="item_song-queue ">
                                <ion-icon name="ellipsis-horizontal-outline" class="more"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
            `:''            
        })
        $('.list-item_media-active').innerHTML=htmlSonPlayList.join('')
    },
    renderPlayListBottom:function(){     
        if (this.currentIndex >= this.song.length - 1) {
            $('.list-item_media-not-active').innerHTML = `
            <span  class="nextsong__last-item-end js__sub-color">
                HẾT BÀI RỒI BẠN ƠI! HAHA
            </span>`;
        } else {
        const htmlSonPlayList= this.song.map((song,index)=>{
            return index >this.currentIndex 
            ?`
            <div class="media_full${index==this.currentIndex?' is-active':''}">
            <div class="media ">
                <div class="media-left">
                    <div class="media-left_thumb">
                        <img src="${song.image}"
                            alt="">
                    </div>
                    <div class="media-left_content">
                        <div class="media-left_content_title">
                            <span>${song.name}</span>
                        </div>
                        <div class="media-left_content_artits">
                            <a>${song.singer}</a>                                                      
                        </div>
                    </div>
                </div>
                <div class="media-right">
                    <div class="level-item_song-queue">
                        <div class="item_song-queue ">
                                <ion-icon name="heart-outline" class="love"></ion-icon>
                            </div>
                            <div class="item_song-queue ">
                                <ion-icon name="ellipsis-horizontal-outline" class="more"></ion-icon>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `:''            
        })
        $('.list-item_media-not-active').innerHTML=htmlSonPlayList.join('')
    }
    },  
    renderPlayList:function(){
        this.renderPlayListTop()   
        this.renderPlayListBottom() 
    },
    handleEvents: function () {
        const _this = this      
        rankList.onclick = function (e) {
            let oldRankItem_Node = document.querySelector('.rank-item[style*="background"]');
            if (oldRankItem_Node) {
            oldRankItem_Node.style.background = '';
            }
            let RankItem_Node = e.target.closest('.rank-item')
            if (RankItem_Node) {
                RankItem_Node.style.background='rebeccapurple'  
                app.currentIndex = RankItem_Node.dataset.index                               
                _this.loadCurrentSong()               
                audio.play()                                     
            }                     
        }       
        listDiscoveryRight.onclick = function (e) {
            let oldDiscoveryRightItem_Node = document.querySelector('.discovery-item[style*="background"]');
            if (oldDiscoveryRightItem_Node) {
            oldDiscoveryRightItem_Node.style.background = '';
            }
            let DiscoveryRightItem_Node = e.target.closest('.discovery-item')
            if (DiscoveryRightItem_Node) {
                DiscoveryRightItem_Node .style.background='rebeccapurple'  
                app.currentIndex = DiscoveryRightItem_Node.dataset.index                   
                _this.loadCurrentSong()                
                audio.play()                                     
            }                     
        }                                                                                                                                                                              
        listDiscoveryCenter.onclick = function (e) {
            let oldDiscoveryCenterItem_Node = document.querySelector('.discovery-item[style*="background"]');
            if (oldDiscoveryCenterItem_Node) {
            oldDiscoveryCenterItem_Node.style.background = '';
            }
            let DiscoveryCenterItem_Node = e.target.closest('.discovery-item')
            if (DiscoveryCenterItem_Node) {
                DiscoveryCenterItem_Node.style.background='rebeccapurple'
                app.currentIndex = DiscoveryCenterItem_Node.dataset.index                   
                _this.loadCurrentSong()                
                audio.play()                                     
            }                     
        }                                                                                                                                                                              
        listDiscoveryLeft.onclick = function (e) {
            let oldDiscoveryLeftItem_Node = document.querySelector('.discovery-item[style*="background"]');
            if (oldDiscoveryLeftItem_Node) {
            oldDiscoveryLeftItem_Node.style.background = '';
            }
            let DiscoveryLeftItem_Node = e.target.closest('.discovery-item')
            if (DiscoveryLeftItem_Node) {
                DiscoveryLeftItem_Node.style.background='rebeccapurple'
                app.currentIndex = DiscoveryLeftItem_Node.dataset.index                   
                _this.loadCurrentSong()                
                audio.play()                                     
            }                     
        }                                                                                                                                                                                    
        listAblumSlide.onclick = function (e) {
            let AlbumtItem_Node = e.target.closest('.album-item_img')       
            if (AlbumtItem_Node) {             
                app.currentIndexAlbum = AlbumtItem_Node.dataset.index     
                _this.loadCurrentAlbum()    
                _this.renderAbum()                           
            }                     
        }          
        listNhacInAlbum.onclick = function (e) {              
            let oldNhacInAlbum_Node = document.querySelector('.album-content .media-playlist .media-playlist_item[style*="background"]');
            if (oldNhacInAlbum_Node) {
            oldNhacInAlbum_Node.style.background = '';
            }
            let NhacInAlbum_Node = e.target.closest('.album-content .media-playlist .media-playlist_item');           
            let love=e.target.classList.contains('love')   
            if (NhacInAlbum_Node&&!love) {               
                NhacInAlbum_Node.style.background='rebeccapurple'                           
                _this.currentIndex = NhacInAlbum_Node.dataset.index                                                                
                _this.loadCurrentSongInAlbum()
                audio.play()
                                                                                 
            }    
            if(love){                   
                _this.currentIndex = NhacInAlbum_Node.dataset.index  
                let song_add_lybrary          
              if(listNhacInCurrentAlbum.length>0)
                 {
                    song_add_lybrary =listNhacInCurrentAlbum[_this.currentIndex]          
                      
                 }
                 else{
                     song_add_lybrary=_this.song[_this.currentIndex]          
                 }
                 _this.addToLibrary(song_add_lybrary)          
                 _this.RenderAppendSongInLybraryToHTML(SongAppendLibrary)    
             }                   
        }          
        gallery.onclick = function (e) {
            let GalleryItem_Node = e.target.closest('figure')
            if (GalleryItem_Node) {                        
                app.currentIndexAlbum = GalleryItem_Node.dataset.index     
                _this.loadCurrentAlbum()    
                _this.renderAbum()                                       
            }                     
        }          
        listBroadcast.onclick = function (e) {
           
            let BroadcastItem_Node = e.target.closest('.broadcast-item')
            if (BroadcastItem_Node) {                        
                app.currentIndexAlbum = BroadcastItem_Node.dataset.index     
                _this.loadCurrentAlbum()    
                _this.renderAbum()                                       
            }                     
        }          
        listALbumchill.onclick = function (e) {
            let ALbumchillItem_Node = e.target.closest('.albumchill-item')
            if (ALbumchillItem_Node) {                        
                app.currentIndexAlbum = ALbumchillItem_Node.dataset.index     
                _this.loadCurrentAlbum()    
                _this.renderAbum()                                       
            }                     
        }          
        SongInterRest.onclick = function (e) {
            let SongInterRestItem_Node = e.target.closest('.music-detail_interest_content .media-playlist .media-playlist_item')
            if (SongInterRestItem_Node) {                        
                app.currentIndex = SongInterRestItem_Node.dataset.index     
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
            btnPlay.innerHTML='<ion-icon style="color: rebeccapurple;" name="pause-circle-outline"></ion-icon>'
            Visualazer()  
        }
        //Xử lý khi nhạc bị pause
        audio.onpause = function () {
            _this.isPlaying = false  
            btnPlay.innerHTML='<ion-icon  name="play-circle-outline"></ion-icon>'
        }      
        audio.ontimeupdate = function () {    
            if (audio.duration) {
              const progressPercent = Math.floor(
                (audio.currentTime / audio.duration) * 100
              );
              progress.value = progressPercent;
              progresRank.value=progressPercent
            }
          };
          progress.oninput = function (e) {        
            const seekTime = (audio.duration / 100) * e.target.value;        
            audio.currentTime = seekTime;          
          };         
          progresRank.oninput = function (e) {        
            const seekTime = (audio.duration / 100) * e.target.value;
            audio.currentTime = seekTime;               
          };         
          progressVolum.addEventListener('input', function (e) {            
            audio.volume=(e.target.value)/100;          
          });
          prevBtn.onclick = function () {  
            if (_this.isRandom) {
                _this.playRandomSong();
              } else {   
                _this.prevSong();         
              }
            this.classList.add('hover')    
            setTimeout(function (){
                prevBtn.classList.remove('hover')
            },200) 
                               
            audio.play();          
          };
          nextBtn.onclick = function () {  
            this.classList.add('hover') 
            if (_this.isRandom) {
                _this.playRandomSong();
              } else {
                _this.nextSong();
              }  
            setTimeout(function (){              
                nextBtn.classList.remove('hover')
            },100)                                                 
            audio.play();          
          };
          btnRandom.onclick = function (e) {
            _this.isRandom = !_this.isRandom;
            btnRandom.classList.toggle("hover", _this.isRandom);
          };
          btnRepeat.onclick = function (e) {
            _this.isRepeat = !_this.isRepeat;
            btnRepeat.classList.toggle("hover", _this.isRepeat);
          };              
        audio.onended = function () {
            if (_this.isRepeat) {
            audio.play();
            } else {
            nextBtn.click();
            }
        };
  
    },
    addToLibrary:function(song){
        let positionSongInLibrary=SongAppendLibrary.findIndex((value)=>value.IDSong==song.idNhac);    
        if(SongAppendLibrary.length<=0)
        {
            SongAppendLibrary=[{
                IDSong:song.idNhac,
                Name:song.name,
                icon:1,              
            }                
            ]           
        }
        else if(positionSongInLibrary<0){
            SongAppendLibrary.push(
                {
                    IDSong:song.idNhac,
                    Name:song.name,
                    icon:1
                }
            )
        }else{
            SongAppendLibrary[positionSongInLibrary].icon=SongAppendLibrary[positionSongInLibrary].icon+1
        }      
        localStorage.setItem('SongAppendLibrary',JSON.stringify(SongAppendLibrary))              
    },
    deleteSongInLybrary:function(id){        
        SongAppendLibrary.splice(id,1)
        localStorage.setItem('SongAppendLibrary',JSON.stringify(SongAppendLibrary))
        this.RenderAppendSongInLybraryToHTML(SongAppendLibrary);
    },   
    playRandomSong: function () {
        let newIndex;
        do {
          newIndex = Math.floor(Math.random() * this.song.length);
        } while (newIndex === this.currentIndex);
    
        this.currentIndex = newIndex;
        this.loadCurrentSong();
      },
    prevSong: function () {  
        this.currentIndex--;          
        if(listNhacInCurrentAlbum.length>0){
            if (this.currentIndex < 0) {
                this.currentIndex = listNhacInCurrentAlbum.length - 1;
              }       
       
            this.loadCurrentSongInAlbum()
            this.renderPlayList()
        }
        else{
            if (this.currentIndex < 0) {
                this.currentIndex = this.song.length - 1;
              }                      
            this.loadCurrentSong();
            this.renderPlayList()
         
        }
       
      },
    nextSong: function () {
        debugger
        this.currentIndex++;
        if(listNhacInCurrentAlbum.length>0){
            if (this.currentIndex > listNhacInCurrentAlbum.length-1) {
                this.currentIndex = 0;
              }  
            
            this.loadCurrentSongInAlbum()
            this.renderPlayList()
        }
        else{
            if (this.currentIndex > this.song.length-1) {
                this.currentIndex = 0;
              }  
              this.renderRank()          
              this.loadCurrentSong();
              this.renderPlayList()
               
        }
      },          
    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.song[this.currentIndex]
            }
        })      
        Object.defineProperty(this, 'currentAlbum', {
            get: function () {
                return this.album[this.currentIndexAlbum];
            }
        });        
    },
    tinhSoNgayTrongMang:function(ngayPhatHanhString) {
        // Chuyển định dạng ngày/tháng/năm thành mảng [ngày, tháng, năm]
        const [ngay, thang, nam] = ngayPhatHanhString.split('/').map(Number);
      
        // Tạo đối tượng Date từ ngày/tháng/năm
        const ngayPhatHanhDate = new Date(nam, thang - 1, ngay); // Tháng trong JavaScript là từ 0 - 11
      
        // Ngày hiện tại
        const ngayHienTai = new Date();
      
        // Tính số mili giây trôi qua
        const soMiligiayTrongNgay = 24 * 60 * 60 * 1000;
        const soMiligiayTrongNgayPhatHanh = ngayPhatHanhDate.getTime();
        const soMiligiayHienTai = ngayHienTai.getTime();
      
        // Tính số ngày trôi qua
        const soNgayTrongMang = Math.floor((soMiligiayHienTai - soMiligiayTrongNgayPhatHanh) / soMiligiayTrongNgay);
      
        return soNgayTrongMang;
      },
      
      // Ví dụ sử dụng
    //   const ngayPhatHanhString = '31/12/2023';
    //   const soNgayTrongMang = tinhSoNgayTrongMang(ngayPhatHanhString);
      
    //   console.log(`Đến hôm nay đã trôi qua ${soNgayTrongMang} ngày.`);
      
    selectNhac:function () {
    document.addEventListener('change', function(event) {
        if (event.target.matches('.media-playlist_checkbox .checkbox input[type="checkbox"]')) {
            var checkbox = event.target;
            var mediaPlaylistCheckbox = checkbox.closest('.media-playlist_checkbox');
    
            if (checkbox.checked) {
                mediaPlaylistCheckbox.classList.add('checked');
            } else {
                mediaPlaylistCheckbox.classList.remove('checked');
            }
        } 
    });
    
    },
    selectNhacInPlayList:function () {
        play_queue.addEventListener('click', function () {
          $('.player-queue').classList.toggle('open-queue');
      });
         mediaFullElements = $$('.media_full');
        if (mediaFullElements.length > 0) {
              mediaFullElements[0].classList.add("is-active")
        }
        mediaFullElements.forEach(function (element) {
            element.addEventListener('click', function (event) {
                mediaFullElements.forEach(function (el) {
                    el.classList.remove("is-active");                    
                });
                event.currentTarget.classList.add("is-active");                                                                
            });            
        });   
      },
    loadArtistdetail:function(){      
        let positionArtist = app.artist.findIndex((value) => 
        this.currentSong.singer.toLowerCase().includes(value.tenNgheSi.toLowerCase())
      );               
      if(positionArtist>=0){
         let crrentArtist=this.artist[positionArtist];  
        $('.artist-information_top h3').textContent=crrentArtist.tenNgheSi   
        $('.artist-avatar img').src=crrentArtist.imageNS
        $('.artist-information_bottom .flower').textContent=crrentArtist.flower
        $('.content-nameartist span').textContent=crrentArtist.tenNgheSi
        $('.content-multiline').style.display='block'
        MusicDetial_Artists_thumb.src=crrentArtist.imageNS
        this.loadNhacCuaNgheSi(crrentArtist.tenNgheSi)
      }     
      else{
        $('.artist-information_top h3').textContent="Chưa Cập Nhật Thông Tin Nghệ Sĩ"
        $('.artist-avatar img').src='access/image/img square/—Pngtree—music logo_8736577 - Copy.png'
        $('.artist-information_bottom .flower').textContent='0' 
        $('.content-nameartist span').textContent="Chưa Cập Nhật Thông Tin Nghệ Sĩ"       
        $('.content-multiline').style.display='none'
      }
    },
    loadNhacCuaNgheSi:function(nameartist){        
        listNhacCuaNgheSi=[]                          
        this.song.forEach(song=>{
            if(song.singer.toLowerCase().includes(nameartist.toLowerCase())){
                listNhacCuaNgheSi.push(song)                
            }
        })    
        if(listNhacCuaNgheSi.length>0) 
        {
            this.renderNhacCuaNgheSi(listNhacCuaNgheSi)
        } 
    },
    loadCurrentSong: function () {  
        const SongInPlaylistCurrent_thumb=$('.is-active .media .media-left .media-left_thumb img')
        const SongInPlaylistCurrent_nameSong=$('.is-active .media .media-left .media-left_content .media-left_content_title span')
        const SongInPlaylistCurrent_artits=$('.is-active .media .media-left .media-left_content .media-left_content_artits a')
        Nowplayingsong_thumb.src = this.currentSong.image
        Nowplayingsong_nameSong.textContent = this.currentSong.name
        Nowplayingsong_nameSinger.textContent = this.currentSong.singer
        audio.src=this.currentSong.path                   
        MusicDetial_thumb.src =this.currentSong.image
        MusicDetial_name.textContent =this.currentSong.name
        MusicDetial_singer.textContent =this.currentSong.singer  
        RankAcive_thumb.src=this.currentSong.image              
        MusicDetial_Artists_name.textContent=this.currentSong.singer     
        this.loadArtistdetail()     

    
    },
    loadCurrentAlbum: function () {
        Album_Thumb.src=this.currentAlbum.image
        Album_Name.textContent=this.currentAlbum.nameAlbum
        Album_DayUpLoad.textContent=this.currentAlbum.timeUpLoad
        Album_Artists.textContent=this.currentAlbum.artists
        Album_NumberOfLike.textContent=this.currentAlbum.like
        listNhacInCurrentAlbum=this.currentAlbum.nhacInAlbum        
    },
    loadCurrentSongInAlbum:function(){ 
        Nowplayingsong_thumb.src = listNhacInCurrentAlbum[this.currentIndex].image
        Nowplayingsong_nameSong.textContent =  listNhacInCurrentAlbum[this.currentIndex].name
        Nowplayingsong_nameSinger.textContent =  listNhacInCurrentAlbum[this.currentIndex].singer
        audio.src=listNhacInCurrentAlbum[this.currentIndex].path                      
        MusicDetial_thumb.src = listNhacInCurrentAlbum[this.currentIndex].image
        MusicDetial_name.textContent = listNhacInCurrentAlbum[this.currentIndex].name
        MusicDetial_singer.textContent = listNhacInCurrentAlbum[this.currentIndex].singer  
        RankAcive_thumb.src= listNhacInCurrentAlbum[this.currentIndex].image       
        MusicDetial_Artists_thumb.src= listNhacInCurrentAlbum[this.currentIndex].image  
        MusicDetial_Artists_name.textContent= listNhacInCurrentAlbum[this.currentIndex].singer     
        this.loadArtistdetail()     
    },
    start: function () {

        this.render()

        this.defineProperties()   
   
        this.RenderAppendSongInLybraryToHTML(SongAppendLibrary)
            
        this.handleEvents() 
        
        this.selectNhac()                    

        this.renderPlayList()   

        this.selectNhacInPlayList()     

        this.loadCurrentSong()
    
    }
}
app.start()
