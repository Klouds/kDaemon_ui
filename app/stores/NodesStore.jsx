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

		node.id = node.id
		node.name = node.name || ''
		node.d_ipaddr = node.d_ipaddr || ''
		node.d_port = node.d_port || ''

		this.setState({
			nodes: nodes.concat(node)
		})

		return node
	}
	update(updatedNode) {
		console.log(updatedNode)
		const nodes = this.nodes.map(node => {
		
			if (node.id === updatedNode.id) {
				return Object.assign({}, node, updatedNode)
			}

			return node
		})
		
		this.setState({nodes})
	}

	delete(id) {
		this.setState({
			nodes: this.nodes.filter(node => node.id !== id)
		})
	}
}

export default alt.createStore(NodesStore, 'NodesStore')