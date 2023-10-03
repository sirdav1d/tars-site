'use client';
import {
	CardAnimation,
	CardDescription,
	CardIcon,
	CardSpan,
	CardTitle,
} from '@/animations';
import { ServicesProps } from '@/mock/services.data';
import { motion } from 'framer-motion';

import Image from 'next/image';

interface CardProps {
	data: ServicesProps;
}

export default function CardMobile({ data }: CardProps) {
	return (
		<>
			<motion.div
				variants={CardAnimation}
				whileInView={'open'}
				viewport={{ amount: 0.9, once: true }}
				className={`relative w-[300px] h-[248px] md:hidden bg-brand-neutral-800/40 backdrop-blur-md flex items-center justify-center rounded border my-20 border-brand-neutral-100/20 font-bold text-center px-3 cursor-pointer`}>
				<div className='flex flex-col items-center h-full relative w-full  justify-center gap-2'>
					<motion.h3
						variants={CardTitle}
						className={'font-montserratTitle text-2xl absolute'}>
						{data.name}
					</motion.h3>
					<motion.span
						variants={CardSpan}
						className='w-[0px] opacity-0 h-[0px] bg-brand-blue-500 rounded-full drop-shadow-spanCards'
					/>
					<motion.div
						variants={CardIcon}
						className='opacity-0 '>
						<Image
							className='drop-shadow-cards animate-bounce'
							src={data.url}
							width={60}
							height={60}
							alt={data.name}></Image>
					</motion.div>
					<motion.p
						variants={CardDescription}
						className='text-xs font-light text-center opacity-0 leading-normal tracking-wide'>
						{data.description}
					</motion.p>
				</div>
			</motion.div>
		</>
	);
}
