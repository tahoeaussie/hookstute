import React, { useState } from 'react';

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
			{ line.title }: <input {...line.input} />
		</div>)	
	}
}

export const formItems = form => {
	return form.map((item,i) => {
		let { resetValue, ...input } = useInputValue(''); 
		return { input: input, resetValue: resetValue, ...item}
	})

}

export const formReset = form => {
	form.map((item,i) => {
		item.resetValue();
	})
}

