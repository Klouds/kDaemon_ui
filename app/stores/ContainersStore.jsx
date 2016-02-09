import alt from '../libs/alt'
import ContainersActions from '../actions/ContainersActions'

class ContainersStore {
	
	constructor() {
		this.bindActions(LaneActions)

		this.lanes = []
	}
	create() {

	}
	update() {

	}
	delete() {

	}
}

export default alt.createStore(ContainersStore, 'ContainersStore')