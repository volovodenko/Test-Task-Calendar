import React from 'react';
import {connect} from 'react-redux';


import {IGlobalStore} from 'src/store/rootReducer';
import {getSchedule, IInputData} from 'src/api';
import {IScheduleList} from 'src/store/reducers/actionTypes';


export default (Controller: typeof React.Component) => {

    const mapStateToProps = (state: IGlobalStore) => ({
        scheduleListLoaded: state.schedule.scheduleListLoaded,
        scheduleList: state.schedule.scheduleList
    });

    const mapDispatchToProps = {
        getSchedule
    };



    const SchedulePageContainer = (props: IPropsSchedulePageContainer) => <Controller {...props}/>;

    return connect(mapStateToProps, mapDispatchToProps)(SchedulePageContainer);
};


export interface IPropsSchedulePageContainer {
    getSchedule: (data: IInputData) => () => void;
    scheduleList: IScheduleList[];
    scheduleListLoaded: boolean;
    match: {
        params: {
            countryCode: string;
            date: string;
        }
    };
}
