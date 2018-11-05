import {Component, ReactNode} from 'react';


import SchedulePageContainer,
{IPropsSchedulePageContainer} from 'src/containers/PageContainers/SchedulePageContainer';
import {IScheduleList} from 'src/store/reducers/actionTypes';


export default (View: (props: IPropsView) => ReactNode) => {


    class SchedulePageController extends Component<IPropsSchedulePageContainer> {

        readonly date: string;
        readonly scheduleListInitialValue: IScheduleList;


        constructor(props: IPropsSchedulePageContainer) {
            super(props);

            window.scrollTo(0, 0);

            //данные запроса
            const countryCode = this.props.match.params.countryCode;
            this.date = this.props.match.params.date;


            //если данные для такой date существуют в сторе
            const issetData = this.props.scheduleList
                .some(item => item.date === this.date);

            //Если данных нет в сторе - загрузить
            if (!issetData) {
                const data = {countryCode, date: this.date};
                this.props.getSchedule(data);
            }

            this.scheduleListInitialValue = {
                date: '',
                data: []
            };

        }


        render() {
            // console.log(this.props.scheduleList);
            const scheduleList = this.props.scheduleList
                .find(item => item.date === this.date);

            // console.log(scheduleList);

            const props: IPropsView = {
                scheduleList
            };

            return scheduleList ? View(props) : null;
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    }

    return SchedulePageContainer(SchedulePageController);

};


export interface IPropsView {
    scheduleList: IScheduleList;
}

