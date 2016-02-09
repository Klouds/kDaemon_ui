import React from 'react'
import NavBarComponent from './NavBarComponent/NavBarComponent.jsx'
import ListComponent from './ListComponent/ListComponent.jsx'

export default class App extends React.Component {

	render() {
		return (
			<div>
				<NavBarComponent />
				<ListComponent />
			</div>
		)
	}
}