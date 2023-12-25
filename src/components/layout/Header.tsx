import {Link} from "react-router-dom";
import AddTask from "../common/AddTask";

export function Header() {
    return(
        <header>
            <nav className="nav-container">
                <div className="ul-parent">
                    <ul className="ul-container">
                        <li><Link to="/">Table</Link></li>
                        <li><Link to="/calendar">Calendar</Link></li>
                        <li><Link to="/Kanban">Kanban</Link></li>
                    </ul>
                </div>
                <div className="nav-form">
                    <AddTask/>
                </div>
            </nav>
        </header>
    )
}