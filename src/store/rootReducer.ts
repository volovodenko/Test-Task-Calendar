import {combineReducers} from 'redux';


import {schedule} from './reducers/schedule';
import {IStore} from './reducers/schedule/initialState';




export default combineReducers<IGlobalStore>(
    {
        schedule,
    }
);

export interface IGlobalStore {
    schedule: IStore;
}

