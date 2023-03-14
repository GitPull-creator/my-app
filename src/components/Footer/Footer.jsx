import './footer.css';
import TasksFilter from '../TasksFilter/TasksFilter';

const Footer = ({ leftCount, clearCompleted, filter, onFilterSelect }) => {
  Footer.defaultProps = {
    leftCount: 0,
    clearCompleted: () => null,
    filter: 'All',
    onFilterSelect: () => null,
  };

  return (
    <footer className="footer">
      <span className="todo-count">{`${leftCount} items left`}</span>
      <TasksFilter filter={filter} onFilterSelect={onFilterSelect} />
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
