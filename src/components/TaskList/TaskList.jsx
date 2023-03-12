import './taskList.css'
import Task from "../Task";


const TaskList = ({data, onDelete, onToggleCompleted, onEditClick}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <Task
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleCompleted={() => onToggleCompleted(id)}
                onEditClick={() => onEditClick(id)}/>
        )
    })

    return (
        <ul className={"todo-list"}>
            {elements}
        </ul>
    )
}

export default TaskList;