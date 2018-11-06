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
			return (
			<div>
				{ line.title }: <input {...line.input} />
			</div>)		
}

export const formItems = form => {
	return form.map((item,i) => {
		return { input: useInputValue(''), ...item}
	})

}

