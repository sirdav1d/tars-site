import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { Montserrat } from 'next/font/google';
import Button from '@/components/atoms/button';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export const metadata: Metadata = {
	title: 'Obrigado! - Agência Tars Projetos',
};

export default function ThanksPage() {
	return (
		<main className='h-screen overflow-x-hidden relative w-full text-brand-neutral-50 bg-bgThanks bg-no-repeat bg-cover'>
			<div className='flex flex-col items-center p-10 max-w-[1440px] mx-auto'>
				<Image
					className='w-[380px]'
					src={'/logos/logoThanks.png'}
					width={480}
					height={100}
					alt='logo tars projetos'></Image>
				<div className='flex my-12 mx-0 lg:m-16 gap-10 flex-col lg:flex-row max-w-[1024px] items-center justify-center'>
					<div className='flex w-full lg:w-2/3  flex-col gap-5'>
						<div className='flex flex-col gap-4'>
							<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
							<h2 className={`${montSerrat.className} text-5xl font-extrabold`}>
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
					</div>
					<div className='flex flex-col w-full lg:w-1/3 items-center justify-center'>
						<Image
							className='animate-pulse'
							src={'/images/trafegoImage.png'}
							width={280}
							height={320}
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
