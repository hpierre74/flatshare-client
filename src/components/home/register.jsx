import React, { Component } from 'react';
import { Container, Row, Col, Label, Form, FormGroup, Input, Button } from 'reactstrap';
import axios from "axios";

class Register extends Component {
    constructor(props) {
        super(props);
        this._handleInputChange = this._handleInputChange.bind(this);
        this.state = {
            username:'',
            email:'',
            creationDate: new Date(),
            flat:null
        }
    }

    _handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    createUser(e) {
        e.preventDefault();
        return axios.post('http://localhost:8080/app_dev.php/flat_users', this.state, this.props.config)
        .then((response) => {
            console.log(response);
            
            //this.props.log();
        })
        .catch((error) => {
        console.log(error);
        });
    }

    render() { 
        return ( 
        <Container >
            <div className='panel panel-primary'>
                <h4 className='panel-heading'>Register</h4>
                <Form onSubmit={(e) => this.createUser(e)} className='panel-body'>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input 
                                    onChange={(e) => this._handleInputChange(e)} 
                                    type='text' 
                                    name='username' 
                                    id='username'
                                ></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor='email' >Email Adress</Label>
                                <Input 
                                    onChange={(e) => this._handleInputChange(e)} 
                                    type='email' 
                                    name='email' 
                                    id='email' 
                                ></Input>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button color='primary'>Register</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container> )
    }
}
 
export default Register;