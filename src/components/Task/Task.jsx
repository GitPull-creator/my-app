import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Component} from "react";

export default class Task extends Component {


    render() {
        const {description, onDelete, onToggleCompleted, completed, created, editing, onEditClick} = this.props
        const createdText = formatDistanceToNow(created, {addSuffix: true, includeSeconds: true});
        
        let checked = false
        let className = ''
        if (completed) {
            className = 'completed'
            checked = true
        }
        if (editing){
            className = 'editing'
        }

        return (
            <li className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" defaultChecked={checked}
                           onClick={onToggleCompleted}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{`created ${createdText}`}</span>
                    </label>
                    <button className="icon icon-edit" onClick={onEditClick}></button>
                    <button className="icon icon-destroy" onClick={onDelete}></button>
                </div>
                {editing ? <form><input type="text" className="edit" value="Editing task"/></form> : null}
            </li>
        )
    }
}


