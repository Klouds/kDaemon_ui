import alt from '../libs/alt'
import ApplicationsActions from '../actions/ApplicationsActions'

class ApplicationsStore {
	
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

export default alt.createStore(ApplicationsStore, 'ApplicationsStore')