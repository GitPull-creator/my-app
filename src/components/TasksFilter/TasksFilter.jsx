import './tasksFilter.css'

const TasksFilter = ({filter, onFilterSelect}) => {

    TasksFilter.defaultProps = {
        filter: '',
        onFilterSelect: () => null,
    };

    const buttonsData = [
        {name: 'All', label: "All"},
        {name: 'Active', label: "Active"},
        {name: 'Completed', label: "Completed"}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = filter === name;
        const clazz = active ? "selected" : ''
        return (
            <li key={name}>
                <button className={clazz}
                        onClick={() => onFilterSelect(name)}
                >{label}</button>
            </li>
        )
    })

    return (
        <ul className="filters">
            {buttons}
        </ul>
    )
}

export default TasksFilter;