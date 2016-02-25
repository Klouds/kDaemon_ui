import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class ViewComponent extends React.Component {
	constructor(props) {
		super(props)

		const {itemId, value, nav, mode, editButton, LaunchButton, saveButton, deleteButton} = this.props

		this.keys = []
		this.workingItem = {}
		this.item = {};
		this.items = [];
		
	}

	componentWillMount() {

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

		let mode = this.props.mode

		this.updateObjects()
		this.pickItem()

		let keys = this.updateKeys()

		var header = []


		let editdisplay

		if (mode === 'edit') {
			editdisplay = 'cancel-button'
		} else if (keys.length !== 0 ) {
			editdisplay = 'edit-button'
		} else {
			editdisplay = 'NAC' //NOT A CLASS
		}

	  	header.push(
	  		<tr>
				<th> Key </th>
				<th> Value 
				<div className={editdisplay}
					onClick={this.props.editButton}/>
				{(mode === 'edit') ? <div onClick={this.deleteSelected.bind(this)} 
										className='delete-button'/> : '' }
				</th>
			</tr>
		)
		
		var body = [];
	 	
	 	if (mode === 'show') {
		 	{keys.map(key => {
					body.push (
						<tr key= {this.item[key].id}>						
							<td>{key} </td>
							<td>{this.item[key].toString()} </td>
							
						</tr>
					)
						
				})
			}
		} else if (mode === 'edit') {
			{keys.map(key => {
					body.push (
						<tr key= {this.item[key].id}>						
							<td>{key} </td>
							<td>
								{
									(key === 'id') ? this.item[key].toString()
									: <input 	type="text"
											name={key}
											ref={key}
											autofocus={true}
											defaultValue={this.item[key].toString()}
											onBlur={this.finishEdit.bind(this)}
											onKeyPress={this.checkEnter.bind(this)} />									 
									
								}
							</td>
							
						</tr>
					)
						
				})
			}
			//push a save button
			body.push (
				<tr>
				<td></td>
				<td> <button onClick={this.saveEdit.bind(this)}> Save </button></td>
				</tr>
			)

			//push a launch button on containers
			if (this.props.nav === 'containers' && this.item.status !== 'UP') {
								

				body.push (<tr>
				<td></td>
				<td> <button onClick={this.launchButton.bind(this)}> Launch </button></td>
				</tr>
				)

			}

		}


		
		return (
				<table>
					<col width='20%'/>		
					<thead>{header}</thead>
					<ReactCSSTransitionGroup component='tbody'
					transitionAppear={true}
					transitionAppearTimeout={300}
					transitionName='example'
					transitionEnterTimeout={500} 
					transitionLeaveTimeout={300}>
						{body}
					</ReactCSSTransitionGroup>
			
				</table>
		)
	}



	deleteSelected() {
		this.props.deleteButton(this.props.itemId)
	}

	updateObjects() {
		let object = this.props.value

		this.items = [] 

		for (let key in object) {
			if (object.hasOwnProperty(key)) {
				this.items = this.items.concat(object[key])
			}
		}
	}

	pickItem() {
		this.item = {}
		this.items.map(item => {
				if (item.id === this.props.itemId) {
					this.item = item
					return
				}
			}
		)
	}

	updateKeys() {
		let keys = []

		if (this.item !== undefined) {
			for (var key in this.item) {
				keys = keys.concat(key)
			}
		}

		this.keys = keys

		return keys
	}

	finishEdit(e) {
		this.workingItem[e.target.name] = e.target.value
	}

	checkEnter(e){
		if (e.key === 'Enter') {
			this.finishEdit(e)
		}
	}

	launchButton(id) {
		this.props.LaunchButton(this.item.id)
		this.props.editButton()

	}
	saveEdit() {
		this.workingItem.id = this.item.id
		this.props.saveButton(this.workingItem)
		this.props.editButton()
		this.workingItem = {}
	}


}