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
			<motion.h1
				variants={FadeAnimation}
				animate={'open'}
				initial='close'
				className={`font-bold max-w-[780px] text-4xl xl:text-5xl 2xl:text-6x text-left md:text-center ${montSerrat.className}`}>
				Construímos pontes entre sua marca e seu público
			</motion.h1>
			<motion.p
				variants={SubHeadAnimation}
				animate={'open'}
				initial='close'
				className='text-xs md:text-base lg:text-xl text-left md:text-center  '>
				Criamos experiências digitais que inspiram e conectam
			</motion.p>
		</>
	);
}
