import Header from '@/components/molecules/header';
import React from 'react';
import BgHero from './bghero';
import Button from '@/components/atoms/button';
import { Montserrat } from 'next/font/google';
import { BsCashCoin, BsSpeedometer2 } from 'react-icons/bs';
import { HiStatusOnline } from 'react-icons/hi';
import Drawer from '@/components/atoms/drawer';

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
			<Drawer />
			<BgHero />
			<div className='flex flex-col gap-14  max-w-[1024px] md:mx-auto md:items-center justify-center px-6'>
				<div className='flex flex-col mt-[25vh]  gap-4 drop-shadow-md'>
					<h2
						className={`font-bold text-4xl md:text-6xl text-left md:text-center ${montSerrat.className}`}>
						Construímos pontes entre sua marca e seu público
					</h2>
					<p className='text-xs md:text-2xl text-left md:text-center  '>
						Criamos experiências digitais que inspiram e conectam
					</p>
				</div>
				<Button
					role='hero'
					text={'Fazer Orçamento'}
				/>
			</div>
			<div className='w-full hidden xl:flex bg-brand-neutral-300/25 backdrop-blur-md h-[20vh] gap-10 px-12 2xl:px-20 absolute bottom-[-0px]  justify-between items-center '>
				<div className='flex flex-col max-w-md items-start gap-3'>
					<div className='flex gap-3 items-center justify-center '>
						<div className='text-brand-blue-500  drop-shadow-icons '>
							<BsCashCoin size={32} />
						</div>
						<h3 className={`font-bold  lg:text-md ${montSerrat.className}`}>
							Aumente suas Vendas
						</h3>
					</div>

					<p className='text-xs drop-shadow'>
						Comunique, atraia, venda. Um site é a ferramenta definitiva para
						contar sua história, atrair interessados e fechar vendas de forma
						consistente.
					</p>
				</div>

				<div className='flex flex-col max-w-md items-start gap-3 '>
					<div className='flex gap-3 items-center justify-center '>
						<div className='text-brand-blue-500  drop-shadow-icons '>
							<HiStatusOnline size={32} />
						</div>
						<h3 className={`font-bold  lg:text-md ${montSerrat.className}`}>
							Conquiste sua visibilidade online
						</h3>
					</div>

					<p className='text-xs drop-shadow'>
						Uma presença sólida na internet não apenas aumenta o alcance, mas
						também cria confiança. Esteja onde seus clientes estão, e veja suas
						vendas e reconhecimento dispararem.
					</p>
				</div>
				<div className='flex flex-col max-w-md items-start gap-3 '>
					<div className='flex gap-3 items-center justify-center '>
						<div className='text-brand-blue-500  drop-shadow-icons '>
							<BsSpeedometer2 size={32} />
						</div>
						<h3 className={`font-bold  lg:text-md ${montSerrat.className}`}>
							Adquira seu site em menos de 7 dias
						</h3>
					</div>

					<p className='text-xs drop-shadow'>
						Tempo é dinheiro, e um site original em menos de 7 dias é um
						investimento que oferece retorno rápido. Alcance um público mais
						amplo e veja seus negócios prosperarem.
					</p>
				</div>
			</div>
		</div>
	);
}
