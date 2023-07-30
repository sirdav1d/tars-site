import Header from '@/components/molecules/header';
import React from 'react';
import BgHero from './bghero';
import Button from '@/components/atoms/button';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function HeroSection() {
	return (
		<div
			id='home'
			className='relative h-[96vh]'>
			<Header />
			<BgHero />
			<div className='flex flex-col gap-14 mt-[25vh] max-w-[1280px] mx-6 xl:mx-auto '>
				<div className='flex flex-col gap-3 drop-shadow-lg'>
					<h2
						className={`font-bold text-4xl lg:text-6xl leading-tight ${montSerrat.className}`}>
						Construímos pontes entre
						<br /> sua marca e seu público
					</h2>
					<p className='text-md lg:text-2xl '>
						Criamos experiências digitais que inspiram e conectam
					</p>
				</div>
				<Button
					role='hero'
					text={'Fazer Orçamento'}
				/>
			</div>
		</div>
	);
}
