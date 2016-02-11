import React from 'react'

export default class ViewComponent extends React.Component {
	constructor(props) {
		super(props)

		const {item} = this.props
	}

	render() {
		let content = this.renderViewComponent()

		return (
			<div className='viewComponent'>
				<h1 className='header'> View Window </h1>
				{content}
			</div>
		)
	}

	renderViewComponent() {
		let keys = []

		if (this.props.item !== undefined) {
			for (var key in this.props.item) {
				keys = keys.concat(key)
			}
		}

		var header = []

	  	header.push(
	  		<tr>
				<th> Key </th>
				<th> Value </th>
			</tr>
		)
		
		var body = [];
	 	
	 	{keys.map(key => {
				body.push (
					<tr key= {this.props.item[key].id}>						
						<td>{key} </td>
						<td>{this.props.item[key].toString()} </td>
						
					</tr>
				)
					
			})
		}
		
		return (
				<table>
					<col width='20%'/>		
					<thead>{header}</thead>
					<tbody>{body}</tbody>				
				</table>
		)
	}
}