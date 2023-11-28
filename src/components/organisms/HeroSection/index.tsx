/** @format */
import Button from '@/components/atoms/button';
import Headline from './HeadLine';
import Image from 'next/image';
import heroImage from '../../../../public/images/heroImage2.png';

export default function HeroSection() {
	return (
		<main
			id='home'
			className=' h-screen bg-cover bg-bgHero flex items-center md:px-14 px-4 '>
			<div className='flex flex-col w-full gap-40 md:gap-8 lg:gap-0   max-w-[1440px] md:mx-auto justify-between items-center h-full'>
				<div className='flex mt-14 items-center justify-between drop-shadow-md relative h-full '>
					<div className='flex flex-col gap-28 md:gap-40 '>
						<Headline />

						<Button
							role='hero'
							text={'Começar Agora'}
							link='https://docs.google.com/forms/d/1MwKcGFfHl8QWyZdNT56Gh7Ib4yC4AqNFE-V-7QfiakM/prefill'
						/>
					</div>
					<div className='w-full hidden lg:block object-contain animate-bounceEaseAnimation'>
						<Image
							className=' object-contain xl:scale-110 drop-shadow-spanCards'
							src={heroImage}
							width={900}
							height={900}
							alt='Imagem de flat design de equipe trabalhando'
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
