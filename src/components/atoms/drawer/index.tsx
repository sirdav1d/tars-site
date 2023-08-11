'use client';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import Navigation from '../navigation';

export default function Drawer() {
	const [width, setWidth] = useState('0');
	const [canShow, setCanShow] = useState(false);

	function handleClick() {
		setWidth('3/4');
		setCanShow(true);
		console.log({ width });
	}

	function handleClose() {
		setWidth('0');
		setCanShow(false);
		console.log({ width });
	}

	return (
		<>
			<button
				className='p-4'
				onClick={handleClick}>
				<IoMdMenu size={40} />
			</button>

			<div
				className={`w-${width} transition-all delay-150 duration-1000 h-screen bg-brand-neutral-800 absolute top-0 right-0 overflow-hidden `}>
				<button
					onClick={handleClose}
					className='p-4 absolute right-2 top-2 text-brand-red-500 drop-shadow-btnClose'>
					<IoMdClose size={40} />
				</button>
				{canShow && <Navigation />}
			</div>
		</>
	);
}
