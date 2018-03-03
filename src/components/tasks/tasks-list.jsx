import React, { Component } from 'react';
import { Container, Table, Row, Col } from 'reactstrap';
import Task from './task.jsx';


class TasksList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            tasks: []
        }
    }
    componentDidMount() {
        console.log(this.state)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ 
            tasks: nextProps.tasks,
            getTasks: nextProps.getTasks 
        });
    }
    renderTaskList() {
        return Object.values(this.state.tasks).map((task,index) => {
            return (
                <Task getTasks={this.state.getTasks} key={index} id={index+1} task={task} />
            )
        });
    }


    render() { 
        return ( 
            <Container>
                <Table striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Author</th>
                        <th>Publication Date</th>
                        <th>Delete</th>
                        {/* <th>Edit</th> */}
                    </tr>
                    </thead>
                    <tbody>
                        { this.renderTaskList()}
                    </tbody>
                </Table>
            </Container>
         )
    }
}
 
export default TasksList;