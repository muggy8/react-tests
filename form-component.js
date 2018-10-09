App.Components.FormComponent = (function(safeEval){
    return class FormComponent extends React.Component {
        constructor(){
            super()
            this.updateCache = {} // this is public to give future ability to clear the cashe if needed
        }

        update(location){
            var context = this
            return this.updateCache[location] || (this.updateCache[location] = function(ev){
                let value = ev.target.value
                safeEval.call(context, "this.state." + location + "=value", {value})
            })
        }
    }
})(function(s, v = null){
    if (v){
        with(v){
            return eval(s)
        }
    }
    return eval(s)
})
