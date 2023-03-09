import './taskList.css'
import Task from "../Task";


const TaskList = ({data, onDelete, onToggleCompleted}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <Task
                key={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleCompleted={() => onToggleCompleted(id)}/>
        )
    })

    return (
        <ul className={"todo-list"}>
            {elements}
        </ul>
    )
}

export default TaskList;