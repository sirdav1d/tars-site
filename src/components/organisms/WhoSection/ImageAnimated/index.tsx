'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import teamImage from '/public/images/team.webp';
import { WhoImageAnimation } from '@/animations';

export default function ImageAnimated() {
	return (
		<motion.div
			variants={WhoImageAnimation}
			initial='close'
			whileInView={'open'}
			viewport={{ once: true }}
			className='mix-blend-lighten backdrop-grayscale-[-19.159px -123.664px / 111.111% 149.495%] w-full hidden xl:flex  items-center justify-center'>
			<Image
				alt='Imagem de um grupo de pessoas em neon'
				src={teamImage}
				width={480}
				height={360}
			/>
		</motion.div>
	);
}
