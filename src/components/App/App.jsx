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

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName],}

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];

    }

    onToggleCompleted = (id) => {
        this.setState(({data}) => {
            return {
                data: this.toggleProperty(data, id, 'completed')
            };
        });
    };
    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    clearCompleted = () => {
        this.setState(({data}) => {
            return {
                data: data.filter(item => item.completed === false)
            }
        })
    }


    render() {
        const {data} = this.state;
        const leftCount = data.filter((el) => !el.completed).length
        return (
            <section className="todoapp">
                <header className="header">
                    <h1>todos</h1>
                    <NewTaskForm onAdd={this.addItem}/>
                </header>
                <section className="main">
                    <TaskList
                        data={data}
                        onDelete={this.deleteItem}
                        onToggleCompleted={this.onToggleCompleted}/>
                    <Footer leftCount={leftCount}
                            clearCompleted={() => this.clearCompleted()}/>
                </section>
            </section>
        )
    }
}

