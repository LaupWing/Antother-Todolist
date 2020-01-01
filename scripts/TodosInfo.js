import Component from './Component.js'
import {TodoObj} from './ObjGenerator.js'
import App from './App.js'

class TodosInfo extends Component{
    totalTodos = []
    output

    set todoList(list){
        this.totalTodos = list
        this.output = `
            <div>
                <h2>Completed ${this.totalCompleted} / ${list.length}</h2>
                <form>
                    <input type="text" placeholder="Title" name="title"/>
                    <textarea name="description">
                    </textarea>
                    <button>Submit</button>
                </form>
            </div>    
            ` 
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

    handleSubmit(event){
        event.preventDefault()
        const title = event.target.title.value.trim()
        const description = event.target.description.value.trim()
        const newObj = new TodoObj(title, description)

        const updatedList = [...this.totalTodos, newObj]
        this.todoList = updatedList
        App.addTodo(newObj)
        this.renderContent(document.querySelector('.info'))
    }

    renderContent(container){
        container.innerHTML = this.output
        container.querySelector('form').addEventListener('submit', this.handleSubmit.bind(this))
    }

    render(){
        const container = this.createRootElement('div', ['info'])
        this.renderContent(container)
    }
}

export default TodosInfo