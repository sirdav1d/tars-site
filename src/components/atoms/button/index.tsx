'use client';
import { MouseEventHandler } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { BiDownload } from 'react-icons/bi';
import { RiNavigationFill } from 'react-icons/ri';
import LoadingBtn from '../loading';
import { motion } from 'framer-motion';
import { SubHeadAnimation } from '@/animations';

interface ButtonProps {
	text: string;
	role?: string;
	link?: string;
	disabled?: boolean;
	loading?: boolean;
	onclick?: MouseEventHandler<HTMLButtonElement>;
}

function tagManager() {
	return "gtag_report_conversion('http://example.com/your-link')";
}
export default function Button({
	text,
	role,
	disabled,
	link,
	loading,
	onclick,
}: ButtonProps) {
	if (role === 'whatsapp') {
		return (
			<a
				onClick={() => tagManager}
				className={`p-4 bg-green-600 rounded flex gap-3 items-center justify-center min-w-[260px] hover:bg-green-500 text-md transition duration-300 font-bold tracking-wide  font-montserratTitle`}
				href='https://api.whatsapp.com/send?phone=5511985083609&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.'
				target='_blank'
				referrerPolicy='no-referrer'>
				<BsWhatsapp size={20} />
				{text}
			</a>
		);
	}
	if (role === 'hero') {
		return (
			<motion.a
				variants={SubHeadAnimation}
				onClick={() => tagManager}
				initial='close'
				animate='open'
				className={`p-4 bg-brand-red-500 rounded flex gap-2 items-center hover:bg-brand-red-700 text-md transition duration-300 w-fit text-lg font-bold tracking-wide font-montserratTitle`}
				href='https://api.whatsapp.com/send?phone=5511985083609&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<RiNavigationFill
					className='rotate-90'
					size={20}
				/>
			</motion.a>
		);
	}

	if (role === 'CTA') {
		return (
			<motion.a
				onClick={() => tagManager}
				variants={SubHeadAnimation}
				initial='close'
				whileInView='open'
				viewport={{ amount: 0.9, once: true }}
				className={`p-4 bg-brand-blue-500 cursor-pointer rounded flex gap-2 items-center hover:bg-brand-blue-300 text-md transition duration-300 w-fit text-center text-md font-bold tracking-wide font-montserratTitle`}
				href='https://api.whatsapp.com/send?phone=5511985083609&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<RiNavigationFill
					className='rotate-90'
					size={20}
				/>
			</motion.a>
		);
	}

	if (role === 'plans') {
		return (
			<a
				onClick={() => tagManager}
				className={`p-4 bg-brand-blue-500 cursor-pointer rounded flex gap-2 items-center mt-2 hover:bg-brand-blue-300 text-md transition duration-300 w-full justify-center text-md font-bold tracking-wide font-montserratTitle`}
				href={link}
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
				onClick={() => tagManager}
				disabled={disabled}
				type='submit'
				className={`p-3 bg-brand-red-500 rounded z-50 disabled:grayscale disabled:hover:bg-brand-red-500 flex gap-2 items-center justify-center w-full text-center hover:bg-brand-red-300 text-md transition duration-300 mt-3 text-lg font-bold tracking-wide font-montserratTitle`}>
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

	if (role === 'thanks') {
		return (
			<a
				onClick={() => tagManager}
				className={`p-4 bg-brand-red-500 cursor-pointer rounded flex gap-2 items-center hover:bg-brand-red-300 text-md transition duration-300 w-fit text-md font-bold tracking-wide font-montserratTitle`}
				href='/resources/trafego.pdf'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<BiDownload size={24} />
			</a>
		);
	}
}
