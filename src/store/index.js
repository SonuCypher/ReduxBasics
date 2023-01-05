
import { createStoreHook } from 'react-redux'
import { legacy_createStore } from 'redux'
const initilaState = {counter:0,showCounter:true}
const counterReducer = (state =initilaState,action)=>{
    if (action.type === 'increment'){
        return{
            counter:state.counter + 1,
            showCounter:state.showCounter
        }
    }
    if (action.type === 'incrementbyfive'){
        return{
            counter:state.counter + action.amount,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'decrement'){
        return{
            counter:state.counter - 1,
            showCounter:state.showCounter
        }
    }
    if(action.type === 'toggle'){
        return{
            counter:state.counter,
            showCounter:!state.showCounter
        }
    }
    return state
}

const store = legacy_createStore(counterReducer)

export default store;