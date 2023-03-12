import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import {Component} from "react";

export default class Task extends Component {
    static defaultProps = {
        description: '',
        onDelete: () => null,
        onToggleCompleted: () => null,
        completed: false,
        created: new Date(),
        onEditClick: () => null,
        editing: false,
        handleEditFormSubmit: () => null,
        index: 0,
    };

    constructor(props) {
        super(props);
        this.state = {
            temp: ''
        }
    }

    onValueChange = (e) => {
        this.setState({
            temp: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()

        this.props.handleEditFormSubmit(this.props.index, this.state.temp)
        this.setState({
            temp: ''
        })
    }

    render() {
        const {
            description,
            onDelete,
            onToggleCompleted,
            completed,
            created,
            onEditClick,
            editing,
            handleEditFormSubmit,
            index
        } = this.props
        const createdText = formatDistanceToNow(created, {addSuffix: true, includeSeconds: true});

        let checked = false
        let className = ''
        if (completed) {
            className = 'completed'
            checked = true
        }
        if (editing) {
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
                {editing ? <form onSubmit={this.onSubmit}><input type="text"
                                                                 className="edit"
                                                                 onChange={this.onValueChange}/></form> : null}
            </li>
        )
    }
}


