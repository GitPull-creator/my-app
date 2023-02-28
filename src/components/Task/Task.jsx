import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Task = ({description}) => {
    const createdText = formatDistanceToNow(new Date(), {addSuffix: true, includeSeconds: true});
    return (
        <div className="view">
            <input className="toggle" type="checkbox"/>
            <label>
                <span className="description">{description}</span>
                <span className="created">`created ${createdText}`</span>
            </label>
            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    )
}

export default Task;