'use client';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Navigation from '../navigation';
import { motion } from 'framer-motion';
import { drawerAnimation } from '../../../animations';
import Button from '../button';

export default function Drawer() {
	const [isOpen, setIsOpen] = useState(false);
	const [canShow, setCanShow] = useState(false);

	function handleClick() {
		setTimeout(() => {
			setCanShow(true);
		}, 200);

		setIsOpen(true);
	}

	function handleClose() {
		setIsOpen(false);
		setCanShow(false);
	}

	return (
		<>
			<button
				className='p-4'
				onClick={handleClick}>
				<IoMdMenu size={40} />
			</button>

			<motion.div
				variants={drawerAnimation}
				animate={isOpen ? 'open' : 'closed'}
				className={`h-screen bg-brand-neutral-800  absolute top-0 right-0 overflow-hidden `}>
				<button
					onClick={handleClose}
					className='p-4 absolute right-2 top-2 text-brand-red-500 drop-shadow-btnClose'>
					<IoMdClose size={40} />
				</button>
				{canShow && (
					<div className='flex flex-col items-center justify-center h-full pb-6'>
						{' '}
						<Navigation />{' '}
						<Button
							role='whatsapp'
							text='Iniciar Conversa'
						/>
					</div>
				)}
			</motion.div>
		</>
	);
}
