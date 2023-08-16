import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface FormItemProps {
	label: string;
	placeholder: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	value: string
}

export default function FormItem({ label, placeholder,setValue,value}: FormItemProps) {
	
	return (
		<div className='flex flex-col py-3 gap-2'>
			<label
				htmlFor={label}
				className={`${montSerrat.className} text-md`}>
				{label}
			</label>
			<input
				required
				id={label}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				className='py-2 px-4 rounded outline-none bg-brand-neutral-600/20 border-b text-base font-light border-brand-neutral-400 focus:border-brand-blue-500 focus:shadow-input transition-all duration-200'
				type='text'
				placeholder={placeholder}
			/>
		</div>
	);
}
