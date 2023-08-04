import React from 'react';
import Button from '../button';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function CTA() {
	return (
		<div className='my-20 flex  flex-col w-full items-center justify-center gap-10 text-center rounded-sm bg-brand-red-500 p-8'>
			<h2 className={`text-2xl md:text-4xl font-bold ${montSerrat.className} `}>
				Venha descobrir como um site pode te ajudar a vender mais
			</h2>
			<Button
				role='CTA'
				text={'Entrar em Contato'}
			/>
		</div>
	);
}
