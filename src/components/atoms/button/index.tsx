import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

interface ButtonProps {
	text: string;
	role?: string;
}

export default function Button({ text, role }: ButtonProps) {
	if (role === 'whatsapp') {
		return (
			<a
				className='p-4 bg-green-700 rounded flex gap-2 items-center hover:bg-green-600 text-md'
				href='#'
				target='_blank'
				referrerPolicy='no-referrer'>
				<BsWhatsapp size={20} />
				{text}
			</a>
		);
	}
}
