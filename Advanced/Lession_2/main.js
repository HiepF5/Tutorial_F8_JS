// import { createStore } from "http://cdn.skypack.dev/redux";
// Code lại redux

// My Redux//
function createStore(reducer){
    let state = reducer(undefined,{});
    const subscribers = [];
    return{
        getState(){
            return state;
        },
        dispatch(action){
            state = reducer(state, action);
            subscribers.forEach(subscriber => subscriber())
        },
        subscribe(subscriber){
            subscribers.push(subscriber);
        }
    }
}
// My APP//
const initState = 0;
// Reducer
function bankReducer(state = initState, action) {
  switch (action.type) {
    case 'DEPOSIT':
        return state + action.payload;
    case 'WITHDRAW':
        return state - action.payload;
    default:
        return state;
  }
}
// Store
const store = window.store =createStore(bankReducer)
console.log(store.getState())
// Action
function actionDeposit(payload){
    return {
        type: 'DEPOSIT',
        payload
    }
}
function actionWithdraw(payload){
    return {
        type: 'WITHDRAW',
        payload
    }
}
// DOM events
const deposit = document.querySelector('#deposit')
const withdraw = document.querySelector('#withdraw')
// Event handler 
deposit.onclick = function(){
    store.dispatch(actionDeposit(10));
}
withdraw.onclick = function(){
    store.dispatch(actionWithdraw(10));
}

// Listener 
store.subscribe(()=>{
    render()
})
// Render
function render(){
    const output = document.querySelector('#output');
    output.innerHTML = store.getState();

}
render()