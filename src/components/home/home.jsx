import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Register from './register.jsx';
import Login from './login.jsx';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }
    render() { 
        return ( 
            <Container>
                <h1 style={{padding:'5%'}} >Flatmates API</h1>
                <Row>
                    <Col>
                        <Register 
                            handleInputChange={this.props.handleInputChange} 
                            config={this.props.config} 
                            log={this.props.log}
                            isLogged={this.props.isLogged}
                        />
                    </Col>
                    <Col>
                        <Login 
                            handleInputChange={(e) => this.props.handleInputChange(e)} 
                            config={this.props.config} 
                            log={this.props.log}
                            isLogged={this.props.isLogged}
                        />
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default Home;