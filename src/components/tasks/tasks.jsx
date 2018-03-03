import React, { Component } from 'react';
import Axios from 'axios';
import { Container } from "reactstrap";
import TasksContainer from './tasks-container.jsx';
import CreateTask from './create-task.jsx';
import TasksList from './tasks-list.jsx';

class Tasks extends Component {
  constructor(props) {
    super(props);
    this.getTasks = this.getTasks.bind(this);
    this.state = {
        tasks:[]
    }
  }
  componentWillMount() {
   this.getTasks();
  }
  getTasks() {
    var config = {
      headers: {'accept': 'application/ld+json'}
    };
    Axios.get('http://localhost:8080/app_dev.php/tasks',config)
    .then((response) => {
        this.setState({ tasks: response.data['hydra:member'] });
      console.log(response.data['hydra:member']); // ex.: { user: 'Your User'}
      console.log(response.status); // ex.: 200
    });  
  }
  render() {
    return (
      <Container className="Tasks">
        
        <TasksContainer title='To do list'>
          <TasksList getTasks={this.getTasks} tasks={this.state.tasks}/>
          <CreateTask getTasks={this.getTasks}/>
        </TasksContainer>
        
      </Container>
    );
  }
}

export default Tasks;
