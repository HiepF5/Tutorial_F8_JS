const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PLAYER_STORAGE_KEY= 'F8_PLAYER'
const player = $(".player");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const cd = $(".cd");
const playlists = $(".playlist");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config:JSON.parse(localStorage.getItem(PLAYER_STORAGE_KEY))||{},
  setConfig: function(key, value){
    this.config[key]=value;
    localStorage.setItem(PLAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  songs: [
    {
      name: "Có ai hẹn hò cùng em chưa",
      singer: "singer",
      path: "./assets/music/CAHHCEC.mp3",
      image: "./assets/img/CAHHCEC.jpg",
    },
    {
      name: "Cao ốc 20",
      singer: "singer",
      path: "./assets/music/CO20.mp3",
      image: "./assets/img/CO20.jpg",
    },

    {
      name: "Phản bội chính mình",
      singer: "singer",
      path: "./assets/music/PBCM.mp3",
      image: "./assets/img/PBCM.jpg",
    },
    {
      name: "Sao cha không",
      singer: "singer",
      path: "./assets/music/SCK.mp3",
      image: "./assets/img/SCK.jpg",
    },
    {
      name: "Tệ thật, anh nhớ em",
      singer: "singer",
      path: "./assets/music/TTANE.mp3",
      image: "./assets/img/TTANE.jpg",
    },
    {
      name: "Anh ghét làm bạn em",
      singer: "singer",
      path: "./assets/music/AGLBE.mp3",
      image: "./assets/img/AGLBE.jpg",
    },
  ],

  render: function () {
    console.log(playlists);
    const htmls = this.songs.map((song, index) => {
      // console.log(song.image);
      return `
        <div class="song ${index === this.currentIndex ? "active" : ""}" data-index="${index}">
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
            <h3 class="title">${song.name}</h3>
            <p class="author">${song.singer}</p>
            </div>
            <div class="option">
            <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>
            `;
    });
    // console.log(htmls);
    playlists.innerHTML = htmls.join("");
    // console.log(htmls.join(''));
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;
    // xử lí khi cd quay/ dừng
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 5000,
      iterations: Infinity,
    });
    cdThumbAnimate.pause();
    // xử lí phóng to
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      console.log(newCdWidth);
      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    // xử lí khi click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };
    // Khi song được pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };
    // khi tiến độ bài hát thay đổi
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };
    // Xử lí khi tua
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    // khi next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.nextSong();
        _this.scrollToActiveSong();
      }

      audio.play();
      _this.render();
    };
    // khi prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.randomSong();
      } else {
        _this.prevSong();
      }

      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };
    // khi random
    randomBtn.onclick = function () {
      _this.isRandom = !_this.isRandom;
      _this.setConfig('isRandom',_this.isRandom)
      randomBtn.classList.toggle("active", _this.isRandom);
      if (_this.isRandom == true) {
        _this.isRepeat = false;
        repeatBtn.classList.toggle("active", _this.isRepeat);
      }
    };
    // xử lí lặp lại song
    repeatBtn.onclick = function () {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig('isRepeat',_this.isRepeat)

      repeatBtn.classList.toggle("active", _this.isRepeat);
      if (_this.isRepeat == true) {
        _this.isRandom = false;
        randomBtn.classList.toggle("active", _this.isRandom);
      }
    };
    // Xử lý next song khi audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };
    // lắng nghe click vào playlist
    playlists.onclick = function(e){
      const songNode = e.target.closest('.song:not(.active)');
      const optionNode = e.target.closest('.option');

      // console.log(e.target)
      if( songNode|| optionNode){
        // xử lí khi click vào song
        if(songNode){
          _this.currentIndex= +songNode.dataset.index
          _this.loadCurrentSong();
          audio.play();
          _this.render();

        }
        // xử lí khi click vào option
        if( e.target.closest('.option')){

        }
      }

    }
  },
  // loadConfig: function(){
  //   this.isRandom = this.config.isRandom;
  //   this.isRepeat = this.config.isRepeat;
  // },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  randomSong: function () {
    let newRandom;
    do {
      newRandom = Math.floor(Math.random() * this.songs.length);
      console.log(newRandom);
    } while (this.currentIndex === newRandom);
    this.currentIndex = newRandom;
    this.loadCurrentSong();
  },
  scrollToActiveSong: function () {
    // const scrollActive = $(".song.active");
    setTimeout(() => {
      $('.song.active').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      })
    }, 200);
  },
  start: function () {
    // config 
    // this.loadConfig();
    // định nghĩa thuộc tính
    this.defineProperties();
    // lắng nghe, xử lí sự kiện
    this.handleEvents();
    // tải bài hát khí chạy
    this.loadCurrentSong();
    // render
    this.render();
    // hiển thị đầu tiên
    // randomBtn.classList.toggle("active", this.isRandom);
    // repeatBtn.classList.toggle("active", this.isRepeat);
  },
};
app.start();

/*
1. render songs
2. scroll top
3.play, stop. seek
4.  cd rotate
5. next / prew
6. random
7. next/ repeat when ended
8. action song
9. scroll active song into view
10. play song when click
*/
