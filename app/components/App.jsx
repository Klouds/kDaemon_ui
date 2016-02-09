import React from 'react'
import NavBarComponent from './NavBarComponent/NavBarComponent.jsx'
import ListComponent from './ListComponent/ListComponent.jsx'
import ViewComponent from './ViewComponent/ViewComponent.jsx'

export default class App extends React.Component {

	render() {
		return (
			<div className='mainDiv'>
				<NavBarComponent 
					onNodesClick={this.nodesButtonClicked} 
					onAppsClick={this.applicationsButtonClicked}
					onContainersClick={this.containersButtonClicked} 
				/>
				<ListComponent />
				<ViewComponent />
			</div>
		)
	}

	//Nodes button clicked function
	nodesButtonClicked() {
		console.log("clicked node button")
	}

	//Applications button clicked function
	applicationsButtonClicked() {
		console.log("clicked application button")
	}

	//Containers button clicked function
	containersButtonClicked() {
		console.log("clicked containers button")
	}
}