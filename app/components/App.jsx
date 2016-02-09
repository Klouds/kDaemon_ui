import React from 'react'
import NavBarComponent from './NavBarComponent/NavBarComponent.jsx'
import ListComponent from './ListComponent/ListComponent.jsx'
import ViewComponent from './ViewComponent/ViewComponent.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			mode: 'nodes'
		}
	}
	render() {
		return (
			<div className='mainDiv'>
				<NavBarComponent 
					onNodesClick={this.changeState.bind(this,'nodes')} 
					onAppsClick={this.changeState.bind(this, 'applications')}
					onContainersClick={this.changeState.bind(this, 'containers')} 
				/>
				<ListComponent mode={this.state.mode} />
				<ViewComponent />
			</div>
		)
	}

	//Change application state
	changeState(mode) {
		//change the state
		this.setState({mode})

		//
	}

}