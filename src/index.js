import { createStore } from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

//String은 오타가 나도 에러 발생하지 않기 때문에 constant 사용
const ADD = "ADD";
const MINUS = "MINUS";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD:
      return state + 1;
    case MINUS:
      return state - 1;
    default:
      return state;
  }
};

const store = createStore(reducer);

const onChange = () => {
  number.innerText = store.getState();
}

store.subscribe(onChange);

const handleAdd = () => {
  store.dispatch({type: ADD})
}

const handleMinus = () => {
  store.dispatch({type: MINUS})
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);

