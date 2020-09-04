import { createStroe, createStore } from 'redux';
import reducer from './reducer'; // default export doesn't need {}

const store = createStore(reducer) // higher-order function

export default store;