/** @format */

'use client';
import {
	ParagraphAnimation,
	TitleAnimation,
	TitleSpanAnimation,
} from '@/animations';
import { motion } from 'framer-motion';

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
			<div className='flex flex-col  w-fit py-3 mx-auto'>
				<motion.h2
					variants={TitleAnimation}
					whileInView={'open'}
					viewport={{ once: true }}
					initial='close'
					className={`font-bold text-3xl  font-montserratTitle md:text-center`}>
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
						className='mt-3 xl:text-lg text-base md:text-center  '>
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
