/** @format */
import Button from '@/components/atoms/button';
import LottieComponent from '@/components/atoms/lottie';
import heroLottie from '../../../../public/lotties/heroLottie.json';
import Headline from './HeadLine';

export default function HeroSection() {
	return (
		<main
			id='home'
			className=' h-screen bg-cover bg-bgHero flex items-center md:px-14 px-5'>
			<div className='flex flex-col w-full gap-40 md:gap-8 lg:gap-0  max-w-[1440px] md:mx-auto justify-between items-center h-full'>
				<div className='flex mt-14 md:mt-0 items-center justify-between drop-shadow-md relative h-full'>
					<div className='flex flex-col gap-28 md:gap-40 '>
						<Headline />

						<Button
							role='hero'
							text={'Começar Agora'}
						/>
					</div>
					<div className='w-full hidden md:block object-contain'>
						{/* <LottieComponent lottie={heroLottie} /> */}
					</div>
				</div>
			</div>
		</main>
	);
}
