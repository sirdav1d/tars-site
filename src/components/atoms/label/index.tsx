import React, { ChangeEvent, useState } from 'react';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface LabelProps {
	text: string;
	htmlFor: string;
	required?: boolean;
}

export default function Label({ htmlFor, text, required }: LabelProps) {
	return (
		<div className='flex gap-1'>
			<label
				htmlFor={htmlFor}
				className={`${montSerrat.className} text-md`}>
				{text}
			</label>
			{required && <span className='text-brand-red-500'>*</span>}
		</div>
	);
}