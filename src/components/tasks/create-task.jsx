import React, { Component } from 'react';
import { Row, Col, Container, Form, Input, InputGroup, FormGroup, Label, Button } from 'reactstrap';
import Axios from 'axios';


class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.path='http://localhost:8080/app_dev.php/tasks'
        this.state = { 
            title:'',
            description:'',
            author:'',
            publicationDate: new Date(),
            completed:false
         }
    }
    handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    createTask(e) {
        e.preventDefault();
        let config = {
            headers: {
                'accept':'application/ld+json'
            }
        }
        return Axios.post(this.path, this.state, config)
        .then((response) => {
            this.props.getTasks();
        })
        .catch((error) => {
        console.log(error);
        });
    }

    render() { 
        return (
            <Container>    
                <Form onSubmit={(e) => this.createTask(e)}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='title'>Task Title</Label>
                                <Input required onChange={(e) => this.handleInputChange(e)} type='text' id='title' name='title'></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='description' >Task Description</Label>
                                <Input required onChange={(e) => this.handleInputChange(e)} type='text' id='description' name='description'></Input>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='author'>Task Author</Label>
                                <Input required onChange={(e) => this.handleInputChange(e)} type='select' id='author' name='author'>
                                    <option value=""></option>
                                    <option value="Pierre">Pierre</option>
                                    <option value="Nicolas">Nicolas</option>
                                    <option value="Julien">Julien</option>
                                    <option value="Aurélie">Aurélie</option>
                                </Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button>Add Task</Button>
                        </Col>    
                    </Row>                
                    
                </Form>
            </Container> 
        )
    }
}
 
export default CreateTask;