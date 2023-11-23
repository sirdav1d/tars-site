/** @format */

import React from 'react';
import { servicesData } from '@/mock/services.data';
import Card from '@/components/atoms/card';
import CardMobile from '@/components/atoms/card/cardMobile';
import ContentComponent from '@/components/atoms/Content';

export default function ServiceSection() {
	return (
		<div
			id='service'
			className='pb-20 pt-5 flex flex-col gap-10 items-center justify-center px-6'>
			<ContentComponent headline='Serviços que Vão Impulsionar o seu Negócio' />

			<div className='grid gap-10 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 lg:grid-rows-2 mt-6 lg:h-[900px] xl:h-[480px]'>
				{servicesData.map((s, index) => {
					return (
						<>
							<li key={s.name} className='md:hidden'>
								<CardMobile data={s} />
							</li>

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
