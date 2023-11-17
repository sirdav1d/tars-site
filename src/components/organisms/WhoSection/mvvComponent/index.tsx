/** @format */

'use client';
import { MVVAnimation, ParagraphAnimation, TitleAnimation } from '@/animations';
import { motion } from 'framer-motion';
import { BsPeople } from 'react-icons/bs';
import { PiTargetDuotone } from 'react-icons/pi';
import { TfiTarget } from 'react-icons/tfi';

interface MVVProps {
	role: string;
	title: string;
	paragraph: string;
}
export default function MVVComponent({ paragraph, role, title }: MVVProps) {
	return (
		<>
			<div className='flex flex-col  gap-3 rounded items-center  w-full'>
				<div className='flex gap-3 items-center '>
					{role == 'missao' && (
						<motion.div
							variants={MVVAnimation}
							whileInView={'open'}
							viewport={{ amount: 0.9, once: true }}
							initial='close'>
							<PiTargetDuotone
								className='text-brand-blue-300 font-light drop-shadow-icons animate-pulse'
								size={40}
							/>
						</motion.div>
					)}

					{role == 'visao' && (
						<motion.div
							variants={MVVAnimation}
							whileInView={'open'}
							viewport={{ amount: 0.9, once: true }}
							initial='close'>
							<TfiTarget
								className='text-brand-blue-300 font-light drop-shadow-icons animate-pulse'
								size={40}
							/>
						</motion.div>
					)}

					{role == 'valores' && (
						<motion.div
							variants={MVVAnimation}
							whileInView={'open'}
							viewport={{ amount: 0.9, once: true }}
							initial='close'>
							<BsPeople
								className='text-brand-blue-300 font-light drop-shadow-icons animate-pulse'
								size={40}
							/>
						</motion.div>
					)}

					<motion.h3
						variants={TitleAnimation}
						whileInView={'open'}
						viewport={{ amount: 0.9, once: true }}
						initial='close'
						className={`font-montserratTitle font-bold text-xl `}>
						{title}
					</motion.h3>
				</div>
				<motion.div
					variants={ParagraphAnimation}
					whileInView={'open'}
					viewport={{ amount: 0.9, once: true }}
					initial='close'
					className='text-sm text-center'>
					{paragraph}
				</motion.div>
			</div>
		</>
	);
}
