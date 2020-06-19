// import reducer from '../reducers/index';
// import {createStore} from 'redux';
// import {devToolsEnhancer} from 'redux-devtools-extension';

// const store = createStore(reducer,devToolsEnhancer());

// export default store;


import {configureStore} from '@reduxjs/toolkit';
import reducer from '../reducers/index';

const store = configureStore({
    reducer,
    devTools : process.env.NODE_ENV !== 'production'
})

export default store;
