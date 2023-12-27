import { Routes, Route } from 'react-router-dom';
import CalendarView from "../views/CalendarView";
import KanbanBoard from "../components/kanaban/KanbanBoard";
import TableView from "../views/TableView";
export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<TableView />} />
            <Route path="/calendar" element={<CalendarView />} />
            <Route path="/kanban" element={<KanbanBoard />} />
        </Routes>
    )
}