import React from 'react';

export default function BgHero() {
	return (
		<div className='w-screen object-scale-down bg-gradient-to-b from-brand-neutral-900/10 to to-brand-neutral-900/20 absolute left-0 top-0 -z-10 h-screen md:bg-gradient-to-b md:from-brand-neutral-900/10 to md:to-brand-neutral-900/80 pb-[100%] lg:pb-[56,25%]'>
			<video
				className='h-screen  w-screen object-cover object-bottom lg:object-center mix-blend-overlay'
				autoPlay={true}
				preload='auto'
				muted
				poster='/images/poster.png'
				loop={true}>
				<source
					src='/video/vídeoponte.mp4'
					type='video/mp4'
				/>
			</video>
		</div>
	);
}
