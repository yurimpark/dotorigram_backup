// import { configureStore } from '@reduxjs/toolkit';

// export default configureStore({
//   reducer: {
//     devTools: process.env.NODE_ENV !== 'production',
//   },
// });

import { createStore } from 'redux';
import reducer from './reducer/reducer';

let store = createStore(reducer);
export default store;
