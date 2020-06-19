// import {combineReducers} from 'redux';

// const usersList = (state = [],action) => {
//     switch (action.type) {
//         case 'ADD':
//             return [...state,action.payload];
            
//         case 'DELETE':
//             return state.filter( el => el.id !== action.payload)  ;

//         default:
//             return state;
//     }
// }

// const filter = (state = '',action) =>{
//     switch (action.type) {
//         case 'FILTER':
//             return action.payload;
    
//         default:
//             return state;
//     }
// }

// const reducers = combineReducers({
//     usersList,
//     filter
// })

// export default reducers;

import {createReducer} from '@reduxjs/toolkit';
import {add,del,filter} from '../actions/index'
import {combineReducers} from 'redux';

const usersList = createReducer([],{
    [add] : (state,action) =>  [...state,action.payload],
    [del] : (state,action) =>  state.filter( el => el.id !== action.payload),
})
const fil = createReducer('',{
    [filter] : (state,action) =>  action.payload,
})

const reducers = combineReducers({
    usersList,
    filter : fil,
})
export default reducers;


