import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {useContext} from "react";
import {TaskContext} from "../../context/taskContext";

const localizer = momentLocalizer(moment);
const CalendarPage = () => {
    const context = useContext(TaskContext)

    return (
        <>
            <div className="table-container">
                <Calendar
                    localizer={localizer}
                    startAccessor="start"
                    endAccessor="end"
                    events={context?.state.tasks.map((task) => ({
                        id: task.id,
                        title: task.title,
                        priority: task.priority,
                        status: task.status,
                        start: new Date(task.start_dt),
                        end: new Date(task.deadline),
                    }))}
                    style={{ height: 800 }}
                />
            </div>
        </>
    )
}
export default CalendarPage
