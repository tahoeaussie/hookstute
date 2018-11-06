import React, { useState } from 'react';
import { Form, Text, Select, Option } from 'informed';
import * as forms from './forms.js';

const Filters = ({ onSubmit, onReset }) => {
	const [ display, setDisplay ] = useState(false);
	const { resetValue, ...search } = forms.useInputValue('');

	return (
		<div className="filters">
			<div className="addFilter" onClick={() => setDisplay(!display)}  style={{display: display ? 'none' : 'block'}}>+ Add Filter</div>
				<div className="filterAdditions" style={{display: display ? 'block' : 'none'}}>
					<form id="complaint-form" className="pure-form pure-form-aligned">
						<input {...search} />
						<button onClick={e => {e.preventDefault(); onSubmit(search.value)}}>Search</button>
						<button onClick={e => {e.preventDefault(); onReset(); resetValue()}}>Reset</button>
					</form>
				</div>
			</div>
	)

/*	return (
		<div className="filters">
			<div className="addFilter" onClick={() => setDisplay(!display)}  style={{display: display ? 'none' : 'block'}}>+ Add Filter</div>
				<div className="filterAdditions" style={{display: display ? 'block' : 'none'}}>
					<Form id="complaint-form" className="pure-form pure-form-aligned">
					{({ formState }) => (
					<fieldset>
					<div className="pure-control-group">
						<label htmlFor="comp-name"><div>First name:</div></label>
						<Text field="name" id="comp-name" />
					</div>
					<div className="pure-control-group">
						<label htmlFor="comp-last">Last name:</label>
						<Text field="surname" id="comp-last" />
					</div>
					<div className="pure-control-group">
					<label htmlFor="select-status">Gripe Type:</label>
					  <Select field="status" id="select-status">
					    <Option value="" disabled>Select One...</Option>
					    <Option value="install">Install Issue</Option>
					    <Option value="slow">Slowness</Option>
					    <Option value="complicated">Complicated</Option>
					  </Select>
					  </div>
					 {
					 		formState.values.status === 'install' ?
					 		<React.Fragment>
								<label htmlFor="dynamic-spouse">Spouse name:</label>
								<Text field="spouse" id="dynamic-spouse" />
					 		</React.Fragment>
					 		: 
							null
					 }
					 <div className="pure-controls">
					<button type="submit" className="pure-button pure-button-primary" style={{margin: '0 auto'}} onClick={() => onSubmit(); setDisplay(!display)}>
						Add filter
					</button>
					</div>
					</fieldset>
					)}
					</Form>
				</div>
			</div>
	)
	*/

}

export default Filters;