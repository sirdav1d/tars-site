import React from 'react';

export default function BgHero() {
	return (
		<div className='w-screen absolute left-0 top-0 -z-10 h-screen bg-gradient-to-b from-brand-neutral-900/10 to to-brand-neutral-900/50'>
			<video
				className='h-screen  w-screen object-cover mix-blend-overlay'
				autoPlay={true}
				preload='auto'
				muted
				loop={true}>
				<source
					src='/video/vídeoponte.mp4'
					type='video/mp4'
				/>
			</video>
		</div>
	);
}
