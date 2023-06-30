// HTML DOM
/*
DOM là gì , DOM: : document object model

Element:  ID, Class, tagname, 
css selection , HTML collection
Attribute
Text

Node 
*/
/*
HTML DOM : tiêu chuẩn W3C
DOM API 
*/

/*
Document object 

*/
// document.write('Hiep');
// element methods
var headingNode =  document.getElementById('heading');
console.log(headingNode)

var headingNodes =  document.getElementsByClassName('headings');
console.log(headingNodes)
// => HTML Collection
// Dùng vòng lặp để lấy từng phần tử
var headingNodes =  document.getElementsByTagName('h1');
console.log(headingNodes)
// getElementById

// CSS Selection
// trả về 1
var headingNodes =  document.querySelector('.headings');
console.log(headingNodes)
// all
var headingNodes =  document.querySelectorAll('.headings');
console.log(headingNodes)
console.log(headingNodes[2])
// HTML collection ....

var boxNodes= document.querySelectorAll('.box-1 li')
console.log(boxNodes)

var boxNodes= document.querySelector('.box-1');
var child= boxNodes.querySelectorAll('li');
console.log(child)
console.log(boxNodes)
// Selectors => nodeList
// getElements => HTML Collection
//  muốn lấy cần truyền index
// Số ít  (byId, querySelector)=> Element

// var boxNodes= document.querySelector('.box-1');
var child2= document.querySelectorAll('li');
console.log(child2)


// DOM Attribute
