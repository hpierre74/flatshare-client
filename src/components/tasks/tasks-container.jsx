import React, { Component } from 'react';

class TasksContainer extends Component {
    render() {
      return (
        <div className="TasksContainer">
          <h1>{this.props.title}</h1>
          {this.props.children}
        </div>
      );
    }
  }

  export default TasksContainer;
  