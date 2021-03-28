import { combineReducers } from 'redux';
import user from './user';
import post from './post';

export default function rootReducer() {
    combineReducers({
        user,
        post,
    })
};