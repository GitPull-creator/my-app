import './taskList.css'
import Task from "../Task";

const TaskList = ({className, description = "Completed task"}) => {
    return (
        <ul className={"todo-list"}>
            <li className={className}>
                <Task description={description}/>
            </li>
            <li className={className}>
                <Task description={description}/>
            </li>
            <li className={className}>
                <Task description={description}/>
            </li>
        </ul>
    )
}

export default TaskList;