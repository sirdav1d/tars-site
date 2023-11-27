/** @format */

import Button from '@/components/atoms/button';

import { ReactElement } from 'react';

interface PlanCardProps {
	role?: string;
	link?: string;
	icon?: ReactElement<any, any>;
	mainProduct?: string;
	mainDescription?: string;
	mainPrice?: string;
}

export default function PlanCard({
	role,
	link,
	mainProduct,
	mainDescription,
	mainPrice,
}: PlanCardProps) {
	return (
		<>
			<div
				data-role={role}
				className='z-30  w-[288px] h-[412px] rounded-lg bg-white border border-brand-neutral-100 backdrop-blur-sm flex flex-col justify-between   items-center shadow-xl'>
				<div className='flex items-center justify-center bg-brand-neutral-950 w-full rounded-t-lg p-3'>
					<h3
						className={`text-xl text-center font-bold drop-shadow-lg text-brand-neutral-50 `}>
						{role}
					</h3>
				</div>

				<div className='flex flex-col gap-3  drop-shadow-lg p-3 items-stretch justify-between h-full w-full'>
					<div>
						<div className='flex flex-col gap-1'>
							{' '}
							<h3 className=' font-bold text-lg md:text-xl text-brand-neutral-950'>
								{mainProduct}
							</h3>
							<p className='text-xs  text-brand-neutral-600'>
								{mainDescription}
							</p>
						</div>
						<div
							data-role={role}
							className=' flex-col gap-1 data-[role=Tráfego]:flex hidden mt-2'>
							{' '}
							<h3 className=' font-bold text-base md:text-lg text-brand-neutral-950'>
								Config. Google Meu Negócio
							</h3>
							<p className='text-xs  text-brand-neutral-600'>
								Seja Visto no Google Maps
							</p>
						</div>
						<div
							data-role={role}
							className=' flex-col gap-1 data-[role=Tráfego]:flex hidden mt-2'>
							{' '}
							<h3 className=' font-bold text-base md:text-lg text-brand-neutral-950'>
								Relatórios Semanais
							</h3>
							<p className='text-xs  text-brand-neutral-600'>
								Saiba como seu investimento está sendo gasto e tenha o controle
								dos seus leads
							</p>
						</div>

						<h4 className='font-bold text-brand-neutral-900 text-lg mt-2'>
							{mainPrice}
						</h4>
						<p
							data-role={role}
							className='text-xs  text-brand-neutral-600 data-[role=Profissional]:block hidden'>
							+ R$200,00 por página{' '}
						</p>
						<p
							data-role={role}
							className='text-xs  text-brand-neutral-600 data-[role=Empresarial]:block hidden'>
							+ variável por Demanda
						</p>
					</div>
					<div
						data-role={role}
						className='data-[role=Tráfego]:hidden'>
						<div className='flex flex-col gap-1'>
							{' '}
							<h3 className=' font-bold text-base text-brand-neutral-950'>
								Manutenção + Hospedagem
							</h3>
							<p className='text-xs  text-brand-neutral-600'>
								Atualizações mensais com agendamento
							</p>
						</div>

						<h4 className='font-bold text-brand-neutral-900 text-lg mt-2'>
							R$300,00 por mês
						</h4>
						<p
							data-role={role}
							className='text-xs  text-brand-neutral-600 data-[role=Empresarial]:block hidden'>
							+ variável por Demanda
						</p>
					</div>

					<Button
						text='Saiba Mais'
						role='plans'
						link={link}
					/>
				</div>
			</div>
		</>
	);
}
