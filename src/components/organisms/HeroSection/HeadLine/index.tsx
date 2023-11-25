/** @format */

'use client';
import { SpanHeadAnimation } from '@/animations';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Headline() {
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const text = [' Performance', ' Liderança', ' Oportunidades'];
	const [textHero, setTextHero] = useState(text[0]);

	// eslint-disable-next-line react-hooks/exhaustive-deps
	function textSwitch() {
		setTimeout(() => {
			if (textHero === text[0]) {
				setTextHero(text[1]);
			}
		}, 1500);

		setTimeout(() => {
			if (textHero === text[1]) {
				setTextHero(text[2]);
			}
		}, 1500);
		setTimeout(() => {
			if (textHero === text[2]) {
				setTextHero(text[0]);
			}
		}, 1500);
	}

	useEffect(() => {
		textSwitch();
	}, [textHero, textSwitch]);

	return (
		<AnimatePresence
			mode='wait'
			presenceAffectsLayout={true}>
			<motion.div
				animate={{ opacity: 1, x: 0 }}
				initial={{ opacity: 0, x: -80 }}
				transition={{ delay: 0.8, duration: 0.8 }}
				className=' flex gap-3  h-full '>
				<h1
					className={`font-bold  text-3xl xl:text-5xl 2xl:text-6xl h-full mx-auto text-brand-neutral-50  text-left `}>
					Oferecemos a chave para o sucesso digital, com serviços que garantem_
					<br />
					<motion.span
						key={textHero}
						variants={SpanHeadAnimation}
						animate='animate'
						initial='initial'
						exit={'exit'}
						className='text-brand-red-500 absolute left-0  md:bottom-auto md:left-auto font-bold text-3xl leading-loose xl:text-5xl mt-4 '>
						{`<${textHero} />`}
					</motion.span>
				</h1>
			</motion.div>
		</AnimatePresence>
	);
}
