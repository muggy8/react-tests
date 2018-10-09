App.Components.FormComponent = (function(){
    return class FormComponent extends React.Component {
        constructor(props, refs, updater){
            super(props, refs, updater)
            this.updateCache = {} // this is public to give future ability to clear the cache if needed
        }

        update(location){
            var context = this
            return this.updateCache[location] || (this.updateCache[location] = function(ev){
                // let value = ev.target.value
                context.setState({[location]: ev.target.value})
            })
        }
    }
})()
