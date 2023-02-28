import './app.css'
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

const App = () => {

    const data = [{className: '', description: 'Completed Task', completed: true, id: 1},
        {className: 'editing', description: 'Editing task', completed: false, id: 2},
        {className: '', description: 'Active task', completed: false, id: 3},]


    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm/>
            </header>
            <section className="main">
                <TaskList data={data}/>
                <Footer/>
            </section>
        </section>
    )
}

export default App;