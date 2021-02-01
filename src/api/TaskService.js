class TaskService {
    constructor() {
        this.tasks = [
            { id: 1, description: "Tarefa 1", whenTodo: "01/01/2030", done: false },
            { id: 2, description: "Tarefa 2", whenTodo: "02/01/2030", done: false },
            { id: 3, description: "Tarefa 3", whenTodo: "03/01/2030", done: false }
        ]

    }

    list() {
        return this.tasks;

    }
    delete(id) {
        this.tasks =  this.tasks.filter(task => task.id !== id);
    }
}

export default new TaskService();