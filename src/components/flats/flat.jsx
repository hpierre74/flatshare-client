import React, { Component } from 'react';
import { Container } from 'reactstrap';
import axios from 'axios';

class Flat extends Component {
    constructor(props) {
        super(props);
        this.baseURL = 'http://localhost:8080';
        this.state = {
            flat:[],
            tasks:[],
            flat_users:[]
        }
    }

    componentWillMount() {
        this.getUserData();        
    }
    getUserData(){
        axios.get(this.baseURL + this.props.flat_user.flat, this.props.config)
        .then((response) => {
            console.log(response.data);
            this.setState({ flat: response.data });
        })
        .catch((error) => {
            console.log(error, error.message)
        })
        axios.get(this.baseURL + this.props.flat_user.flat+'/tasks', this.props.config)
        .then((response) => {
            console.log(response.data);
            this.setState({ flat: response.data });
        })
        .catch((error) => {
            console.log(error, error.message)
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     console.log(this.state, prevState);
        
    // }

    render() { 
        return ( 
            <Container>
                <h2>Flat</h2>
                    {/* <Tasks 
                        config={this.config} 
                        log={this.LoginLogout}
                        isLogged={this.state.isLogged}
                    /> */}
            </Container>
        )
    }
}
 
export default Flat;