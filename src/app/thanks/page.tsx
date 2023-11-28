/** @format */

import Button from '@/components/atoms/button';
import Footer from '@/components/atoms/footer';
import SocialMediaList from '@/components/molecules/socialMediasList';
import { Metadata } from 'next';
import Image from 'next/image';
import { IoArrowBack } from 'react-icons/io5';

export const metadata: Metadata = {
	title: 'Obrigado! - Agência Tars Projetos',
	description:
		'Agradeçemos pela confiança, a equipe comercial da Tars Projetos entrará em contato o mais rápido possível, mas deixamos de presente um e-book te ensinando estratégias de como trabalhar com tráfego pago',
};

export default function ThanksPage() {
	return (
		<main className='h-full pt-14 bg-bgHero flex flex-col justify-center items-center min-h-screen overflow-x-hidden relative w-full pb-48 text-brand-neutral-50'>
			<div className='flex flex-col items-center p-6 max-w-[1440px] mx-auto mb-6'>
				<div className='flex my-12 mx-0 lg:mx-12 lg:mt:0 gap-10 flex-col lg:flex-row max-w-[1024px] items-center justify-center '>
					<div className='flex w-full lg:w-2/3  flex-col gap-5'>
						<div className='flex flex-col gap-4'>
							<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
							<h2 className={`font-montserratTitle text-5xl font-extrabold`}>
								Obrigado!
							</h2>
						</div>
						<h3 className='text-lg font-semibold'>
							Nosso time comercial entrará em contato em alguns instantes
						</h3>
						<p className='text-base font-normal mt-5 leading-relaxed'>
							Para agradecer pela sua confiança, disponibilizamos um e-book
							gratuito que pode te ajudar a entender a importância do SEO
							(Ferramenta de Otimização de Pesquisa) do Google, no seu site, ou
							da sua empresa.{' '}
						</p>
						<div className='w-full font-bold flex '>
							<a
								href={'/'}
								className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300 flex items-center justify-center gap-3'>
								<IoArrowBack size={32} />
								<p className='text-brand-neutral-50'>Voltar ao Site</p>
							</a>
						</div>
					</div>
					<div className='flex flex-col w-full lg:w-1/3 items-center justify-center '>
						<Image
							className='animate-pulse'
							src={'/images/trafegoImage.webp'}
							width={240}
							height={380}
							alt='Capa do livro, o manual do tráfego'
						/>
						<Button
							text={'Baixar Grátis'}
							role='thanks'
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
