import { configureStore, createSlice } from "@reduxjs/toolkit";
import { legacy_createStore } from "redux";
const initialCounterState = { counter: 0, showCounter: true };
const counterslice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementbyfive(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initialAuthState = { isAuthenticated: false };
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    },
  },
});

// const counterReducer = (state =initialState,action)=>{
//     if (action.type === 'increment'){
//         return{
//             counter:state.counter + 1,
//             showCounter:state.showCounter
//         }
//     }
//     if (action.type === 'incrementbyfive'){
//         return{
//             counter:state.counter + action.amount,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return{
//             counter:state.counter - 1,
//             showCounter:state.showCounter
//         }
//     }
//     if(action.type === 'toggle'){
//         return{
//             counter:state.counter,
//             showCounter:!state.showCounter
//         }
//     }
//     return state
// }

// const store = legacy_createStore(counterReducer)
const store = configureStore({
  reducer: { counter: counterslice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterslice.actions;
export const authActions = authSlice.actions;

export default store;
