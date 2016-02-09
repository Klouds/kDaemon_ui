import React from 'react'

export default class NavBarComponent extends React.Component {
	constructor(props) {
		super(props)

		const {onNodesClick, onAppsClick, onContainersClick} = this.props
	}
	render() {
		let content = this.renderNavBar()

		return (
			<div className='navBar'>
				{content}
			</div>
		)
	}
	renderNavBar() {
		return ( 
			<div >
				<div className='navBar-logo' />
				<button className='navbar-element'
					onClick={ this.props.onNodesClick } > Nodes </button>
				<button className='navbar-element'
					onClick={ this.props.onAppsClick } > Applications </button>
				<button className='navbar-element'
					onClick={ this.props.onContainersClick } > Containers </button>
			</div>
		)
	}
}