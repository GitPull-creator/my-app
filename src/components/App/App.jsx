import './app.css'
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import {Component} from "react";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{description: 'Completed Task', completed: true, id: 1},
                {description: 'Editing task', completed: false, id: 2},
                {description: 'Active task', completed: false, id: 3},]
        }
    }


    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm/>
                </header>
                <section className="main">
                    <TaskList data={this.state.data}/>
                    <Footer/>
                </section>
            </section>
        )
    }
}

