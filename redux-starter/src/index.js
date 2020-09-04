import store from './store';
import { bugAdded, bugRemoved, bugResolved } from './actions';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

// state = reducer(state, action);
// notify the subscribers
store.dispatch(bugAdded("Bug_1"));

// unsubscribe();

store.dispatch(bugResolved(1)); 
// store.dispatch({
//     type: actions.BUG_REMOVED,
//     payload: {
//         id: 1
//     }
// });

console.log(store.getState());
