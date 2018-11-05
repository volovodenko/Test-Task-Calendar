export enum actionType {
    SCHEDULE_LIST_FETCH_REQUEST = '@Schedule/SCHEDULE_LIST_FETCH_REQUEST',
    SCHEDULE_LIST_FETCH_SUCCESS = '@Schedule/SCHEDULE_LIST_FETCH_SUCCESS',
    SCHEDULE_LIST_FETCH_FAIL = '@Schedule/SCHEDULE_LIST_FETCH_FAIL',
}

/**
 *
 */
export interface IScheduleListFetchRequest {
    type: actionType.SCHEDULE_LIST_FETCH_REQUEST;
}

/**
 *
 */
export interface IScheduleList {
    date: string;
    data: IScheduleData[];
}

export interface IScheduleData{
    id: number;
    airdate: string;
    airtime: string;
    season: number;
    name: string;
    show: {
        name: string;
        premiered: string;
        image: {
            medium: string;
            original: string;
        }
    };
}

export interface IScheduleListFetchSuccess {
    type: actionType.SCHEDULE_LIST_FETCH_SUCCESS;
    payload: IScheduleList;

}


/**
 *
 */

export interface IScheduleListError {
    message: string;
}


export interface IScheduleListFetchFail {
    type: actionType.SCHEDULE_LIST_FETCH_FAIL;
    payload: IScheduleListError;
}

/**
 *
 */
export type Action =
    | IScheduleListFetchRequest
    | IScheduleListFetchSuccess
    | IScheduleListFetchFail;
