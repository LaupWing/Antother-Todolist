export class TodoObj{
    constructor(title, description, completed = false){
        this.title = title
        this.description = description
        this.completed = completed
    }
}

export class ElementAttribute {
    constructor(attrName, attrValue){
        this.name = attrName
        this.value= attrValue
    }
}
