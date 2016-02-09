import React from 'react'

export default class ListComponent extends React.Component {
	render() {
		let content = this.renderListComponent()

		return (
			<div className='listComponent'>{content}</div>
		)
	}

	renderListComponent() {
		return (
			<h1 className='list-header'> List Name </h1>
		)
	}
}