import {IScheduleList} from '../actionTypes';


const initialState: IStore = {
    scheduleList: [
        {
            date: '',
            data: []
        }
    ],
    scheduleListIsLoading: false,
    scheduleListLoaded: false,
};

export default initialState;


export interface IStore {
    readonly scheduleList: IScheduleList[];
    readonly scheduleListIsLoading: boolean;
    readonly scheduleListLoaded: boolean;
}

