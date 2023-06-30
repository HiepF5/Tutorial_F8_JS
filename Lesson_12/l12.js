// ES6
// 1.Let. const
// 2.Template Literals
// 3.Multi - line String
// 4.Arrow function
// 5.Classes
// 6.Defaulr parameter values
// 7.Destructuring
// 8.Rest parameters
// 9.Spread
// 10.Enhanced object literals
// 11.Tagged template literal
// 12.Modules

// 1.Let. const

// Var/ let, const: scope, Hosting
// Const/ Var, Let: Assignment
// Code block: if, else , loop ...
// let , const dùng trong block đó , ngoài block ko thực hiện đc, ko được hosting
// Const ko thể thay đổi, nhưng có thể thay đổi thuộc tính của nó, ví dụ a.name

// code thuần : var
// Babel : Const, Let
// Ko gán lại : Const
// Gán lại : Let

// 2.Template Literals : Nội suy

// Sử dụng `` và ${}

// 4. Arrow function: hàm mũi tên

// function thường
function logger1(log) {
  console.log(log);
}
logger1("Hiep");

// function thường
const logger2 = function (log) {
  console.log(log);
};
logger2("Hiep");
// Arrow function
const logger3 = (log) => {
  console.log(log);
};
logger3("Hiep");
// Arrow function
const sum1 = (a, b) => {
  return a + b;
};
console.log(sum1(2, 2));
// Arrow function rút gọn
const sum2 = (a, b) => a + b;
console.log(sum2(2, 2));
//  Arrow function rút gọn return 1 khối, Đóng nó 1 vào ()
const sum3 = (a, b) => ({ a: a, b: b });
console.log(sum3(2, 2));
//
const logger4 = (log) => console.log(log);
logger4("Hiep");
// Không thể tạo function constructor và Không thể truy cập this : context

// 5.Classes
// function constructor

// function Course(name, price){
//   this.name = name;
//   this.price = price;
// }
// const phpCourse = new Course('PHP', 1000);
// const jsCourse = new Course('JS', 500);
// console.log(phpCourse);
// console.log(jsCourse);

// Classes
class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  getCourse() {
    return this.name;
  }
}
const phpCourse = new Course("PHP", 1000);
const jsCourse = new Course("JS", 500);
console.log(phpCourse);
console.log(jsCourse);

//Default parameter values 
function logger6(log = 'Gia tri mac dinh') {
  console.log(log);
}
logger6(undefined);

// 10.Enhanced object literals

// Định nghĩa key: value
// Định nghĩa method
// Định nghĩa key object 

// 7.Destructuring

var arr =['1','2','3'];
var [a,b,c] = arr;
console.log(a,b,c);
var [a, ,...rest] = arr;
console.log(rest)
