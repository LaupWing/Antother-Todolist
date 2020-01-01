import TodosInfo from './TodosInfo.js'
import TodoList from './TodoList.js'

class App {
    static todos
    static list

    static init(){
        const list = new TodoList('app')
        const todos = new TodosInfo('info-container', list.todoList)
        this.todos = todos
        this.list = list
    }

    static addTodo(todo){
        this.list.addToList(todo)
    }
}

export default App