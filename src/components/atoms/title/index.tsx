/** @format */
'use client';

import { TitleSpanAnimation } from '@/animations';
import { motion } from 'framer-motion';

interface TitleProps {
	headline: string;
	paragraph1?: string;
	paragraph2?: string;
}

export default function TitleComponent(props: TitleProps) {
	return (
		<div className='flex flex-col w-full py-3 '>
			<h2 className={`font-bold text-2xl lg:text-3xl font-montserratTitle`}>
				{props.headline}
			</h2>
			<motion.span
				variants={TitleSpanAnimation}
				whileInView={'open'}
				viewport={{ amount: 0.9, once: true }}
				initial='close'
				className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons '
			/>
		</div>
	);
}
