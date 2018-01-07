var React = require('react');

class Battle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playerOneName: '',
			playerTwoName: '',
			playerOneImage: null,
			playerTwoImage: null
		};
		this.updateLanguage = this.updateLanguage.bind(this);
	}

	handleSubmit(id, username) {
		this.setState(function() {
			var newState = {};
			newState[id + 'name'] = username;
			newState[id + 'Image'] = 'https:'; //TODO
			return {
				
			}
		});
	} 
	render() {
		return (
			<div>
			Battle!
			</div>
			)
	}
}

module.exports = Battle;