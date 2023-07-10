// 1. IIFE
// 2. Closures
// 3. Hosting
// 4. Strict mode 
// 5. This keyword
// 6. Bind method 
// 7. Call method 
// 8. Apply method
// 9. Catching, throwing error 
// 10. Promise 
// 11. Async function, await

// function Expression 
// IIFE
(function(){
    console.log('ss')
})()
// Scope - phạm vì
// các loại phạm vi
// Global - Toàn cầu
// Code block 
// Local scope 
//  var message = ' học ve scope '

// Closure
function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key))??{}
    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }
    const storage = {
        get(key){
            return store[key]
        },
        set(key, value){
            store[key] = value
            save()

        },
        remove(key){
            store[key]
            save()
        }

    }
    return storage
}
const profileSetting = createStorage('profile_setting');
profileSetting.set('fullName', 'Son Dang');
console.log(profileSetting.get('fullName'));
// Hoisting 
// Strict mode : chế độ nghiêm ngặt 

// value types & Reference types 
// kiểu  tham trị và kiểu tham chiếu

// Primitive Types & Reference Types 
// side effect 
// Từ khóa this 
/*
 
*/
const iPhone7 = {
    name: 'ip 7',
    color:'Pink',
    weight:300,
    takePhoto(){
        console.log(this)
    },
    
}
console.log(iPhone7.takePhoto())
// bind: 
// 
// `