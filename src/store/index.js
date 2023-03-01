import { createStore } from "redux";
import  reducer from "../reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

store.subscribe(()=>console.log("store", store));

export default store;