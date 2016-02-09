import React from 'react'

export default class NavBarComponent extends React.Component {
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
			<div className='navBar-logo'></div>
		)
	}
}