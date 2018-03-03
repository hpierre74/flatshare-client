import React from 'react';
import DeleteTask from "./delete-task.jsx";
//import EditTask from "./edit-task.jsx";

const Task = (props) => {
    const { id, task, getTasks } = props;  
    return (
        <tr>
            <th scope="row">{id}</th>
            <td><b>{ task.title }</b></td>
            <td>{ task.description }</td>
            <td>{ task.author }</td>
            <td><small> { task.publicationDate } </small></td>
            <td><DeleteTask getTasks={getTasks} path={'http://localhost:8080/app_dev.php/tasks/'+ task.id} /></td>
            {/* 
            <td><Edit /></td>
            
             */}
        </tr> 
    )
}
 
export default Task;

