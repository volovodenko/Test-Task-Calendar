import {Dispatch} from 'redux';


import {httpRequest, checkResponse} from 'src/helpers';
import * as actions from 'src/store/reducers/schedule/actions';
import {IScheduleData} from 'src/store/reducers/actionTypes';


export const getSchedule = (inputData: IInputData) => (dispatch: Dispatch) => {
    dispatch(actions.scheduleListFetchRequest());

    const {countryCode, date} = inputData;

    httpRequest(`schedule?country=${countryCode}&date=${date}`)
        .then((res) => {
            if (checkResponse(res)) {

                const data ={
                    date,
                    data: res.data as IScheduleData[]
                };

                dispatch(actions.scheduleListFetchSuccess(data));
            }
        })
        .catch((err) => {
            dispatch(actions.scheduleListFetchFail(err.response.data.error));
        });
};


export interface IInputData {
    countryCode: string;
    date: string;
}
