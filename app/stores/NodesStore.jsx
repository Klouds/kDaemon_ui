import alt from '../libs/alt'
import NodesActions from '../actions/NodesActions'

class NodesStore {
	
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

export default alt.createStore(NodesStore, 'NodesStore')