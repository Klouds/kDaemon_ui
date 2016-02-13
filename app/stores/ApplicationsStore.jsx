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

		application.id = application.id
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

	update(updatedApplication) {
		const applications = this.applications.map(application => {
			if (application.id === updatedApplication.id) {
				return Object.assign({}, application, updatedApplication)
			}

			return application
		})

		this.setState({applications})
	}

	delete(id) {
		this.setState({
			applications: this.applications.filter(application => application.id !== id)
		})
	}
}

export default alt.createStore(ApplicationsStore, 'ApplicationsStore')