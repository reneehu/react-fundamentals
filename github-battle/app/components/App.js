var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav />
					<Switch>
						<Route path='/' exact component={Home} />
						<Route path='/popular' component={Popular} />
						<Route path='/Battle' component={Battle} />
						<Route render={function () {
							return <p>Not Found</p>
						}} />
					</Switch>
				</div>
			</Router>
		)
	}
}

module.exports = App;