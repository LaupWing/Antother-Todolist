import Component from './Component.js'
import {TodoObj,ElementAttribute} from './ObjGenerator.js'
import TodoItem from './TodoItem.js'

class TodoList extends Component{
    todoList = []

    constructor(renderHookId){
        super(renderHookId, false)
        this.containerId = 'todo-list'
        this.render()
        this.fetchList()
    }
    fetchList(){
        this.todoList = [
            new TodoObj(
                'Finishing the tutorials',
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laborum non sit ipsa voluptates dicta facere cupiditate dolore. Ratione id distinctio ut maxime ducimus iure labore impedit repellat fugit tenetur officia ipsam saepe rerum cumque, est, facilis a aspernatur aliquid.'
            ),
            new TodoObj(
                'Testing testing',
                'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut laborum non sit ipsa voluptates dicta facere cupiditate dolore. Ratione id distinctio ut maxime ducimus iure labore impedit repellat fugit tenetur officia ipsam saepe rerum cumque, est, facilis a aspernatur aliquid.',
                true
            ),
        ]
        this.renderList()
    }

    renderList(){
        for(const todo of this.todoList){
            new TodoItem(this.containerId, todo)
        }
    }

    render(){
        this.createRootElement('ul', ['list'],[new ElementAttribute('id', this.containerId)])
        if(this.todoList && this.todoList.length >0){
            this.renderList()
        }
    }
}

export default TodoList