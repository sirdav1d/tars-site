/** @format */

import Card from '@/components/atoms/card';
import CardMobile from '@/components/atoms/card/cardMobile';
import Title from '@/components/atoms/title';
import { servicesData } from '@/mock/services.data';

export default function ServiceSection() {
	return (
		<div
			id='service'
			className='pb-20 pt-10 flex flex-col gap-10 items-center justify-center px-5 '>
			<div className='flex flex-col lg:gap-10 justify-between w-full max-w-[1440px] mx-auto pb-3 '>
				<Title headline='Serviços Que Vão Impulsionar o Seu Negócio' />

				<div className='grid gap-10 md:grid-cols-2 md:grid-rows-4 xl:grid-cols-4 lg:grid-rows-2 mt-6 lg:h-[900px] xl:h-[480px]'>
					{servicesData.map((s, index) => {
						return (
							<>
								<li
									key={s.name}
									className='md:hidden'>
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
		</div>
	);
}
