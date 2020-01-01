class Component {
    constructor(renderHookId, shouldRender){
        this.hookId = renderHookId
        if(shouldRender){
            this.render()
        }
    }
    render(){} // this field is gonna be overwrited by the sub class which extends this class
    createRootElement(tag, cssClasses, attributes){
        const rootElement = document.createElement(tag)
        rootElement.className = cssClasses ? cssClasses.join(' ') : ''
        if (attributes && attributes.length > 0) {
            for (const attr of attributes) {
              rootElement.setAttribute(attr.name, attr.value);
            }
        }
        // Inserts the element after the last child of the hookId(parentNode)
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

export default Component