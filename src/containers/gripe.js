import React, { useState } from 'react';
import { Form, Text, Select, Option } from 'informed';
import { formItems, inputWrap, formReset } from './forms.js';

const Gripe = ({ onSubmit }) => {
	const formInputs = [ {title: 'Name'}, {title: 'City'},{title: 'Price'},{title: 'Gripe', type: 'textarea'},{title: 'Provider'},{title: 'Extra'} ];

	const gripeInputs = formItems(formInputs);

	return (
		<div className="addGripe">
			<form id="gripe-form" className="pure-form pure-form-aligned" onSubmit={e => {
				e.preventDefault();
				onSubmit({
					who: gripeInputs[0].input.value,
					company: gripeInputs[4].input.value,
					complaint: gripeInputs[3].input.value,
					city: gripeInputs[1].input.value,
					price: gripeInputs[2].input.value
					});
					formReset(gripeInputs)
			}}>
				Gripe Input Form
				{	gripeInputs.map((p,i) => {
						return inputWrap(p)
					})
				}
				<input type="submit" value="Submit" />
			</form>
		</div>
	)

}

export default Gripe;