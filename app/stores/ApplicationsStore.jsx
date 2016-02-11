import alt from '../libs/alt'
import uuid from 'node-uuid'
import ApplicationsActions from '../actions/ApplicationsActions'

class ApplicationsStore {
	
	constructor() {
		this.bindActions(ApplicationsActions)

		this.applications = []
	}
	
	create(application) {
		const applications = this.applications

		application.id = uuid.v4() || application.id
		application.name = application.name || ''
		application.docker_image = application.docker_image || ''
		application.exposed_ports = application.exposed_ports || []
		application.dependencies = application.dependencies || []
		application.is_enabled = application.is_enabled || false

		this.setState({
			applications: applications.concat(application)
		})

		return application
	}

	update() {

	}

	delete() {

	}
}

export default alt.createStore(ApplicationsStore, 'ApplicationsStore')