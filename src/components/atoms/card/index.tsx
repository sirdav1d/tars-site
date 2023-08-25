'use client';
import React from 'react';
import { ServicesProps } from '@/mock/services.data';
import { BiLayer } from 'react-icons/bi';
import { motion, AnimatePresence } from 'framer-motion';
import { CardAnimation } from '@/animations';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface CardProps {
	data: ServicesProps;
}

export default function Card({ data }: CardProps) {
	return (
		<AnimatePresence>
			<motion.div
				variants={CardAnimation}
				whileInView='open'
				exit='close'
				className={`relative w-[300px] h-[240px] lg:w-[240px] lg:h-[200px] bg-brand-neutral-700 flex items-center justify-center rounded border border-brand-neutral-50/40 font-bold text-2xl text-center p-5 shadow-md drop-shadow-md ${montSerrat.className} cursor-pointer hover:scale-110 hover:shadow-brand-red-500 hover:shadow-lg hover:border-brand-red-100 transition-all duration-300`}>
				<span className='absolute right-2 top-2 text-brand-red-300'>
					<BiLayer />
				</span>
				{data.name}
			</motion.div>
		</AnimatePresence>
	);
}
