import Footer from '@/components/atoms/footer';
import Image from 'next/image';
import { FaArrowTurnDown } from 'react-icons/fa6';

import FormComponent from '@/components/molecules/form';
import SocialMediaList from '@/components/molecules/socialMediasList';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function ContactSection() {
	return (
		<div
			id='contact'
			className='px-4 py-5 lg:py-10 flex flex-col items-center  justify-center gap-10 lg:gap-20  '>
			<SocialMediaList />
			<section className='flex  mb-16 flex-col lg:flex-row items-center lg:items-baseline justify-between gap-12 max-w-[1440px]'>
				<legend
					className={`${montSerrat.className} lg:hidden flex items-center justify-center gap-3 mx-6`}>
					<h3>Links Úteis</h3>
					<FaArrowTurnDown
						size={32}
						className='text-brand-blue-500 drop-shadow-icons'
					/>
				</legend>
				<div className='flex flex-wrap lg:flex-col items-start justify-center gap-4 lg:text-lg text-sm w-full lg:w-1/2 px-3'>
					<legend
						className={`${montSerrat.className} hidden lg:flex items-center justify-center gap-3 no-underline`}>
						<h3>Links Úteis</h3>
						<FaArrowTurnDown
							size={32}
							className='text-brand-blue-500 drop-shadow-icons'
						/>
					</legend>
					<a
						className='hover:text-brand-red-500 underline'
						href='#home'>
						Home
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#who'>
						Quem Somos
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#service'>
						Serviços
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#plans'>
						Planos
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						href='#contact'>
						Contato
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						target='_blank'
						href='/resources/Politica.pdf'>
						Políticas de Privacidade
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 underline'
						target='_blank'
						href='/resources/Termos.pdf'>
						Termos de uso
					</a>
				</div>

				<div className=' w-full lg:w-1/2 '>
					<FormComponent />
				</div>
			</section>
			<div className='absolute bottom-0  opacity-30 -z-10 '>
				<Image
					className='h-auto lg:w-[560px] w-[480px] '
					src={'/images/ImageFooter.png'}
					alt={'Logo Tars Projetos'}
					width={440}
					height={600}
				/>
			</div>
			<div className='absolute bottom-0 z-50 left-0'>
				<Footer />
			</div>
		</div>
	);
}
