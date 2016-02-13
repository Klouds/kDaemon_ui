//Container class for displaying all items in the list
import React from 'react'
import ListItem from './ListItem.jsx'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class ListItems extends React.Component {
	constructor(props) {
		super(props)

		const {items, itemClick} = this.props
	}

	render() {
		
		return (

				<ReactCSSTransitionGroup component='ul' className='list'
					transitionName='example'
					transitionAppear={true}
					transitionAppearTimeout={1}
					transitionEnterTimeout={300} 
					transitionLeaveTimeout={300}>
					
					{this.props.items.map(item => {
							return <ListItem key={item.id} 
									item={item} 
									itemClick={this.props.itemClick} />
						})
					}
				</ReactCSSTransitionGroup>
				
		)
	}
}