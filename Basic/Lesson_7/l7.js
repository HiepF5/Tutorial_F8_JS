// inner HTML, outerHTMl
var headingEL = document.querySelector('h1');
headingEL.innerHTML='<h1>New</h1>';
console.log(headingEL);
console.log(headingEL.innerHTML)
// outer : lấy cả thuộc tính lấy , ghi đè chính cái thằng gọi
// Node properties 
// Rất nhiều thuộc tính
// headingEL => là 1 object

//DOM Style
var headingEL = document.querySelector('h1');
console.log(headingEL.style)
headingEL.style.backgroundColor= 'red'

Object.assign(headingEL.style,{
    backgroundColor:'blue',
    width: '200px'
})
// ClassList property => có rất nhiều, tự tìm hiểu thêm
//  sử dụng khi truy cập đc vào Element Node

// add : thêm
// contains : tồn tại
// remove : xóa
// toggle : có thì xóa, ko thì thêm 
// => class 

var boxEL = document.querySelector('.box');
// thêm class 
boxEL.classList.add('red','blue') 
// Kiểm tra tồn tại
boxEL.classList.contains('red') 
// xóa class
boxEL.classList.remove('red') 
// toggle
boxEL.classList.toggle('red') 
console.log(boxEL.classList[0]);
console.log(boxEL.classList[1]);

