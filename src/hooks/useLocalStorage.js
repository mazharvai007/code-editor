import { useEffect, useState } from 'react';

const PREFIX = 'code-editor';

const useLocalStorage = (key, initialValue) => {
	const prefixedKey = PREFIX + key;

	const [value, setValue] = useState(() => {
		// Get data from localStorage of the reference key
		const jsonValue = localStorage.getItem(prefixedKey);

		// The value will parse as a JSON
		if (jsonValue != null) return JSON.parse(jsonValue);

		/*
            The initialValue will be return as a function if we write like JS
            HTML, and CSS code will get as it is we write
        */
		if (typeof initialValue === 'function') {
			return initialValue();
		} else {
			return initialValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(prefixedKey, JSON.stringify(value));
	}, [prefixedKey, value]);

	return [value, setValue];
};

export default useLocalStorage;
