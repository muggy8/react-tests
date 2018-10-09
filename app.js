const App = (function({div, h1, h2, h3, h4, a, p}){
	// lets do some good old fassioned dependency injection the angular way cuz why the heck not
    let components = {}
	return class App extends React.Component {
		render(){
			return div({ className: "test", title: "this is a test"},
				"Hello World",
                React.createElement(App.Components.Form)
			)
		}

        static get Components(){
            return components
        }
	}
})(React.DOM)
