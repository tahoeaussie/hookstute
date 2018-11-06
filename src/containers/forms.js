import React, { useState } from 'react';

const formValues = {};

export const useInputValue = initialValue => {
	const [ value, setValue ] = useState(initialValue);

	return {
		value,
		onChange: e => setValue(e.target.value),
		resetValue: () => setValue('')
	};
};

export const inputWrap = line => {
	switch(line.type){
	case "textarea":
			return (
		<div>
			{ line.title }: <textarea {...line.input} />
		</div>)	
	break;
	default:
		return (
		<div>
			{ line.title }: <input key={line.title} {...line.input} />
		</div>)	
	}
}

export const createForm = form => {
	return form.map((item,i) => {
		let { resetValue, ...input } = useInputValue(''); 
		return { input: input, resetValue: resetValue, ...item}
	})
}

export const displayForm = form => {
	return form.map((p,i) => {
		return inputWrap(p)
	})
}

export const formReset = form => {
	form.map((item,i) => {
		item.resetValue();
	})
}

export const returnSubmit = form => {
	let response = form.map((row, i) => {
		return row.input.value
	})
	formReset(form);
	return response;
}

