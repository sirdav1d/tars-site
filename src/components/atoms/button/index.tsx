/** @format */

'use client';
import { SubHeadAnimation } from '@/animations';
import { motion } from 'framer-motion';
import { BiDownload } from 'react-icons/bi';
import { BsWhatsapp } from 'react-icons/bs';
import { RiNavigationFill } from 'react-icons/ri';
import LoadingBtn from '../loading';

interface ButtonProps {
	text: string;
	role?: string;
	link?: string;
	disabled?: boolean;
	loading?: boolean;
}

export default function Button({
	text,
	role,
	disabled,
	link = 'https://api.whatsapp.com/send?phone=5511985083609&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento.',
	loading,
}: ButtonProps) {
	if (role === 'whatsapp') {
		return (
			<a
				className={`p-4 bg-green-700 text-white rounded flex gap-3 items-center justify-center min-w-[260px] hover:bg-green-500 text-md transition duration-300 font-bold tracking-wide  font-montserratTitle`}
				href={link}
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
				initial='close'
				animate='open'
				className={`p-4 bg-bgButtonHero bg-btnSize bg-left hover:bg-right rounded flex gap-2 items-center  text-md transition-all ease-linear duration-500 w-fit text-lg font-bold tracking-wide font-montserratTitle`}
				href={link}
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
				variants={SubHeadAnimation}
				initial='close'
				whileInView='open'
				viewport={{ amount: 0.9, once: true }}
				className={`p-4 bg-bgButton bg-btnSize bg-left hover:bg-right cursor-pointer rounded flex gap-2 items-center text-md transition-all ease-linear duration-500 w-fit text-center text-md font-bold tracking-wide font-montserratTitle`}
				href={link}
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
				className={`p-4 bg-bgButtonPlans bg-btnSize bg-left hover:bg-right cursor-pointer rounded flex gap-2 items-center mt-2  text-md transition-all duration-500 ease-linear w-full justify-center text-md font-bold tracking-wide font-montserratTitle text-white`}
				href={link}
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<RiNavigationFill
					color={'#fff'}
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
				className={`p-3 bg-bgButtonHero bg-btnSize bg-left  rounded z-50 disabled:grayscale flex gap-2 items-center justify-center w-full text-centertext-md transition duration-300 mt-3 text-lg font-bold tracking-wide font-montserratTitle cursor-pointer`}>
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
				className={`p-4 bg-bgButtonHero cursor-pointer rounded flex gap-2 items-center hover:bg-brand-red-300 text-md transition duration-300 w-fit text-md font-bold tracking-wide font-montserratTitle`}
				href='/resources/trafego.pdf'
				target='_blank'
				referrerPolicy='no-referrer'>
				{text}
				<BiDownload size={24} />
			</a>
		);
	}
}
