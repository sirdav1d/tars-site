/** @format */
'use client';
import Button from '@/components/atoms/button';
import Header from '@/components/molecules/header';
import Lottie from 'lottie-react';
import heroLottie from '../../../../public/lotties/heroLottie.json';
import Headline from './HeadLine';

export default function HeroSection() {
	return (
		<div
			id='home'
			className='relative h-screen bg-cover bg-bgHero flex items-center md:px-14 px-5'>
			<Header />

			<div className='flex flex-col w-full gap-40 md:gap-8 lg:gap-0  max-w-[1440px] md:mx-auto justify-between'>
				<div className='flex mt-20 md:mt-0 items-center justify-between drop-shadow-md relative h-full'>
					<Headline />
					<div className='w-full hidden md:block object-contain'>
						{' '}
						<Lottie animationData={heroLottie} />
					</div>
				</div>
				<Button
					role='hero'
					text={'Fazer Orçamento'}
				/>
			</div>
		</div>
	);
}
