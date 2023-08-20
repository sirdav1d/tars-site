import axios from 'axios';
import React from 'react';

export default async function Test() {
	interface FormValues {
		merge_fields: {
			FNAME: string;
			PHONE: string;
		};
		email_address: string;
	}

	const payload: FormValues = {
		merge_fields: {
			FNAME: 'fullName',
			PHONE: 'phone',
		},
		email_address: 'email',
	};

	const data = await axios
		.post('http://localhost:3000/api', JSON.stringify(payload))
		.then((response) => response.data);

	return (
		<div>
			<h2 className='text-'>{JSON.stringify(data)}</h2>
		</div>
	);
}
