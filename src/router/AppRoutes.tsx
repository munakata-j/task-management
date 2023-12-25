import { Routes, Route } from 'react-router-dom';
import TablePage from "../components/table/TablePage";
import CalendarView from "../components/calendar/CalendarView";
import KanbanBoard from "../components/kanaban/KanbanBoard";
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<TablePage />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/kanban" element={<KanbanBoard />} />
        </Routes>
    )
}