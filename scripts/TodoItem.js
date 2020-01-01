import Component from './Component.js'

class TodoItem extends Component{
    constructor(renderHookId, todo){
        super(renderHookId, false)
        this.todo = todo
        this.render()
    }

    toggleComplete(event){
        console.log(this)
        console.log(event.target)
        console.log('toggle completed')
    }

    render(){
        const prodEl = this.createRootElement('li', ['todo-item'])
        prodEl.innerHTML = ` 
            <div class=${this.todo.completed ? 'completed' :  ''}>
                <h2>${this.todo.title}<span>Check</span></h2>
                <p>${this.todo.description}</p>
            </div>
        `
        const checkOff = prodEl.querySelector('span')
        checkOff.addEventListener('click', this.toggleComplete.bind(this))
    }
}
export default TodoItem