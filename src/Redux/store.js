import {createStore, combineReducers ,applyMiddleware} from "redux";
import thunkMiddleware from 'redux-thunk';
import usersReducer from "./reducers/usersReducer";
import albumsReducer from "./reducers/albumsReducer";
import photosReducer from "./reducers/photosReducer";


let reducers = combineReducers({
    usersList: usersReducer,
    albumsList: albumsReducer,
    photosList: photosReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));


export default store;