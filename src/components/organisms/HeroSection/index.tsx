/** @format */
import Button from '@/components/atoms/button';
import Headline from './HeadLine';
import Image from 'next/image';
import heroImage from '../../../../public/images/business.png';

export default function HeroSection() {
	return (
		<main
			id='home'
			className=' h-screen bg-cover bg-bgHero flex items-center md:px-14 px-4 '>
			<div className='flex flex-col w-full gap-40 md:gap-8 lg:gap-0 max-w-7xl md:mx-auto justify-between items-center min-h-screen  h-full'>
				<div className='flex mt-14 items-center justify-between drop-shadow-md relative w-full h-full  '>
					<div className='flex flex-col gap-28 md:gap-40  lg:w-1/2'>
						<Headline />

						<Button
							role='hero'
							text={'Começar Agora'}
							link='https://forms.gle/yqvmJYZqK88aRWk26'
						/>
					</div>
					<div className='w-1/2 hidden lg:flex items-center justify-end object-contain animate-bounceEaseAnimation'>
						<Image
							className=' object-contain drop-shadow-img'
							src={heroImage}
							width={440}
							height={440}
							alt='Imagem de flat design de equipe trabalhando'
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
