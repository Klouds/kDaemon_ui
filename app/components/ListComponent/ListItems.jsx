//Container class for displaying all items in the list
import React from 'react'
import ListItem from './ListItem.jsx'

export default class ListItems extends React.Component {
	constructor(props) {
		super(props)

		const {items, itemClick} = this.props
	}

	render() {
		
		return (
			<ul className='list'>
				{this.props.items.map(item => {
						return <ListItem key={item.id} 
								item={item} 
								itemClick={this.props.itemClick} />
					})
				}
			</ul>
		)
	}
}