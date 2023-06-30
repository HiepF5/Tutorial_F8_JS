// 1. Xử lí nhiều việc
// 2. Lắng nghe/ hủy bỏ lắng nghe
var btn = document.querySelector('.btn');
btn.addEventListener('click', function(e){
    console.log(Math.random());
})
btn.removeEventListener('click', function(e){
    console.log(Math.random());
})
// Khi muốn hủy bỏ lắng nghe thì nên dùng addEventListener