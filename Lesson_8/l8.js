// DOM event 
// Có sự kiện nổi bọt -  click ảnh hưởng đến cả con

// Attribute event : nó viết trực tiếp vào html
// Assign event , nên viết cái này

var headingEL = document.querySelector('h1');
headingEL.onclick = function (e){
    console.log(e.target)
}
var h1ELs = document.querySelectorAll('h1');
console.log(h1ELs)
h1ELs.forEach((h1EL)=>{
    console.log(h1EL)
})
// input/select
// keyup/ down
var inputEl = document.querySelector('input[type="text"]');
console.log(inputEl)
// inputEl.onchange = function(e){
//     console.log(e.target.value)
// }
inputEl.oninput = function(e){
    console.log(e.target.value)
}

var boxEl = document.querySelector('input[type="checkbox"]');
console.log(boxEl)
boxEl.onchange = function(e){
    console.log(e.target.checked)
}
var selectEl = document.querySelector('select');
console.log(selectEl)
selectEl.onchange = function(e){
    console.log(e.target.value)
}
// Key up / down
// onkeyup, onkeydown
// PreventDefault : bỏ hành vi mặc định
// and StopPropagation : bỏ hành vi nổi bọt


var aEl = document.links;
for(var i=0; i<aEl.length;i++)
{
    aEl[i].onclick =  function(e){
        e.preventDefault()
    }
}
console.log(aEl)