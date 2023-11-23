/** @format */

import LottieComponent from '@/components/atoms/lottie';
import Title from '@/components/atoms/title';
import { benefitsBussiness } from '@/mock/services.data';
import { BiMedal } from 'react-icons/bi';
import plansLottie from '../../../../public/lotties/plansLottie.json';
import PlanCard from './PlanCard';

export default function PlanSection() {
	return (
		<main
			id='plans'
			className=' pt-12 text-brand-neutral-900 flex flex-col w-screen relative bg-brand-neutral-100 gap-6 items-center justify-center '>
			<div className='w-full max-w-[1440px] mx-auto  px-5 '>
				<div className='flex items-center justify-between flex-col gap-5 lg:flex-row'>
					<div className='flex flex-col w-full gap-10'>
						<Title headline={'Diferenciais Que Nossos Clientes Adoram'} />
						<div className='flex flex-col gap-3'>
							{benefitsBussiness.text.map((t, index) => {
								return (
									<li
										key={index}
										className='flex gap-2 items-center justify-center'>
										<BiMedal
											size={24}
											color={'#00A0FF'}
											className='drop-shadow-cards animate-pulse'
										/>
										<p className='font-bold text-xs md:text-sm'>{t}</p>
									</li>
								);
							})}
						</div>
					</div>
					<LottieComponent lottie={plansLottie} />
				</div>
				<div className='mt-14 mx-5 text-brand-neutral-900 mb-10'>
					<Title headline='Adquira o Plano Ideal Para Você e Sua Equipe' />
				</div>

				<div className=' lg:gap-2 gap-5 justify-center flex flex-wrap items-center pb-10 mx-auto '>
					<PlanCard
						mainProduct='Site Página Única'
						mainDescription='Single Page Application (SPA)'
						mainPrice='R$1.200,00'
						link={
							'https://api.whatsapp.com/send?phone=5521967821268&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20conhecer%20o%20plano%20iniciante.'
						}
						key='Iniciante'
						role='Iniciante'
					/>
					<PlanCard
						mainProduct='Site Multi Pages'
						mainDescription='Bussiness WebSite de múltiplas páginas'
						mainPrice='R$1.200,00'
						link='https://api.whatsapp.com/send?phone=5521967821268&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20conhecer%20o%20plano%20profissional.'
						key='Profissional'
						role='Profissional'
					/>
					<PlanCard
						mainProduct='Produto Digital On Demand '
						mainDescription='Sites Ilimitados para atender a demanda específica da sua empresa'
						mainPrice='R$2.000,00'
						link='https://api.whatsapp.com/send?phone=5521967821268&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20conhecer%20o%20plano%20empresarial.'
						key='Empresarial'
						role='Empresarial'
					/>
					<PlanCard
						mainProduct='Config. Google ADS'
						mainDescription='Primeira Campanha Gratuita, Configurada e integrada ao seu site'
						mainPrice='R$1.000,00 por mês'
						link='https://api.whatsapp.com/send?phone=5521967821268&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20conhecer%20o%20plano%20empresarial.'
						key='trafego'
						role='Tráfego'
					/>
				</div>
			</div>
		</main>
	);
}
