/** @format */

'use client';
import {
	ParagraphAnimation
} from '@/animations';
import { motion } from 'framer-motion';
import Title from '../title';

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
				<Title headline={headline} />
			</div>

			{paragraph1 && (
				<>
					<motion.div
						variants={ParagraphAnimation}
						whileInView={'open'}
						viewport={{ amount: 0.9, once: true }}
						initial='close'
						className='mt-3 xl:text-lg text-base md:text-center leading-7 '>
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
						className='leading-7 xl:text-base text-sm  '>
						{paragraph2}
					</motion.div>
				</>
			)}
		</>
	);
}
