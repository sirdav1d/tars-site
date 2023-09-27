import React from 'react';

export default function BgHero() {
	return (
		<div className='w-screen bg-gradient-to-b object-cover from-brand-neutral-900/10 to to-brand-neutral-900/50 absolute left-0 top-0 -z-10 h-[90vh] lg:h-screen md:bg-gradient-to-b md:from-brand-neutral-900/10 to md:to-brand-neutral-900/80'>
			<video
				className='h-[92vh] lg:h-screen w-screen object-fill lg:object-cover object-center mix-blend-overlay'
				autoPlay={true}
				preload='auto'
				muted
				poster='/images/poster.png'
				loop={true}>
				<source
					src='/video/videoPonte.mp4'
					type='video/mp4'
				/>
			</video>
		</div>
	);
}
