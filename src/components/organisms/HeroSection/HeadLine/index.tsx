'use client';
import { Montserrat } from 'next/font/google';
import { FadeAnimation, SubHeadAnimation } from '@/animations';
import { motion } from 'framer-motion';
import React from 'react';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function Headline() {
	return (
		<>
			<motion.h2
				variants={FadeAnimation}
				animate={'open'}
				initial='close'
				className={`font-bold text-4xl md:text-5xl xl:text-6xl text-left md:text-center ${montSerrat.className}`}>
				Construímos pontes entre sua marca e seu público
			</motion.h2>
			<motion.p
				variants={SubHeadAnimation}
				animate={'open'}
				initial='close'
				className='text-xs md:text-2xl text-left md:text-center  '>
				Criamos experiências digitais que inspiram e conectam
			</motion.p>
		</>
	);
}
