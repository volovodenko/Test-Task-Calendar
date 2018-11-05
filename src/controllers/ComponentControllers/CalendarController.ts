import {Component, ReactNode} from 'react';
import dateFns from 'date-fns';


export default (View: (props: IPropsView) => ReactNode) => {

    return class CalendarController extends Component {
        readonly state: IState;

        constructor(props: {}) {
            super(props);

            this.state = {
                currentMonth: new Date(),
                selectedDate: new Date()
            };
        }

        render() {

            const props: IPropsView = {
                currentMonth: this.state.currentMonth,
                nextMonth: this.nextMonth,
                prevMonth: this.prevMonth,
                monthDates: this.getCurrentMonthDates()
            };

            return View(props);
        }

        /***************************************************************************
         * CONTROLLER LOGIC START
         **************************************************************************/


        nextMonth = () => {
            this.setState((state: IState) => ({
                currentMonth: dateFns.addMonths(state.currentMonth, 1)
            }));
        };

        prevMonth = () => {
            this.setState((state: IState) => ({
                currentMonth: dateFns.subMonths(state.currentMonth, 1)
            }));
        };

        // onDateClick = (day: Date) => () => {
        //     console.log(day);
        //     this.setState({
        //         selectedDate: day
        //     });
        // };


        getCurrentMonthDates() {
            const monthStart = dateFns.startOfMonth(this.state.currentMonth);
            const monthEnd = dateFns.endOfMonth(this.state.currentMonth);
            const startDate = dateFns.startOfWeek(monthStart, {weekStartsOn: 1}); //1-starts on Monday
            const endDate = dateFns.endOfWeek(monthEnd, {weekStartsOn: 1}); //1-starts on Monday

            let day = startDate;
            const currentMonthDates = [];

            while (day < endDate) {
                const weekRow = [];

                for (let n = 0; n < 7; n++) {
                    weekRow.push(day);
                    day = dateFns.addDays(day, 1);
                }
                currentMonthDates.push(weekRow);
            }

            return currentMonthDates;
        }


        /***************************************************************************
         * CONTROLLER LOGIC END
         **************************************************************************/

    };

};


export interface IPropsView {
    readonly currentMonth: Date;
    readonly nextMonth: () => void;
    readonly prevMonth: () => void;
    readonly monthDates: Date[][];
}

interface IState {
    readonly currentMonth: Date;
    readonly selectedDate: Date;
}
