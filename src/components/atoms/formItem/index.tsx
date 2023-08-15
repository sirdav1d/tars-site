import React from 'react';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface FormItemProps {
	label: string;
	placeholder: string;
}

export default function FormItem() {
	return (
		<div className='flex flex-col py-3 gap-2'>
			<label
				htmlFor=''
				className={`${montSerrat.className} text-sm`}>
				Telefone
			</label>
			<input
				className='p-2 rounded'
				type='text'
			/>
		</div>
	);
}
