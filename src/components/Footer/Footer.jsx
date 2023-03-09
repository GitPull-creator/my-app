import "./footer.css"
import TasksFilter from "../TasksFilter/TasksFilter";

const Footer = ({leftCount, clearCompleted}) => {
    return (
        <footer className="footer">
            <span className="todo-count">{`${leftCount} items left`}</span>
            <TasksFilter/>
            <button className="clear-completed" onClick={clearCompleted}>Clear completed</button>
        </footer>
    )
}

export default Footer;