'use client';
import React from 'react';
import Button from '../button';
import { MVVAnimation, ParagraphAnimation, TitleAnimation } from '@/animations';
import { motion } from 'framer-motion';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function CTA() {
	return (
		<div className='mt-20 flex  flex-col w-full items-center justify-center gap-6 text-center rounded-sm bg-bgCTA p-6'>
			<motion.h2
				variants={TitleAnimation}
				whileInView={'open'}
				viewport={{ amount: 0.9, once: true }}
				initial='close'
				className={`text-2xl md:text-4xl font-bold ${montSerrat.className} max-w-2xl`}>
				Venha descobrir como um site pode te ajudar a vender mais
			</motion.h2>
			<motion.div
				variants={TitleAnimation}
				whileInView={'open'}
				viewport={{ amount: 0.9, once: true }}
				initial='close'>
				<Button
					role='CTA'
					text={'Entrar em Contato'}
				/>
			</motion.div>
		</div>
	);
}
