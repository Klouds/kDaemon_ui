import React from 'react'
import ListItems from './ListItems.jsx'

export default class ListComponent extends React.Component {
	constructor(props) {
		super(props)

		const {nav, mode, value, itemClick} = this.props

	}

	render() {
		let content = this.renderListComponent()
		return (
			<div className='listComponent'>{content}</div>
		)
	}

	renderListComponent() {
		let object = this.props.value
		
		let items = [];

		let key
		let list
		for (key in object) {
			if (object.hasOwnProperty(key)) {
				items = items.concat(object[key])
			}
		}

		return (
			<div>
				<h1 className='header'> List of {this.props.nav} </h1>
				<ListItems items={items}
					itemClick={this.props.itemClick} />
			</div>
		)
	}
}