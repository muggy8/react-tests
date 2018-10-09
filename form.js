App.Components.Form = (function({form, div, input, label, span}){
    return class Form extends App.Components.FormComponent{
        constructor(props, refs, updater){
            super(props, refs, updater)
            this.state = props.state || {}
            this.state.name
            this.state.age
        }
        render(){
            return form({onSubmit: ()=>false},
                label({},
                    span({}, "Name"),
                    input({type: "text", name: "name", onChange: this.update("this.state.name"), value: this.state.name}),
                ),
                label({},
                    span({}, "Age"),
                    input({type: "number", name: "age", onChange: this.update("this.state.age"), value: this.state.name}),
                ),
                input({type: "submit", value: "submit"}),
                div({},
                    `Hello ${this.state.name || "user"} you are ${this.state.age || "0"} years old`
                ),
            )
        }
    }
})(React.DOM)
