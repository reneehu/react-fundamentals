var React = require('react');
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


class App extends React.Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<Nav />
					<Route path='/' exact component={Home} />
					<Route path='/popular' component={Popular} />
					<Route path='/Battle' component={Battle} />
				</div>
			</Router>
		)
	}
}

module.exports = App;