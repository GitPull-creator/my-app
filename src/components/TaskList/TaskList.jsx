import './taskList.css'
import Task from "../Task";


const TaskList = ({data, onDelete, onToggleCompleted, onEditClick, handleEditFormSubmit}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <Task
                key={id}
                index={id}
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleCompleted={() => onToggleCompleted(id)}
                onEditClick={() => onEditClick(id)}
                handleEditFormSubmit={handleEditFormSubmit}/>
        )
    })

    return (
        <ul className={"todo-list"}>
            {elements}
        </ul>
    )
}

export default TaskList;