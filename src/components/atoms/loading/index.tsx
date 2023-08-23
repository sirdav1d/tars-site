import React from 'react';

export default function LoadingBtn() {
	return (
		<div>
			<div className='w-8 h-8 rounded-full animate-spin'>
				<svg
					fill='#ffffff'
					viewBox='0 0 16 16'
					xmlns='http://www.w3.org/2000/svg'
					stroke='#ffffff'>
					<g
						id='SVGRepo_bgCarrier'
						stroke-width='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						stroke-linecap='round'
						stroke-linejoin='round'></g>
					<g id='SVGRepo_iconCarrier'>
						{' '}
						<g>
							{' '}
							<path d='M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z'></path>{' '}
						</g>{' '}
					</g>
				</svg>
			</div>
		</div>
	);
}
