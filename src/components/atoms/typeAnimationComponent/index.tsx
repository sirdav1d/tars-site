/** @format */
'use client';

import { TypeAnimation } from 'react-type-animation';

export const TypeAnimationComponent = () => {
	return (
		<TypeAnimation
			sequence={[
				' Performance', // Types 'One'
				1000, // Waits 1s
				' Liderança', // Deletes 'One' and types 'Two'
				1000, // Waits 2s
				' Oportunidades', // Types 'Three' without deleting 'Two'
				2000,
			]}
			wrapper='span'
			aria-hidden={true}
			cursor={true}
			repeat={Infinity}
			style={{ display: 'inline-block' }}
		/>
	);
};
