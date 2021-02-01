import React, { Component } from 'react';
import TaskService from '../api/TaskService';

class TaskListTable extends Component {

    constructor(props) {
        super(props);


        this.state = {
            tasks: []
        }

       this.onDeleteHandler =  this.onDeleteHandler.bind(this);
    }



    componentDidMount() {
        this.listTasks();

    }

    listTasks() {
        this.setState({ tasks: TaskService.list() });
    }

    onDeleteHandler(id) {
        TaskService.delete(id);
        this.listTasks();
    }

    render() {
        return (
            <div>
                <table className="table table-striped">
                    <TableHeader />
                    <TableBody 
                    tasks={this.state.tasks}
                    onDelete={this.onDeleteHandler}
                     />

                </table>
            </div>
        );
    }
}

const TableHeader = () => {
    return (
        <thead className="table-dark">
            <tr>
                <th scope="col">Status</th>
                <th scope="col">Descrição</th>
                <th scope="col">Data</th>
                <th scope="col">Ações</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    return (
        <tbody>
            {props.tasks.map(task =>
                <tr key={task.id}>
                    <td><input type="checkbox" checked={task.done}/> </td>
                    <td>{task.description}</td>
                    <td>{task.whenTodo}</td>
                    <td>
                        <input className="btn btn-primary" type="button" value="Editar"></input>
                        &nbsp;<input 
                        className="btn btn-danger" 
                        type="button" 
                        value="Excluir"
                        onClick= {() => props.onDelete(task.id)}
                        ></input>
                    </td>
                </tr>
            )}
        </tbody>


    )
}

export default TaskListTable;