'use client';
import React, { useEffect } from 'react';
import Button from '../button';

export default function BannerLGPD() {
	const resp = localStorage.getItem('lgpd');

	if (resp) {
		return <></>;
	}

	if (!resp) {
		return (
			<div className='fixed bottom-0 left-0 w-screen h-fit bg-brand-neutral-900 text-brand-neutral-100 text-xs lg:text-base  lg:py-8  p-5 rounded z-50'>
				<div className=' max-w-[1440px] gap-3 flex flex-col lg:flex-row justify-center items-baseline mx-auto '>
					<p>
						Nós utilizamos cookies para melhorar sua experiência como usuário.
						Para conferir detalhadamente nossas boas práticas, acesse nossas{' '}
						<a
							className='hover:text-brand-red-500 transition duration-300 underline'
							target='_blank'
							href='/resources/Politica.pdf'>
							Políticas de Privacidade
						</a>{' '}
						e{' '}
						<a
							className='hover:text-brand-red-500 transition duration-300 underline'
							target='_blank'
							href='/resources/Termos.pdf'>
							Termos de uso
						</a>
						.
					</p>
					<div className='gap-3 lg:gap-5 flex justify-center items-center mx-auto'>
						<Button
							text={'Aceitar'}
							role='accept'
						/>
						<Button
							text={'Recusar'}
							role='deny'
						/>
					</div>
				</div>
			</div>
		);
	}
}
