import React from 'react';
import { Montserrat } from 'next/font/google';
import { servicesData } from '@/mock/services.data';
import Card from '@/components/atoms/card';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function ServiceSection() {
	return (
		<div
			id='service'
			className='mb-20 flex flex-col items-center justify-center'>
			<h2 className={`${montSerrat.className} text-3xl text-center`}>
				Como Vamos <br />
				Impulsionar o seu Negócio
			</h2>
			<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1' />
			<div className='grid gap-4 md:grid-cols-2 md:grid-rows-4 lg:grid-cols-4 lg:grid-rows-2 mt-20 xl:gap-6'>
				{servicesData.map((s, index) => {
					return (
						<Card
							key={index}
							data={s}
						/>
					);
				})}
			</div>
		</div>
	);
}
