import './app.css'
import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

const App = () => {
    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <NewTaskForm/>
            </header>
            <section className="main">
                <TaskList/>
                <Footer/>
            </section>
        </section>
    )
}

export default App;