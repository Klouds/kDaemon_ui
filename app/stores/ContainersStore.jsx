import alt from '../libs/alt'
import ContainersActions from '../actions/ContainersActions'

class ContainersStore {
	
	constructor() {
		this.bindActions(ContainersActions)

		this.containers = []
	}
	create() {

	}
	update() {

	}
	delete() {

	}
}

export default alt.createStore(ContainersStore, 'ContainersStore')