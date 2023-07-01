//Function trong JS
//Arguments trong function
// Các loại function
/*
1. Declaration function: Có thể call trước khi định nghĩa (do khái niệm hosting)
function DecFunc{

}
2. Expression function: Không thể call trước khi định nghĩa
var ex = function exName() {
    
}
setTimeout(function exName())
var myObject = {
    myFunction: function exName(){

    }
}
Đặt tên để dễ hiểu và không có tác dụng gì
Callback function 
3. Arrow function
*/
//String
//Có 2 cách tạo chuỗi
// var newString =  'Hiep'; => nên dùng cách này, ngắn gọn, datatype : String
// var newString2 =  new String('Hiep') => không nên , datatype: Object
// Backslash
// Template string ES6 : " Sử dụng `` , ${} "

// Work with String

// var myString = 'Hoc JS tai F8!';
// 1. Length : Độ dài
// console.log(myString.length);
// 2. indexOf : trả về giá trị đầu tiên tìm thấy, indexOf('string', index)
// lastIndexOf ....
// search() ...
// console.log(myString.indexOf('JS'));
// 3. Cut string : cắt chuỗi, có rất nhiều kiểu cắt, begin, end,...
// console.log(myString.slice(0));
// 4. Replace => thay thế, tìm hiểu thêm về biểu thức chính quy.
// 5.Convert to upper case 
// console.log(myString.toUpperCase());
// 6.Convert to lower case 
// console.log(myString.toLowerCase());
// 7. Trim : Loại bỏ kí tự khoảng trắng 2 đầu
// 8. Split: Cắt 1 chuỗi thành array , cần tìm điểm chung
// 9. get a character by index 
// console.log(myString[2]);

//Number 
// tạo tương tụ String
// Number.toSting() : Number => String
// Number.toFixed() : Làm tròn
// Mảng - Array => tạo tương tự String

// Work with Array

// 1. To string : chuyển đổi
// 2. Join : nối
// 3. Pop : xóa , trả về nó
// 4. Push : thêm - return length mới
// 5. Shift : xóa đầu - trả về nó
// 6. unShift : Thêm đầu - return length mới
// 7. Splice : Xóa, cắt chèn splice( index,quantity, replace )
// 8. concat : Nối Array
// 9. Slice : Cắt , slice( begin, end)

// Work with Object
// var myObject = {
//     name: 'hiep',
//     age: 18,
//     getName: function(){
//         return this.name;
//     }
// };

// Them key => Object
// myObject.address = 'hiep@gmail.com';
// console.log(myObject)
// Xoa key
// delete myObject.age
// function
// console.log(myObject.getName())
// Fuction - Phương thức / method
// Other - Thuộc tính /  Property

// Object Constructor
function User(firstName, lastName, avatar){
    this.firstName= firstName;
    this.lastName= lastName;
    this.avatar= avatar;
    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}
var author = new User('Hiep', 'Nguyen', 'Avatar');
var user = new User('Nhan', 'Vien', 'Avatar');
User.prototype.className = 'F8'
console.log(author);
console.log(user);

// author.title = 'Chia sẻ dạo tại F8';
// user.comment = 'Comment';

// console.log(author.getName());
// console.log(user.getName());

//Object prototype 
// 
// thêm thuộc tính = prototype
// Cách sai : User.className = 'F8'
// Cách đúng: User.prototype.className = 'F8'
// phương thức, thuộc tính được thêm bằng prototype nằm trong __proto__

// Đối tương Date
var date = new Date();
console.log(date.getMonth()+1)
// Math object
/*
1. Math.PI
2. Math.round()
3. Math.abs()
4. Math.ceil()
5. Math.floor()
6. Math.random()
7. Math.min()
8. Math.max()
*/



