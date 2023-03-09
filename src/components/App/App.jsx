import './app.css'
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";
import {Component} from "react";
import {da} from "date-fns/locale";


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                this.createTodoItem('Completed Task'),
                this.createTodoItem('Editing Task'),
                this.createTodoItem('Active Task'),
            ]
        }
    }

    maxId = 100;

    createTodoItem = (description) => {
        return {
            description,
            completed: false,
            id: this.maxId++
        }
    }

    addItem = (description) => {
        const newItem = this.createTodoItem(description)
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleCompleted = (id) => {
        this.setState(({data}) => {
            const idx = data.findIndex((el) => el.id === id);
            const oldItem = data[idx];
            const newItem = {...oldItem, completed: !oldItem.completed,}

            const newArray = [
                ...data.slice(0, idx),
                newItem,
                ...data.slice(idx + 1)
            ];

            return {
                data: newArray
            }
        })
    }
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
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

