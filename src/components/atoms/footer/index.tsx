import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function Footer() {
	return (
		<div className='flex p-3 items-center justify-center gap-1 bg-brand-neutral-200/10 w-screen backdrop-blur-sm absolute bottom-0 left-0'>
			<Image
				className='w-40 h-auto lg:w-120'
				src={'/logos/logoHeader.png'}
				alt='Logo Tars Projetos'
				width={240}
				height={60}
			/>
			<p className={`${montSerrat.className} text-xs`}>
				&copy; 2023 All Rights Reserved
			</p>
		</div>
	);
}
