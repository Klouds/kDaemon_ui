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
	update() {

	}
	delete() {

	}
}

export default alt.createStore(ContainersStore, 'ContainersStore')