/** @format */

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
				aria-label='Link para Facebook'
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
				aria-label='Link para Instagram'
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
				aria-label='Link para Linkedin'
				className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300'
				href='https://www.linkedin.com/company/tars-projetos/?viewAsMember=true'
				target='_blank'
				rel='noopener noreferrer'>
				<LiaLinkedin
					size={64}
					className='w-14 lg:w-20'
				/>
			</a>{' '}
			<a
				aria-label='Link para E-mail'
				className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300'
				href='mailto:tars.projetos@gmail.com?subject=Solicitar Orçamento&body=Ol%C3%A1!%20Estava%20no%20seu%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento'
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
