'use client';
import { FadeAnimation, SubHeadAnimation } from '@/animations';
import { motion } from 'framer-motion';
import React from 'react';

export default function Headline() {
	return (
		<>
			<motion.h1
				variants={FadeAnimation}
				animate={'open'}
				initial='close'
				className={`font-bold font-montserratTitle max-w-[780px] text-4xl xl:text-5xl mx-auto text-brand-neutral-50 2xl:text-6x text-left md:text-center `}>
				Construímos pontes entre sua marca e seu público
			</motion.h1>
			<motion.p
				variants={SubHeadAnimation}
				animate={'open'}
				initial='close'
				className='text-sm font-montserratTitle md:text-base lg:text-xl text-left md:text-center font-semibold max-w-[300px] md:max-w-full  md:mx-auto  text-brand-neutral-100'>
				Criamos experiências digitais que inspiram e conectam
			</motion.p>
		</>
	);
}
