// Callback Function

// var myObjects = [
//     {
//         name:'Hiep',
//         age:18,
//         coin:200
//     },
//     {
//         name:'Quan',
//         age:19,
//         coin:100
//     }
// ]
// var newObject = myObjects.map(function(myObject){
//     return {
//         name: myObject.name,
//         age: myObject.age + 1,
//         coin: myObject
//     }
// })
// console.log(newObject)

//Hiểu về  Callback function

function add(a,b){
    return a + b;
}
function mul(a,b){
    return a*b ;
}
function option(data1, data2, cal){
    return cal(data1,data2)
}
console.log(option(1,2,add));
console.log(option(1,2,mul));


// Ví dụ về Map + Callback function
// Array.prototype.myMap = function(callback){
//     var arrlength = this.length;
//     for (var i =0 ; i<arrlength; i++){
//         var result = callback(this[i], i);
//         console.log(result);
//     }
    
// }
// var courses = [
//     'Java',
//     'PHP',
//     'Ruby'
// ];
// var htmls = courses.myMap(function(course){
//     return `<h2>${course}</h2>`
// })
// console.log(htmls)

// Ví dụ Dễ hiểu
Array.prototype.myMap = function (callback){
    var output = [], arrlength = this.length;
    for (var i =0 ; i<arrlength; i++){
        var result = callback(this[i]);
        output.push(result);
    }
    return output;
    
}
var courses = [
    'Java',
    'PHP',
    'Ruby'
];
function xuatCourse(course){
    return `<h2>${course}</h2>`
}
var htmls = courses.myMap(xuatCourse)
console.log(htmls)
// Luồng đi đầu tiên sẽ call myMap 
// => callback theo function truyền vào từ đầu (xuatCourse) ,
// Hình dung nó như là truyền vào cách xử lí( xuatCouse rồi gọi nó trong 1 function myMap)

