// If - else : so sánh đúng sai
// Switch - case : biết trước rồi, 
// Toán tủ 3 ngôi : Ternary operator  

// Loop 
/*
1 for
2 for/in : lặp qua key
3 for/of : lặp qua value
4 while
5 do/while
*/

// for/in 
// key của object ( name, age : String)
// var myInfo = {
//     name: 'Hiep',
//     age: '18'
// }
// for(var key in myInfo){
//     console.log(key) ;
//     console.log(myInfo[key]);
// }
// // key của array (0 ,1, 2 : number)

// var myArray = [
//     'PHP',
//     'Java',
//     'C'
// ];
// for(var key in myArray){
//     console.log(key)
// }
// var myString = 'java'
// console.log(myString[1])

// for/of 
// array
// var myArray = [
//     'PHP',
//     'Java',
//     'C'
// ];
// for(var value of myArray){
//     console.log(value)
// }
// // object
// var myInfo = {
//     name: 'Hiep',
//     age: '18'
// };
// for(var value of Object.values(myInfo)){
//     console.log(value);
// }
// for(var value of Object.keys(myInfo)){
//     console.log(myInfo[value]);
// }

// Đệ quy
// Array
// Array methods : callback function 
// forEach() : duyệt
// every(): All phần tử thoải mãn, return boolean
// some(): 1 Cái đúng thì đúng 
// find(): return chính nó, ko có return undefined
// filter() : lọc tất cả theo điều kiện
// map(): trả về 1 mảng = mảng cũ và thay thế bởi callback
// reduce(): reduce(callback, initialValue, index, array gốc)

var courses = [
    {
        id: 1,
        name: 'JS',
        coin: 250
    },
    {
        id: 2,
        name: 'PHP',
        coin: 200
    },
    {
        id: 3,
        name: 'C',
        coin: 0
    }
]
// courses.forEach(function(courses, index){
//     console.log(index, courses);
// });
// var duyet = function (courses, index){
//     console.log(index, courses)
// }
// courses.forEach(duyet);

// var isFree = courses.every(function(courses){
//     return courses.coin===0;
// })
// console.log(isFree);

// var newCourses = courses.map(function(course){
//     console.log(course);
//     return {
//         id: course.id,
//         name: `Khoa hoc: ${course.name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,

//     }
// });
// console.log(newCourses)
// reduce()
// Flat - làm phẳng mảng từ Depth array

// method includes ( String/ array) : Kiểm tra tồn tại
var title = 'Hiep Nguyen Cong'
console.log(title.includes('Nguyen'))