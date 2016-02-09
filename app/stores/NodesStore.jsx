import alt from '../libs/alt'
import NodesActions from '../actions/NodesActions'

class NodesStore {
	
	constructor() {
		this.bindActions(NodesActions)

		this.nodes = []
	}
	create() {

	}
	update() {

	}
	delete() {

	}
}

export default alt.createStore(NodesStore, 'NodesStore')