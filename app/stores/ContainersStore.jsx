import alt from '../libs/alt'
import ContainersActions from '../actions/ContainersActions'
import uuid from 'node-uuid'

class ContainersStore {
	
	constructor() {
		this.bindActions(ContainersActions)

		this.containers = []
	}
	create(container) {
		const containers = this.containers

		container.id = uuid.v4() || container.id
		container.name = container.name || ''
		container.application_id = container.application_id || ''

		this.setState({
			containers: containers.concat(container)
		})

		return container
	}
	update(updatedContainer) {
		const containers = this.containers.map(container => {
		
		if (container.id === updatedContainer.id) {
			return Object.assign({}, container, updatedContainer)
		}

		return container
		})
		
		this.setState({containers})
	}

	delete(id) {
		this.setState({
			containers: this.containers.filter(container => container.id !== id)
		})
	}
}

export default alt.createStore(ContainersStore, 'ContainersStore')