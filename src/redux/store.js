// import package
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import reducers
import rootReducer from './reducers/index';


    //// Khi chỉ dùng mỗi redux mà không dùng redux thunk
    // const store = createStore(
    //     rootReducer,
    //     // Tham số này thường là redux thunk hoặc redux-saga nhưng ở đây ta chưa dùng tới 
    //     // {},
    //     // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )

    //// Khi vừa dùng redux và vừa dùng redux thunk
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;