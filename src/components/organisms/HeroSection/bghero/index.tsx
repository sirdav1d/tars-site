import React from 'react';
import bgImage from '/public/images/ponte.png';
import Image from 'next/image';

export default function BgHero() {
	return (
		<>
			<Image
				className='w-screen absolute left-0 top-0 -z-50 h-[100vh]'
				src={bgImage}
				width={3000}
				height={1200}
				alt={'Ponte'}
			/>
		</>
	);
}
