'use client';
import { useState, MouseEvent } from 'react';
import { createCookie } from '../cookie/actions';

export default function BannerLGPD() {
	const [show, setShow] = useState('true');

	async function handleAccept(
		e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
	) {
		e.preventDefault();
		e.stopPropagation();
		await createCookie();
		setShow('false');
	}
	function handleDeny(e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) {
		e.preventDefault();
		e.stopPropagation();
		alert(
			'Para ter uma melhor experiência de usuário, recomendamos que aceite nossas políticas de privacidade e termos de uso',
		);
		setShow('true');
	}

	return show === 'true' ? (
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
					<button
						onClick={(e) => handleAccept(e)}
						type='button'
						className={`px-5 py-3 bg-brand-red-500 rounded-full z-50 disabled:grayscale disabled:hover:bg-brand-red-500 flex gap-2 items-center justify-center w-fit text-center hover:bg-brand-red-300  transition duration-300 mt-3 lg:text-base text-xs font-bold tracking-wide`}>
						<p className='flex gap-3 items-center justify-center'>Aceitar</p>
					</button>
					<button
						onClick={(e) => handleDeny(e)}
						type='button'
						className={`flex items-center justify-center w-fit text-center hover:opacity-80 transition duration-300 mt-3 lg:text-base text-xs font-bold tracking-wide`}>
						<p className='flex gap-3 items-center justify-center underline'>
							Recusar
						</p>
					</button>
				</div>
			</div>
		</div>
	) : (
		<></>
	);
}
