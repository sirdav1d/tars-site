/** @format */
'use client';

import { TypeAnimation } from 'react-type-animation';

export const TypeAnimationComponent = () => {
	return (
		<TypeAnimation
			sequence={[
				' Realidade Digital', // Types 'One'
				1000, // Waits 1s
				' Resultados Tangíveis', // Deletes 'One' and types 'Two'
				1000, // Waits 2s
				' Projetos Escaláveis', // Types 'Three' without deleting 'Two'
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
