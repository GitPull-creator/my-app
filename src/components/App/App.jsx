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
        this.maxId = 4;
    }

    onToggleCompleted = (id) => {
        console.log("com", id)
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    addItem = (description) => {
        const newItem = {
            description,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    render() {
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm onAdd={this.addItem}/>
                </header>
                <section className="main">
                    <TaskList
                        data={this.state.data}
                        onDelete={this.deleteItem}
                        onToggleCompleted={this.onToggleCompleted}/>
                    <Footer/>
                </section>
            </section>
        )
    }
}

