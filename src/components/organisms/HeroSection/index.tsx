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
			className='relative h-[100vh] '>
			<Header />
			<BgHero />
			<div className='flex flex-col gap-14  max-w-[1024px] mx-6 xl:mx-auto md:items-center justify-center'>
				<div className='flex flex-col mt-[30vh] lg:mt-[40vh] gap-4 drop-shadow-md'>
					<h2
						className={`font-bold text-4xl md:text-6xl text-left md:text-center ${montSerrat.className}`}>
						Construímos pontes entre sua marca e seu público
					</h2>
					<p className='text-sm md:text-2xl text-left md:text-center  '>
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
