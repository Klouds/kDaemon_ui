import React from 'react'
import ListItems from './ListItems.jsx'

export default class ListComponent extends React.Component {
	constructor(props) {
		super(props)

		const {nav, mode, value, itemClick, addClick} = this.props

	}

	render() {
		let content = this.renderListComponent()
		return (
			<div className='listComponent'>
			<h1 className='header'> List of {this.props.nav} </h1>{content}</div>
		)
	}

	renderListComponent() {
		let object = this.props.value
		
		let items = [];

		for (let key in object) {
			if (object.hasOwnProperty(key)) {
				items = items.concat(object[key])
			}
		}

		return (
			<div >
				<div onClick={this.props.addClick} className='add-button' />				
				<ListItems 
					items={items}
					itemClick={this.props.itemClick} />
				
			</div>
		)
	}
}