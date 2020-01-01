import TodosInfo from './TodosInfo.js'
import TodoList from './TodoList.js'

class App {
    static todos

    static init(){
        const list = new TodoList('app')
        const todos = new TodosInfo('info-container', list.todoList)
        this.todos = todos
    }

    static addTodo(todo){
        this.todos.addTodo(todo)
    }
}

App.init()