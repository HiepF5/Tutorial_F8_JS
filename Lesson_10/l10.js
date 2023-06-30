// JSON : định dạng dữ liệu
// Stringify: Js types ->JSON
// Parse : JSON -> js types
// Promise
// Callback hell
var promise = new Promise(
    function(resolve, reject){

    }
);
promise
    .then(function(){
        console.log('success')
    })
    .catch(function(){
        console.log('falir')
    })
    .finally(function(){
        console.log('done')
    })
    // Promise methods (resolve, reject, all)