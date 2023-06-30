// Lấy element rồi mới thay đổi đc attribute, text
// DOM attribute
// thêm title attribute
var headingEL = document.querySelector('h1');
console.log(headingEL)
headingEL.title ='Heading';
headingEL.className ='Heading';
//setter
// thêm không hop lêk
headingEL.setAttribute('id-1', 'id-1')
// lấy ra thuộc tính hợp lệ
console.log(headingEL.title) 
// Lấy ra thuộc tính không hợp lệ
console.log(headingEL.getAttribute('class'))
// InnerText vs textContent Property
console.log(headingEL.innerText)
console.log(headingEL.textContent)
headingEL.innerText = 'hihi';
console.log(headingEL.value)
// InnerText : trả về cái gì nhìn thấy, thuộc tính của element node 
// textContent:trả về nguyên bản 