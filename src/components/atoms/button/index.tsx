'use client';
import { Montserrat } from 'next/font/google';
import { BsWhatsapp } from 'react-icons/bs';
import { RiNavigationFill } from 'react-icons/ri';
import LoadingBtn from '../loading';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface ButtonProps {
	text: string;
	role?: string;
	disabled?: boolean;
	loading?: boolean;
}

export default function Button({ text, role, disabled, loading }: ButtonProps) {
	function handleAccept() {
		const req = JSON.stringify(localStorage.setItem('lgpd', 'accept'));
		return req;
	}

	function handleDeny() {
		window.alert(
			'Para ter uma melhor experiência de usuário, recomendamos que aceite nossas políticas de privacidade e termos de uso',
		);
	}

	if (role === 'whatsapp') {
		return (
			<a
				className={`p-4 bg-green-600 rounded flex gap-3 items-center justify-center min-w-[260px] hover:bg-green-500 text-md transition duration-300 font-bold tracking-wide  ${montSerrat.className}`}
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
				className={`p-4 bg-brand-red-500 rounded flex gap-2 items-center hover:bg-brand-red-300 text-md transition duration-300 w-fit text-lg font-bold tracking-wide ${montSerrat.className}`}
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
				className={`p-4 bg-brand-blue-500 cursor-pointer rounded flex gap-2 items-center hover:bg-brand-blue-300 text-md transition duration-300 w-fit text-md font-bold tracking-wide ${montSerrat.className}`}
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

	if (role === 'form') {
		return (
			<button
				disabled={disabled}
				type='submit'
				className={`p-3 bg-brand-red-500 rounded z-50 disabled:grayscale disabled:hover:bg-brand-red-500 flex gap-2 items-center justify-center w-full text-center hover:bg-brand-red-300 text-md transition duration-300 mt-3 text-lg font-bold tracking-wide ${montSerrat.className}`}>
				{loading ? (
					<LoadingBtn />
				) : (
					<p className='flex gap-3 items-center justify-center'>
						{text}{' '}
						<RiNavigationFill
							className='rotate-90'
							size={20}
						/>
					</p>
				)}
			</button>
		);
	}

	if (role === 'accept') {
		return (
			<button
				onClick={() => handleAccept()}
				disabled={disabled}
				type='button'
				className={`px-5 py-3 bg-brand-red-500 rounded-full z-50 disabled:grayscale disabled:hover:bg-brand-red-500 flex gap-2 items-center justify-center w-fit text-center hover:bg-brand-red-300  transition duration-300 mt-3 lg:text-base text-xs font-bold tracking-wide ${montSerrat.className}`}>
				{loading ? (
					<LoadingBtn />
				) : (
					<p className='flex gap-3 items-center justify-center'>{text} </p>
				)}
			</button>
		);
	}

	if (role === 'deny') {
		return (
			<button
				onClick={() => handleDeny()}
				type='button'
				className={`
				flex items-center justify-center w-fit text-center hover:opacity-80 transition duration-300 mt-3 lg:text-base text-xs font-bold tracking-wide ${montSerrat.className}`}>
				{loading ? (
					<LoadingBtn />
				) : (
					<p className='flex gap-3 items-center justify-center underline'>
						{text}{' '}
					</p>
				)}
			</button>
		);
	}
}
