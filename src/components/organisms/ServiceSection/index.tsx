import React from 'react';
import { Montserrat } from 'next/font/google';
import { servicesData } from '@/mock/services.data';
import Card from '@/components/atoms/card';
import CardMobile from '@/components/atoms/card/cardMobile';
import ContentComponent from '@/components/atoms/Content';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function ServiceSection() {
	return (
		<div
			id='service'
			className='pb-20 pt-5 flex flex-col gap-10 items-center justify-center px-6 bg-bgThanks bg-cover'>
			<ContentComponent
				headline='Como Vamos
				Impulsionar o seu Negócio'
			/>

			<div className='grid gap-10 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 lg:grid-rows-2 mt-6 '>
				{servicesData.map((s, index) => {
					return (
						<>
							<CardMobile
								key={s.name}
								data={s}
							/>

							<Card
								key={index}
								data={s}
							/>
						</>
					);
				})}
			</div>
		</div>
	);
}
