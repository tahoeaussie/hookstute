import React, { useState } from 'react';
import { Form, Text, Select, Option } from 'informed';
import { createForm, displayForm, formReset, returnSubmit } from './forms.js';

const Gripe = ({ onSubmit }) => {
	const formInputs = [ {title: 'Name'}, {title: 'City'},{title: 'Price'},{title: 'Gripe', type: 'textarea'},{title: 'Provider'}];

	const gripeForm = createForm(formInputs);

	return (
		<div className="addGripe">
			<form id="gripe-form" className="pure-form pure-form-aligned" onSubmit={e => {
				e.preventDefault();
				onSubmit({
					who: gripeForm[0].input.value,
					company: gripeForm[4].input.value,
					complaint: gripeForm[3].input.value,
					city: gripeForm[1].input.value,
					price: gripeForm[2].input.value
					});

					formReset(gripeForm)
			}}>
				Add a Gripe
				{ displayForm(gripeForm) }
				<input type="submit" value="Submit" />
			</form>
		</div>
	)

}

export default Gripe;