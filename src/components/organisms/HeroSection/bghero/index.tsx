import React from 'react';
import bgImage from '/public/images/ponte.png';
import Image from 'next/image';

export default function BgHero() {
	return (
		<>
			<Image
				className='w-screen  mix-blend-overlay absolute left-0 top-0 grayscale-[50%] -z-50 h-[640px]'
				src={bgImage}
				width={1600}
				height={1024}
				alt={'Ponte'}
			/>
		</>
	);
}
