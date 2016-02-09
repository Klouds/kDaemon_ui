import React from 'react'

export default class ListComponent extends React.Component {
	constructor(props) {
		super(props)

		const {nav, mode} = this.props

	}
	render() {
		let content = this.renderListComponent()

		return (
			<div className='listComponent'>{content}</div>
		)
	}

	renderListComponent() {
		return (
			<div>
				<h1 className='header'> List of {this.props.nav} </h1>
				<span>{this.props.mode}'ing'</span>
			</div>
		)
	}
}