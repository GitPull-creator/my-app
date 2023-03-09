import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Component} from "react";

export default class Task extends Component {


    render() {
        const {description, onDelete, onToggleCompleted, completed, created} = this.props
        const createdText = formatDistanceToNow(created, {addSuffix: true, includeSeconds: true});
        
        let checked = false
        let className = ''
        if (completed) {
            className = 'completed'
            checked = true
        }

        return (
            <li className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" checked={checked}
                           onClick={onToggleCompleted}/>
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{`created ${createdText}`}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy" onClick={onDelete}></button>
                </div>
            </li>
        )
    }
}


