import React from 'react'

export default class ViewComponent extends React.Component {
	render() {
		let content = this.renderViewComponent()

		return (
			<div className='viewComponent'>
				{content}
			</div>
		)
	}

	renderViewComponent() {
		return (
			<h1 className='header'> View Window </h1>
		)
	}
}