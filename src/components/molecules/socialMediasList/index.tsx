import React from 'react';
import {
	LiaFacebookSquare,
	LiaInstagram,
	LiaLinkedin,
	LiaEnvelopeSolid,
} from 'react-icons/lia';

export default function SocialMediaList() {
	return (
		<div className='flex items-center justify-center gap-5 lg:gap-10 w-full '>
			<a
				className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300'
				href='https://www.facebook.com/people/Tars-Projetos/100094457547971/?mibextid=ZbWKwL'
				target='_blank'
				rel='noopener noreferrer'>
				<LiaFacebookSquare
					size={64}
					className='w-14 lg:w-20'
				/>
			</a>
			<a
				className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300'
				href='https://instagram.com/tars_projetos?utm_source=qr&igshid=ZDc4ODBmNjlmNQ%3D%3D'
				target='_blank'
				rel='noopener noreferrer'>
				<LiaInstagram
					size={64}
					className='w-14 lg:w-20'
				/>
			</a>
			<a
				className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300'
				href='http://'
				target='_blank'
				rel='noopener noreferrer'>
				<LiaLinkedin
					size={64}
					className='w-14 lg:w-20'
				/>
			</a>{' '}
			<a
				className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300'
				href='http://tars.Projetos@gmail.com'
				target='_blank'
				rel='noopener noreferrer'>
				<LiaEnvelopeSolid
					size={64}
					className='w-14 lg:w-20'
				/>
			</a>
		</div>
	);
}
