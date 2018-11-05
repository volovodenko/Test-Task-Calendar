import * as Actions from '../actionTypes';


/*************************************************************************
 * GET SCHEDULE LIST
 *************************************************************************/
export const scheduleListFetchRequest = (): Actions.IScheduleListFetchRequest => ({
    type: Actions.actionType.SCHEDULE_LIST_FETCH_REQUEST
});

export const scheduleListFetchSuccess = (data: Actions.IScheduleList): Actions.IScheduleListFetchSuccess => ({
    type: Actions.actionType.SCHEDULE_LIST_FETCH_SUCCESS,
    payload: data
});

export const scheduleListFetchFail = (error: Actions.IScheduleListError): Actions.IScheduleListFetchFail => ({
    type: Actions.actionType.SCHEDULE_LIST_FETCH_FAIL,
    payload: error
});

