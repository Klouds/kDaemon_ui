import alt from '../libs/alt'
import NodesActions from '../actions/NodesActions'
import uuid from 'node-uuid'

class NodesStore {
	
	constructor() {
		this.bindActions(NodesActions)

		this.nodes = []
	}

	create(node) {
		const nodes = this.nodes

		node.id = uuid.v4() || node.id
		node.name = node.hostname || ''
		node.hostname = node.hostname || ''
		node.d_ipaddr = node.d_ipaddr || ''
		node.d_port = node.d_port || ''
		node.p_ipaddr = node.p_ipaddr || ''
		node.p_port = node.p_port || ''

		this.setState({
			nodes: nodes.concat(node)
		})

		return node
	}
	update() {

	}
	delete() {

	}
}

export default alt.createStore(NodesStore, 'NodesStore')