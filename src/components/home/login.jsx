import React, { Component } from 'react';
import { Container, Row, Col, Label, Form, FormGroup, Input, Button } from 'reactstrap';
import axios from "axios";

class Login extends Component {
    constructor(props) {
        super(props);
        this._handleInputChange = this._handleInputChange.bind(this);
        this.state = { 
            //isUser: true,
            flat_users:[],
            username:'',
            email:''
        }
    }
    componentWillMount() {
        this.getFlatUsers();
    }

    _handleInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    getFlatUsers(){
        return axios.get(
            'http://localhost:8080/app_dev.php/flat_users',
            this.props.config
        )
        .then((response) => {
            console.log(response.data['hydra:member']);
            
            this.setState({ flat_users: response.data['hydra:member'] });
        })
        .catch((error) => {
        console.log(error);
        });
    }

    verifyFlatUser(e, username, email) {
        e.preventDefault();
        
        return Object.values(this.state.flat_users).map((flat_user,index) => {
            return (username === flat_user.username && email === flat_user.email)?
                this.props.log(flat_user):false;
            
        })
    }

    render() { 
        return ( 
        <Container >
            <div className='panel panel-primary'>
                <h4 className='panel-heading'>Login</h4>
                <Form 
                    onSubmit={(e) => this.verifyFlatUser(e, this.state.username, this.state.email)} 
                    className='panel-body'>
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
                            <Button color='primary'>Login</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container> )
    }
}
 
export default Login;