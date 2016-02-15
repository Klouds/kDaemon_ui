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
import Socket from '../socket.js';

export default class App extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			nav: 'nodes',
			mode: 'show',
			selectedItem: {},
			currentStore: ApplicationsStore,
		}
	}

	componentDidMount() {
		let ws = new WebSocket('ws://192.168.100.133:4000/ws')
    	let socket = this.socket = new Socket(ws); 
    	socket.on('connect', this.onConnect.bind(this));

    	//Monitors 
    	socket.on('nodes add', this.onNodeAdd.bind(this));
    	socket.on('nodes remove', this.onNodeRemove.bind(this));
    	socket.on('nodes edit', this.onNodeEdit.bind(this));
    	socket.on('applications add', this.onApplicationAdd.bind(this));
    	socket.on('applications remove', this.onApplicationRemove.bind(this));
    	socket.on('applications edit', this.onApplicationEdit.bind(this));   	
    	socket.on('containers add', this.onContainerAdd.bind(this));
    	socket.on('containers remove', this.onContainerRemove.bind(this));
    	socket.on('containers edit', this.onContainerEdit.bind(this));

	}

	onNodeAdd(message) {
		NodesActions.create(message)
		this.forceUpdate()
	}

	onNodeRemove(message) {
		NodesActions.delete(message.id)
		this.forceUpdate()
	}

	onNodeEdit(message) {
		NodesActions.update(message)
		this.forceUpdate()
	}

	onApplicationAdd(message) {
		ApplicationsActions.create(message)
		this.forceUpdate()
	}

	onApplicationRemove(message) {
		ApplicationsActions.delete(message.id)
		this.forceUpdate()
	}

	onApplicationEdit(message) {
		ApplicationsActions.update(message)
		this.forceUpdate()
	}

	onContainerAdd(message) {
		ContainersActions.create(message)
		this.forceUpdate()
	}

	onContainerRemove(message) {
		ContainersActions.delete(message.id)
		this.forceUpdate()
	}

	onContainerEdit(message) {
		ContainersActions.update(message)
		this.forceUpdate()
	}

	onConnect() {
		this.setState({connected: true});
		this.changeNav(this.state.nav)  	
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


				<AltContainer 
					stores={[this.state.currentStore]}
					inject={{
						value: () => [value]
				}}
				>
					<ListComponent 
						nav={this.state.nav}	
						mode={this.state.mode}
						itemClick={this.itemClicked.bind(this)} 
						addClick={this.addClick.bind(this)} /> 
									
					<ViewComponent itemId={this.state.selectedItem} 
							mode={this.state.mode}
							editButton={this.editClicked.bind(this)}
							saveButton={this.saveEdit.bind(this)} 
							deleteButton={this.deleteSelected.bind(this)} />
				</AltContainer>
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

	getAppropriateStoreActions(nav){
		if (nav === 'containers') {
			return ContainersActions
		} else if (nav === 'nodes') {
			return NodesActions
		} else if (nav === 'applications') {
			return ApplicationsActions
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
	}

	addClick() {
		let newItem = {
				name: 'new ' + this.state.nav
		}

		if (this.state.nav === 'applications') {
			ApplicationsActions.create(newItem)
		} else if (this.state.nav === 'containers') {
			ContainersActions.create(newItem)
		} else if (this.state.nav === 'nodes') {
			NodesActions.create(newItem)
		}

		this.forceUpdate()
	}
	//Change navigation state
	changeNav(nav) {

		//unsubscribe old nav
		let actions = this.getAppropriateStoreActions(nav)
		actions.deleteAll()
		this.socket.emit(`${this.state.nav} unsubscribe`);

		//change the state
		this.setState({nav})

		//change current store
		this.selectAppropriateStore(this.state.nav)


		//subscribe new nav    	
    	this.socket.emit(`${nav} subscribe`);  

		//deselect item
		this.setState({
			selectedItem: {},
			mode: 'show'})
	}

	//Clicks an item
	itemClicked(id) {
		this.setState(
			{
				selectedItem: id,
				mode: 'show'	
			})
	}

	//Edit button
	editClicked() {
		if (this.state.mode !== 'edit'){
			this.setState({mode:'edit'})
		} else {
			this.setState({mode:'show'})
		}
	}

	//Save edited item
	saveEdit(item) {
		if (this.state.nav === 'applications') {
			ApplicationsActions.update(item)
		} else if (this.state.nav === 'containers') {
			ContainersActions.update(item)
		} else if (this.state.nav === 'nodes') {
			NodesActions.update(item)
		}
	}

	//Delete selected item
	deleteSelected(id) {
		if (this.state.nav === 'applications') {
			ApplicationsActions.delete(id)
		} else if (this.state.nav === 'containers') {
			ContainersActions.delete(id)
		} else if (this.state.nav === 'nodes') {
			NodesActions.delete(id)
		}

		this.selectedItem = ''
		this.setState({mode:'show'})
	}

}