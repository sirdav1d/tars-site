'use client';
import {
	ParagraphAnimation,
	TitleAnimation,
	TitleSpanAnimation,
} from '@/animations';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface TitleProps {
	headline: string;
	paragraph1?: string;
	paragraph2?: string;
}

export default function ContentComponent({
	headline,
	paragraph1,
	paragraph2,
}: TitleProps) {
	return (
		<>
			<div className='flex flex-col items-center w-full py-3'>
				<motion.h2
					variants={TitleAnimation}
					whileInView={'open'}
					viewport={{ once: true }}
					initial='close'
					className={`font-bold text-3xl text-center  ${montSerrat.className}`}>
					{headline}
				</motion.h2>
				<motion.span
					variants={TitleSpanAnimation}
					whileInView={'open'}
					viewport={{ amount: 0.9, once: true }}
					initial='close'
					className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons '
				/>
			</div>

			{paragraph1 && (
				<>
					<motion.div
						variants={ParagraphAnimation}
						whileInView={'open'}
						viewport={{ amount: 0.9, once: true }}
						initial='close'
						className='mt-3 leading-8 xl:text-base text-sm  '>
						{paragraph1}
					</motion.div>
					<br />
				</>
			)}

			{paragraph2 && (
				<>
					<motion.div
						variants={ParagraphAnimation}
						whileInView={'open'}
						viewport={{ amount: 0.9, once: true }}
						initial='close'
						className='leading-8 xl:text-base text-sm  '>
						{paragraph2}
					</motion.div>
				</>
			)}
		</>
	);
}
