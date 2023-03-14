import './app.css';

import React from 'react';
import { Component } from 'react';

import NewTaskForm from '../NewTaskForm/NewTaskForm';
import TaskList from '../TaskList/TaskList';
import Footer from '../Footer/Footer';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        this.createTodoItem('Completed Task'),
        this.createTodoItem('Editing Task'),
        this.createTodoItem('Active Task'),
      ],
      filter: 'All',
    };
  }

  maxId = 100;

  createTodoItem = (description) => {
    return {
      description,
      completed: false,
      editing: false,
      id: this.maxId++,
      created: Date.now(),
    };
  };

  addItem = (description) => {
    const newItem = this.createTodoItem(description);
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((el) => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onToggleCompleted = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, 'completed'),
      };
    });
  };
  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };

  clearCompleted = () => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.completed === false),
      };
    });
  };

  filterTasks = (data, filter) => {
    switch (filter) {
      case 'Completed':
        return data.filter((item) => item.completed);
      case 'Active':
        return data.filter((item) => !item.completed && !item.editing);
      default:
        return data;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter });
  };

  onEditClick = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, 'editing'),
      };
    });
  };

  handleEditFormSubmit = (id, text) => {
    const oldItem = this.state.data.find((item) => item.id === id);
    console.log(text);
    this.setState(({ data }) => {
      const newItem = {
        ...oldItem,
        description: text,
        editing: false,
      };

      return {
        data: this.replaceItem(data, newItem),
      };
    });
  };

  replaceItem = (arr, newItem) => {
    return arr.map((item) => {
      const { id: itemId } = item;

      return itemId === newItem.id ? newItem : item;
    });
  };

  render() {
    const { data, filter } = this.state;
    const visibleData = this.filterTasks(data, filter);
    const leftCount = data.filter((el) => !el.completed).length;
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <NewTaskForm onAdd={this.addItem} />
        </header>
        <section className="main">
          <TaskList
            data={visibleData}
            onDelete={this.deleteItem}
            onToggleCompleted={this.onToggleCompleted}
            onEditClick={this.onEditClick}
            handleEditFormSubmit={this.handleEditFormSubmit}
          />
          <Footer
            leftCount={leftCount}
            clearCompleted={() => this.clearCompleted()}
            filter={filter}
            onFilterSelect={this.onFilterSelect}
          />
        </section>
      </section>
    );
  }
}
