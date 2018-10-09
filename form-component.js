App.Components.FormComponent = (function(safeEval){
    return class FormComponent extends React.Component {
        update(location){
            var context = this
            return function(ev){
                let value = ev.target.value
                safeEval.call(context, "this.state." + location + "=value", {value})
            }
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
