import React from 'react';
import Button from '../button';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function CTA() {
	return (
		<div className='my-20 flex  flex-col lg:flex-row w-full items-center lg:text-justify justify-center gap-5 lg:gap-16 text-center rounded-sm bg-brand-red-500 p-10'>
			<h2 className={`text-2xl lg:text-3xl font-bold ${montSerrat.className} `}>
				Venha descobrir como um site pode te ajudar a vender mais
			</h2>
			<Button
				role='CTA'
				text={'Entrar em Contato'}
			/>
		</div>
	);
}
