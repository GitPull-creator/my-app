import './taskList.css'
import Task from "../Task";


const TaskList = ({data}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item
        return (
            <Task key={id} {...itemProps}/>
        )
    })

    return (
        <ul className={"todo-list"}>
            {elements}
        </ul>
    )
}

export default TaskList;