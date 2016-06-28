
require('../../sass/dropdown/_default.scss');

import React from 'react';


function each(obj, callback){
	return (Array.isArray(obj))? forArray(obj, callback):forObject(obj, callback);
}
function forArray(obj, callback){
	return obj.map(callback);
}
function forObject(obj, callback){
	return Object.keys(obj).map(callback);
}

function renderOptGroups (selectBoxId, optGroup){
	return (
		each(optGroup, function(optGroupKey){return (
	 		<optgroup label={optGroupKey}>
			{
				renderOptions(selectBoxId, optGroup[optGroupKey])
			}
			</optgroup>
		)})
	)
}

function isFirstKeyString(obj){
	var strFirstKey = Object.keys(obj)[0];
	var innerObject = obj[strFirstKey];
	return (typeof innerObject === 'string')
}

function renderOptions (selectBoxId, option){
	return (
		each(option, function(eachOption, key){return (										
			<option 
				value={eachOption} 
				data-key={selectBoxId + key} 
				key={selectBoxId + key}	
				>
				{option[eachOption]}
			</option>
		)})
	)
}

class Dropdown extends React.Component {	

	constructor /* function */ (props) {
		super(props);	
	}

	_onSelectedBoxChange (event){// handle ENTER KEY.....
		return;
	}

	_onSelectedItemClick (event){// handle ENTER KEY.....
		return;
	}

	_onLiClick (event){// handle ENTER KEY.....
		return;
	}


	render () {    
		var props = this.props;
		var options = props.options;
		var selectBoxId = props.selectBoxId;
		var selectedValue = props.selectedValue;
		return (
			<div className="dropdown">
				<label htmlFor={this.props.selectBoxId}>{this.props.selectBoxLabel}</label>

				<select 
					name={this.props.selectBoxName}
					className={this.props.selectBoxClassName}
					id={selectBoxId}
					onChange={this._onSelectBoxChange} 
					defaultValue={selectedValue}
					>
					{
						each(options, function(optGroupOrOption){ 


							if(isFirstKeyString(optGroupOrOption) === true) {
								return renderOptions(selectBoxId, optGroupOrOption);
							}else{
								return renderOptions(selectBoxId, optGroupOrOption);
							}
							
								/*													
							if(isFirstKeyString(optGroupOrOption) === true) {
								return renderOptions(selectBoxId, optGroupOrOption);
							}else{
								return renderOptions(selectBoxId, optGroupOrOption);
							}	
							*/

							/*
								return (isFirstKeyString(optGroupOrOption) === true ? renderOptions(selectBoxId, optGroupOrOption) : renderOptGroups(selectBoxId, optGroupOrOption))
							*/
						})
					}
					
				</select>

				<p onClick={this._onSelectedItemClick} className="selectedItem">{this.props.selectedText}</p>

				<ul>


				</ul>
			</div>
    	)
  	} 	
}

Dropdown.propTypes = {	
	selectBoxId: 		React.PropTypes.string.isRequired,
	selectBoxLabel: 	React.PropTypes.string.isRequired,		
	selectBoxName:		React.PropTypes.string.isRequired,
	selectBoxClassName: React.PropTypes.string.isRequired,			
	options: 			React.PropTypes.array.isRequired,
	selectedValue: 		React.PropTypes.string.isRequired,
	selectedText: 		React.PropTypes.string.isRequired
}


Dropdown.defaultProps = {

	selectBoxId: 'selectComponent',
	selectBoxLabel:'I am a dropdown',
	selectBoxName: 'selectComponent',	
	selectBoxClassName: 'selectBoxDropDown',
	options:[{
		'':'Please select',	
		'apple':'Lovely green apple',
		'orange':'juicy orange',
		'banana':'fat banana'
	}],	
	/*
	options:[{
		'groupX':{	
			'':'Please select',	
			'apple':'Lovely green apple',
			'orange':'juicy orange',
			'banana':'fat banana'
		}
	}],*/
	selectedValue:'',
	selectedText:'Please select'
}

export default Dropdown;