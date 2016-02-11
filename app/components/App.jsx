import React from 'react'

import NavBarComponent from './NavBarComponent/NavBarComponent.jsx'
import ListComponent from './ListComponent/ListComponent.jsx'
import ViewComponent from './ViewComponent/ViewComponent.jsx'
import AltContainer from 'alt-container'

import ApplicationsStore from '../stores/ApplicationsStore.jsx'
import ApplicationsActions from '../actions/ApplicationsActions.jsx'
import NodesStore from '../stores/NodesStore.jsx'
import NodesActions from '../actions/NodesActions.jsx'
import ContainersStore from '../stores/ContainersStore.jsx'
import ContainersActions from '../actions/ContainersActions.jsx'

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nav: 'nodes',
			mode: 'show',
			selectedItem: {},
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
			],
			mock_nodes: [
				{
					hostname:"Host1",
			        d_ipaddr:"127.0.0.1",
			        d_port: "2375",
			        p_ipaddr:"127.0.0.1",
			        p_port:"2376"
				},
				{
					hostname:"Host2",
			        d_ipaddr:"192.168.100.133",
			        d_port: "2375",
			        p_ipaddr:"192.168.100.133",
			        p_port:"2376"
				}
			],
			mock_containers: [
				{
					name:'ghost_blog-ozzadar',
					application_id: '1'
				},
				{
					name:'codiad-faddat',
					application_id: '2'
				}
			],
			currentStore: ApplicationsStore,

		}
	}

	componentWillMount() {
		this.loadApplicationsIntoStore();
		this.loadNodesIntoStore();
		this.loadContainersIntoStore();
	}

	loadApplicationsIntoStore() {
		this.state.mock_applications.map(app => {
			ApplicationsActions.create(app)
		})
	}	

	loadNodesIntoStore() {
		this.state.mock_nodes.map(node => {
			NodesActions.create(node)
		})
	}	

	loadContainersIntoStore() {
		this.state.mock_containers.map(container => {
			ContainersActions.create(container)
		})
	}

	render() {

		let value = this.getStoreValue(this.state.nav);
		return (
			<div className='mainDiv'>
				<NavBarComponent 
					onNodesClick={this.changeNav.bind(this,'nodes')} 
					onAppsClick={this.changeNav.bind(this, 'applications')}
					onContainersClick={this.changeNav.bind(this, 'containers')} 
				/>

				{(this.state.mode === 'show') ? 
						<AltContainer 
							stores={[this.state.currentStore]}
							inject={{
								value: () => [value]
						}}
						>
						<ListComponent 
							nav={this.state.nav}	
							mode={this.state.mode}
							itemClick={this.itemClicked.bind(this)} /> 
						</AltContainer> : ''

				}	
				<ViewComponent item={this.state.selectedItem} />
			</div>
		)
	}

	getStoreValue(nav) {
		if (nav === 'containers') {
			return ContainersStore.getState().containers
		} else if (nav === 'nodes') {
			return NodesStore.getState().nodes
		} else if (nav === 'applications') {
			return ApplicationsStore.getState().applications
		}
	}
	selectAppropriateStore(nav) {
		let currentStore;

		if (nav === 'containers') {
			currentStore = ContainersStore
		} else if (nav === 'nodes') {
			currentStore = NodesStore
		} else if (nav === 'applications') {
			currentStore = ApplicationsStore
		}

		this.setState(currentStore)
	}
	//Change navigation state
	changeNav(nav) {
		//change the state
		this.setState({nav})

		//change current store
		this.selectAppropriateStore(nav)

		//deselect item
		this.setState({selectedItem: {}})
	}

	//Clicks an item
	itemClicked(item) {
		this.setState({selectedItem: item})
	}

}