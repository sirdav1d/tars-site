import React from 'react';
import { FaArrowTurnDown } from 'react-icons/fa6';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});
export default function LinkUs() {
	return (
		<div>
			<section className='flex py-5 items-center lg:items-baseline justify-between gap-12 max-w-[1440px]'>
				<div className='flex flex-wrap items-start justify-center gap-4 lg:text-lg text-sm w-full px-3 text-brand-neutral-300'>
					<a
						className='hover:text-brand-red-500 underline'
						href='#home'>
						Home
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#who'>
						Quem Somos
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#service'>
						Serviços
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#plans'>
						Planos
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#contact'>
						Contato
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						target='_blank'
						href='/resources/Politica.pdf'>
						Políticas de Privacidade
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						target='_blank'
						href='/resources/Termos.pdf'>
						Termos de uso
					</a>
				</div>
			</section>
		</div>
	);
}
