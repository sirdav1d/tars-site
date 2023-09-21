import React from 'react';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import LinkUs from '@/components/atoms/footer/linksUs';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function Footer() {
	return (
		<div className='flex flex-col items-center justify-between bg-brand-neutral-900/40 border-t border-brand-neutral-100/20 w-screen backdrop-blur-sm'>
			<LinkUs />
			<div className='flex items-center justify-center'>
				<Image
					className='w-40 lg:w-120'
					src={'/logos/logoHeader.png'}
					alt='Logo Tars Projetos'
					width={240}
					height={60}
				/>
				<p className={`${montSerrat.className} text-xs`}>
					&copy; 2023 All Rights Reserved
				</p>
			</div>
		</div>
	);
}
