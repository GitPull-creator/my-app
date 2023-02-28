import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Component} from "react";

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            completed: false
        }
    }

    isComplete = () => {
        this.setState(({completed}) => ({
            completed: !completed
        }))
    }

    render() {
        const {description, onDelete} = this.props
        const {completed} = this.state;
        const createdText = formatDistanceToNow(new Date(), {addSuffix: true, includeSeconds: true});

        let className = ''
        if (completed) {
            className = 'completed'
        }

        return (
            <li className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox"
                           onClick={this.isComplete}/>
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


