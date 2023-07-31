import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { RiNavigationFill } from 'react-icons/ri';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface ButtonProps {
	text: string;
	role?: string;
}

export default function Button({ text, role }: ButtonProps) {
	if (role === 'whatsapp') {
		return (
			<a
				className={`p-4 bg-green-600 rounded flex gap-2 items-center hover:bg-green-500 text-md transition duration-300 font-bold tracking-wide  ${montSerrat.className}`}
				href='#'
				target='_blank'
				referrerPolicy='no-referrer'>
				<BsWhatsapp size={20} />
				{text}
			</a>
		);
	}
	if (role === 'hero') {
		return (
			<a
				className={`p-4 bg-brand-red-500 rounded flex gap-2 items-center hover:bg-brand-red-300 text-md transition duration-300 w-fit text-md font-bold tracking-wide ${montSerrat.className}`}
				href='#'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<RiNavigationFill
					className='rotate-90'
					size={20}
				/>
			</a>
		);
	}

	if (role === 'CTA') {
		return (
			<a
				className={`p-4 bg-brand-blue-500 rounded flex gap-2 items-center hover:bg-brand-blue-300 text-md transition duration-300 w-fit text-md font-bold tracking-wide ${montSerrat.className}`}
				href='#'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<RiNavigationFill
					className='rotate-90'
					size={20}
				/>
			</a>
		);
	}
}
