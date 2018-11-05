import initialState, {IStore} from './initialState';
import {actionType, Action} from '../actionTypes';


export const schedule = (stateStore: IStore = initialState, action: Action): IStore => {

    switch (action.type) {

        case actionType.SCHEDULE_LIST_FETCH_REQUEST:
            return {
                ...stateStore,
                scheduleListIsLoading: true
            };


        case actionType.SCHEDULE_LIST_FETCH_SUCCESS: {

            //Если есть начальные пустые данные - удаляем
            const scheduleList = stateStore.scheduleList[0].date.length
                ? [...stateStore.scheduleList, action.payload]
                : [action.payload];

            return {
                ...stateStore,
                scheduleList,
                scheduleListIsLoading: false,
                scheduleListLoaded: true
            };
        }

        case actionType.SCHEDULE_LIST_FETCH_FAIL:
            return {
                ...stateStore,
                scheduleListIsLoading: false
            };

        /****************************************************************************/

        default:
            return stateStore;
    }

};
