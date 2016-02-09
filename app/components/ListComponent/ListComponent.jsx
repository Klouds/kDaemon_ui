import React from 'react'

export default class ListComponent extends React.Component {
	constructor(props) {
		super(props)

		const {mode} = this.props

	}
	render() {
		let content = this.renderListComponent()

		return (
			<div className='listComponent'>{content}</div>
		)
	}

	renderListComponent() {
		return (
			<h1 className='header'> List of {this.props.mode} </h1>
		)
	}
}