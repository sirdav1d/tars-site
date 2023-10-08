import React from 'react';
import Image from 'next/image';
import LinkUs from '@/components/atoms/footer/linksUs';



export default function Footer() {
	return (
		<div className='flex flex-col items-center absolute -bottom-48 justify-between bg-brand-neutral-900/40 border-t border-brand-neutral-100/20 w-screen backdrop-blur-sm pb-3 border'>
			<LinkUs />
			<div className='flex items-center justify-center'>
				<Image
					className='w-40 lg:w-120'
					src={'/logos/logoHorizontal.webp'}
					alt='Logo Tars Projetos'
					width={240}
					height={60}
				/>
				<p className={`font-montserratTitle text-xs`}>
					&copy; 2023 All Rights Reserved
				</p>
			</div>
		</div>
	);
}
