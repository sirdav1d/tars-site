'use client';
import Button from '@/components/atoms/button';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import { PlansCardAnimation } from '@/animations';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { ReactElement } from 'react';

interface PlanCardProps {
	text: string[];
	style: string[];
	role: string;
	link?: string;
	icon: ReactElement<any, any>;
}

export default function PlanCard({
	text,
	style,
	role,
	link,
	icon,
}: PlanCardProps) {
	return (
		<>
			<motion.div
				variants={PlansCardAnimation}
				initial='close'
				whileInView={'open'}
				data-role={role}
				viewport={{ amount: 0.75, once: true }}
				className='z-30  data-[role=Profissional]:h-[520px]  min-w-[344px] h-fit rounded-lg bg-brand-neutral-950/50 border border-brand-neutral-100/20 backdrop-blur-sm flex flex-col justify-between gap-4  pb-5 items-center shadow-xl hover:scale-110 transition-all duration-300 ease-in-out'>
				<div className='flex gap-5 items-center justify-center bg-brand-neutral-950 w-full rounded-lg p-3'>
					<div>{icon}</div>
					<h3 className={`text-2xl text-center font-bold drop-shadow-lg`}>
						{role}
					</h3>
				</div>

				<div className='flex flex-col gap-3 mt-1 drop-shadow-lg px-5 justify-between h-full'>
					{text.map((t, index) => {
						return (
							<div
								key={index}
								className='flex justify-start items-center gap-3'>
								<BsFillCheckCircleFill
									color={`${style[index]}`}
									size={14}
								/>
								<p className='text-xs'>{t}</p>
							</div>
						);
					})}
					<Button
						text='Consultar Valor'
						role='plans'
						link={link}
					/>
				</div>
			</motion.div>
		</>
	);
}
