/** @format */

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

export default function Card({ data }: CardProps) {
	return (
		<motion.div
			variants={CardAnimation}
			whileHover={'open'}
			initial='close'
			exit='close'
			className={`hidden opacity-0 md:opacity-100 w-[248px] h-[180px] bg-brand-neutral-800/40 backdrop-blur-md md:flex items-center justify-center rounded border  border-brand-neutral-100/20 font-bold px-3 py-3 text-center cursor-pointer`}>
			<div className='flex flex-col items-center h-full relative w-full justify-center gap-5'>
				<motion.h3
					variants={CardTitle}
					className={`font-montserratTitle text-lg absolute`}>
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
						width={48}
						height={48}
						alt={data.name}></Image>
				</motion.div>
				<motion.p
					variants={CardDescription}
					className='prose-sm font-light text-center opacity-0'>
					{data.description}
				</motion.p>
			</div>
		</motion.div>
	);
}
