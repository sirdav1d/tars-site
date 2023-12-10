/** @format */

import Title from '@/components/atoms/title';
import { benefitsBussiness } from '@/mock/services.data';
import { BiMedal } from 'react-icons/bi';
import PlanCard from './PlanCard';

export default function PlanSection() {
	return (
		<main
			id='plans'
			className=' pt-12 md:px-14 xl:px-20 px-5 text-brand-neutral-900 flex flex-col w-screen relative bg-brand-neutral-100 gap-6 items-center justify-center '>
			<div className='w-full max-w-7xl mx-auto'>
				<div className='flex items-end justify-between flex-col gap-5 lg:flex-row w-full'>
					<div className='flex flex-col w-full gap-10'>
						<Title headline={'Conheça os Diferenciais da Nossa Abordagem'} />
						<ul className='grid md:grid-cols-2 gap-5 '>
							{benefitsBussiness.text.map((t, index) => {
								return (
									<li
										key={index}
										className='flex gap-2  items-center'>
										<BiMedal
											size={24}
											color={'#00A0FF'}
											className='drop-shadow-cards animate-pulse'
										/>
										<p className='font-bold text-xs xl:text-base'>{t}</p>
									</li>
								);
							})}
						</ul>
					</div>
					<div className='lg:w-1/2'>
						{/* <LottieComponent lottie={plansLottie} /> */}
					</div>
				</div>
				<div className='mt-14 text-brand-neutral-900 mb-10'>
					<Title headline='Adquira o Plano Ideal Para Você e Sua Equipe' />
				</div>

				<div className=' grid xl:grid-cols-4 sm:grid-cols-2 pb-10 mx-auto gap-5 '>
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
						link='https://api.whatsapp.com/send?phone=5521967821268&text=Ol%C3%A1,%20estava%20no%20seu%20site%20e%20gostaria%20de%20conhecer%20o%20plano%20trafego.'
						key='trafego'
						role='Tráfego'
					/>
				</div>
			</div>
		</main>
	);
}
