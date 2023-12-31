import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { CarouselReducer } from './reducers/CarouselReducer';

const rootReducer = combineReducers({
    //state ung dung
    CarouselReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));