'use client';
import React, { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Navigation from '../navigation';

export default function Drawer() {
	const [width, setWidth] = useState('0');

	function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		setWidth('1/2');
	}

	function handleClose(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
		e.stopPropagation();
		setWidth('0');
	}

	return (
		<div className='lg:hidden'>
			<button
				type='button'
				className='p-6'
				onClick={(e) => handleClick(e)}>
				<IoMdMenu size={40} />
			</button>

			<div
				className={`w-${width} opacity-${width} transition-all duration-1000 h-screen bg-brand-neutral-800 backdrop-blur-md absolute top-0 right-0 `}>
				<button
					type='button'
					onClick={(e) => handleClose(e)}
					className='p-4 absolute right-2 top-2 text-brand-red-500 drop-shadow-btnClose'>
					<IoMdClose size={40} />
				</button>
				<Navigation />
			</div>
		</div>
	);
}
