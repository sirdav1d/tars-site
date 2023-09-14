import React from 'react';
import { Montserrat } from 'next/font/google';
import { servicesData } from '@/mock/services.data';
import Card from '@/components/atoms/card';
import CardMobile from '@/components/atoms/card/cardMobile';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function ServiceSection() {
	return (
		<div
			id='service'
			className='pb-20 flex flex-col items-center justify-center px-6 bg-bgThanks bg-cover'>
			<h2 className={`${montSerrat.className} text-3xl text-center mt-28`}>
				Como Vamos <br />
				Impulsionar o seu Negócio
			</h2>
			<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
			<div className='grid gap-10 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 lg:grid-rows-2 mt-20 '>
				{servicesData.map((s, index) => {
					return (
						<>
							<CardMobile
								key={index * 10}
								data={s}
							/>
							<div className='sm:hidden sm:opacity-0 md:block md:opacity-100'>
								<Card
									key={index}
									data={s}
								/>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
}
