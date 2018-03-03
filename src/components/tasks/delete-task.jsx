import React from 'react';
import { Button } from 'reactstrap';
import Axios from 'axios';


const DeleteTask = (props) => {
    const { id, path, getTasks } = props;
    
    const deleteTask = (e) => {
        e.preventDefault();
        let config = {
            headers: {
                'accept':'application/ld+json'
            }
        }
        return Axios.delete(path, config)
        .then((response) => {
            console.log(response)
            getTasks();
        })
        .catch((error) => {
        console.log(error);
          });
    }
    return (
        <Button onClick={(e) => deleteTask(e)}>x</Button>
    )

}
 
export default DeleteTask;