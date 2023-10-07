'use client';
import { motion } from 'framer-motion';

export default function Headline() {
	return (
		<div className='flex flex-col gap-4'>
			<motion.h1
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -200 }}
				className={`font-bold max-w-[780px] text-4xl xl:text-5xl mx-auto text-brand-neutral-50 2xl:text-6x text-left md:text-center `}>
				Construímos pontes entre sua marca e seu público
			</motion.h1>
			<motion.p
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -100 }}
				transition={{ delay: 0.3 }}
				className='text-sm md:text-base lg:text-xl text-left md:text-center font-semibold max-w-[300px] md:max-w-full  md:mx-auto  text-brand-neutral-100'>
				Criamos experiências digitais que inspiram e conectam
			</motion.p>
		</div>
	);
}
