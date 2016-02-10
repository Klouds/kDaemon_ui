import React from 'react'

export default class ListComponent extends React.Component {
	constructor(props) {
		super(props)

		const {nav, mode, value} = this.props

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
				<ul>
				{items.map(item => {
						return <li key={item.id}>{item.name}</li>
						console.log(item.name)
					})
				}
				</ul>
			</div>
		)
	}
}