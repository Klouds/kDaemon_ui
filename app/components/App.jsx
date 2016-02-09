import React from 'react'

import NavBarComponent from './NavBarComponent/NavBarComponent.jsx'
import ListComponent from './ListComponent/ListComponent.jsx'
import ViewComponent from './ViewComponent/ViewComponent.jsx'

import ApplicationsStore from '../stores/ApplicationsStore.jsx'
import ApplicationsActions from '../actions/ApplicationsActions.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nav: 'nodes',
			mode: 'show',
			mock_applications: [
				{
					name:'ghost_blog',
					docker_image: 'ghost',
					exposed_ports: ["2368"],
					dependencies: [],
					is_enabled: true
				},
				{
					name:'codiad',
					docker_image: 'quantumobject/docker-codiad',
					exposed_ports: ["80"],
					dependencies: [],
					is_enabled: true
				}
			]
		}
	}

	componentWillMount() {
		this.loadApplicationsIntoStore();
	}

	loadApplicationsIntoStore() {
		this.state.mock_applications.map(app => {
			ApplicationsActions.create(app)
		})
	}

	render() {
		return (
			<div className='mainDiv'>
				<NavBarComponent 
					onNodesClick={this.changeNav.bind(this,'nodes')} 
					onAppsClick={this.changeNav.bind(this, 'applications')}
					onContainersClick={this.changeNav.bind(this, 'containers')} 
				/>
				{(this.state.mode === 'show') ? 
				<ListComponent 
					nav={this.state.nav}	
					mode={this.state.mode}/> : 
					'' 
				}

				<ViewComponent />
			</div>
		)
	}

	//Change navigation state
	changeNav(nav) {
		//change the state
		this.setState({nav})
	}

}