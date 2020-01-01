import Component from './Component.js'

class TodosInfo extends Component{
    totalTodos = []
    output

    set todoList(list){
        this.totalTodos = list
        this.output = `<h2>Completed ${this.totalCompleted} / ${list.length}</h2>` 
    }

    get totalCompleted(){
        const competed = this.totalTodos.filter(todo=>todo.completed)
        return competed.length 
    }

    constructor(renderHookId, list){
        super(renderHookId, false)
        this.todoList = list
        this.render()
    }

    addTodo(todo){
        const updatedTodos = [...this.totalTodos]
        updatedTodos.push(todo)
        this.todoList = updatedTodos
    }

    render(){
        const container = this.createRootElement('div', ['info'])
        container.innerHTML = this.output
    }
}

export default TodosInfo