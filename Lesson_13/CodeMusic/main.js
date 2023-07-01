const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const app = {
  songs: [
    {
      name: "Anh ghét làm bạn em",
      singer: "singer",
      path: "./assets/music/AGLBE.mp3",
      image: "./assets/img/AGLBE.jpg",
    },
    {
      name: "Cao ốc 20",
      singer: "singer",
      path: "./assets/music/CO20.mp3",
      image: "./assets/img/CO20.jpg",
    },
    {
      name: "Có ai hẹn hò cùng em chưa",
      singer: "singer",
      path: "./assets/music/CAHHCEC.mp3",
      image: "./assets/img/CAHHCEC.jpg",
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
  ],

  render: function () {
    const playlists = $('.playlist');
    console.log(playlists);
    const htmls = this.songs.map(song => {
        console.log(song.image)
      return `
        <div class="song">
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
    playlists.innerHTML = htmls.join('');
    // console.log(htmls.join(''));
  },

  handleEvents: function(){
    const cd = $('.cd');
    const cdWidth = cd.offsetWidth;

    document.onscroll = function(){
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;
      console.log(newCdWidth);
      cd.style.width = newCdWidth>0 ? newCdWidth + 'px': 0;
      cd.style.opacity = newCdWidth/cdWidth;
    }
  },

  start: function () {
    this.handleEvents()
    this.render();

  }

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