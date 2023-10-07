import React from 'react';

export default function LoadingBtn() {
	return (
		<>
			<div className='w-4 h-4 rounded-full animate-spin'>
				<svg
					fill='#ffffff'
					viewBox='0 0 16 16'
					xmlns='http://www.w3.org/2000/svg'
					stroke='#ffffff'>
					<g
						id='SVGRepo_bgCarrier'
						strokeWidth='0'></g>
					<g
						id='SVGRepo_tracerCarrier'
						strokeLinecap='round'
						strokeLinejoin='round'></g>
					<g id='SVGRepo_iconCarrier'>
						{' '}
						<g>
							{' '}
							<path d='M8,1V2.8A5.2,5.2,0,1,1,2.8,8H1A7,7,0,1,0,8,1Z'></path>{' '}
						</g>{' '}
					</g>
				</svg>
			</div>
		</>
	);
}
