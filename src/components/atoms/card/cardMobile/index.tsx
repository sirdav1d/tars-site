/** @format */

import { ServicesProps } from '@/mock/services.data';

import Image from 'next/image';

interface CardProps {
	data: ServicesProps;
}

export default function CardMobile({ data }: CardProps) {
	return (
		<div
			className={`relative w-full h-fit md:hidden bg-brand-neutral-800/40 backdrop-blur-md flex items-center justify-center rounded border my-5 border-brand-neutral-100/20 font-bold text-center p-6`}>
			<div className='flex flex-col items-center h-full relative w-full  justify-center gap-8'>
				<div className='flex flex-col items-center justify-center'>
					<h3 className={'font-montserratTitle text-2xl'}>{data.name}</h3>
					<span className='w-[48px]  h-[4px] bg-brand-blue-500 rounded-full drop-shadow-spanCards' />
				</div>
				<Image
					className='drop-shadow-cards animate-bounce mt-3'
					src={data.url}
					width={64}
					height={64}
					alt={data.name}
				/>

				<p className='text-sm font-light text-center leading-normal tracking-wide'>
					{data.description}
				</p>
			</div>
		</div>
	);
}
