// import package
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    // Tham số này thường là redux thunk hoặc redux-saga nhưng ở đây ta chưa dùng tới 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;