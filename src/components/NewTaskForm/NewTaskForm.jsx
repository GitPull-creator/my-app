import './taskForm.css'
import {Component} from "react";

export default class NewTaskForm extends Component {
    static defaultProps = {
        onAdd: () => null,
    };

    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }
    }


    onValueChange = (e) => {
        this.setState({
            description: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.description)
        this.setState({
            description: ''
        })
    }


    render() {
        const {description} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text"
                       className="new-todo"
                       placeholder="What needs to be done?"
                       autoFocus
                       onChange={this.onValueChange}
                       value={description}/>
            </form>

        )
    }
}



