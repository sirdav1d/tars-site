import Button from '@/components/atoms/button';
import Header from '@/components/molecules/header';
import { Montserrat } from 'next/font/google';
import { BsCashCoin, BsSpeedometer2 } from 'react-icons/bs';
import { HiStatusOnline } from 'react-icons/hi';
import BgHero from './bghero';
import Headline from './HeadLine';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function HeroSection() {
	return (
		<div
			id='home'
			className='relative h-[92vh] lg:h-screen'>
			<Header />
			<BgHero />

			<div className='flex flex-col gap-14  max-w-[1024px] md:mx-auto md:items-center justify-center px-6'>
				<div className='flex flex-col mt-[25vh]  gap-4 drop-shadow-md'>
					<Headline />
				</div>
				<Button
					role='hero'
					text={'Fazer Orçamento'}
				/>
			</div>
			<div className='w-full flex bg-brand-neutral-900/10 backdrop-blur-md h-[10vh] lg:h-[20vh] boder-t border-neutral-50/20   px-4 mx-auto 2xl:px-20 absolute bottom-[0px]   items-center '>
				<div className='max-w-[1440px] flex justify-between w-full mx-auto items-center gap-3 lg:gap-10'>
					<div className='flex flex-col w-1/3 items-start gap-2'>
						<div className='flex gap-2 items-center justify-center'>
							<div className='text-brand-blue-500  drop-shadow-icons animate-pulse'>
								<BsCashCoin
									size={28}
									className='w-5 md:w-8'
								/>
							</div>
							<h3
								className={`font-bold text-[8px] md:text-xs lg:text-base ${montSerrat.className}`}>
								Aumente suas Vendas
							</h3>
						</div>

						<p className=' drop-shadow hidden xl:flex text-xs'>
							Comunique, atraia, venda. Um site é a ferramenta definitiva para
							contar sua história, atrair interessados e fechar vendas de forma
							consistente.
						</p>
					</div>

					<div className='flex flex-col w-1/3 items-start gap-2 '>
						<div className='flex gap-2 items-center justify-center '>
							<div className='text-brand-blue-500  drop-shadow-icons animate-pulse'>
								<HiStatusOnline
									size={28}
									className='w-5 md:w-8'
								/>
							</div>
							<h3
								className={`font-bold text-[8px] md:text-xs  lg:text-base ${montSerrat.className}`}>
								Conquiste sua visibilidade online
							</h3>
						</div>

						<p className='drop-shadow  hidden xl:flex text-xs'>
							Uma presença sólida na internet não apenas aumenta o alcance, mas
							também cria confiança. Esteja onde seus clientes estão, e veja
							suas vendas e reconhecimento dispararem.
						</p>
					</div>
					<div className='flex flex-col w-1/3 items-start gap-2 '>
						<div className='flex gap-2 items-center justify-center '>
							<div className='text-brand-blue-500  drop-shadow-icons animate-pulse'>
								<BsSpeedometer2
									size={28}
									className='w-5 md:w-8'
								/>
							</div>
							<h3
								className={`font-bold text-[8px]  md:text-xs lg:text-base ${montSerrat.className}`}>
								Adquira seu site em menos de 7 dias
							</h3>
						</div>

						<p className='drop-shadow  hidden xl:flex text-xs'>
							Tempo é dinheiro, e um site original em menos de 7 dias é um
							investimento que oferece retorno rápido. Alcance um público mais
							amplo e veja seus negócios prosperarem.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
