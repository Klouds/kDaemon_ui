import React from 'react'
import NavBarComponent from './NavBarComponent/NavBarComponent.jsx'
import ListComponent from './ListComponent/ListComponent.jsx'
import ViewComponent from './ViewComponent/ViewComponent.jsx'

export default class App extends React.Component {

	render() {
		return (
			<div className='mainDiv'>
				<NavBarComponent />
				<ListComponent />
				<ViewComponent />
			</div>
		)
	}
}