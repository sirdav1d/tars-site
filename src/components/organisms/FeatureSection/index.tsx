/** @format */
'use client';

import Title from '@/components/atoms/title';
import Lottie from 'lottie-react';
import lpLottie from '../../../../public/lotties/lpLottie.json';
import React from 'react';
import { LiaFunnelDollarSolid } from 'react-icons/lia';
import { GiTargeting } from 'react-icons/gi';

interface FeatureProps {
	title: string;
	description: string;
	benefits?: {
		head: string;
		text: string;
		icon: JSX.Element;
	};
}

export default function FeatureSection(props: FeatureProps) {
	return (
		<div className='rounded flex px-6 xl:px-20 justify-center gap-14 items-center h-fit pt-20 mx-auto'>
			<div className='flex gap-14 lg:gap-8   w-full max-w-[1440px] mx-auto justify-between flex-col lg:flex-row'>
				<div className='flex flex-col gap-10 lg:w-2/3'>
					<div className='flex flex-col gap-5'>
						<Title headline={props.title} />
						<p className='text-base'>{props.description}</p>
					</div>
          
					<div className='flex gap-8 lg:gap-20 flex-col lg:flex-row'>
						<div className='flex flex-col gap-3'>
							<div className='flex flex-col gap-2'>
								<LiaFunnelDollarSolid
									size={40}
									color={'#00A0FF'}
									className='drop-shadow-cards animate-pulse'
								/>
								<h4 className='font-montserratTitle font-bold text-xl'>
									Geração de Leads
								</h4>
							</div>

							<p className='text-sm'>
								As landing pages são projetadas para capturar informações de
								contato dos visitantes, ajudando a criar uma lista de leads de
								alta qualidade.
							</p>
						</div>
						<div className='flex flex-col gap-3'>
							<div className='flex flex-col gap-2'>
								<GiTargeting
									size={40}
									color={'#00A0FF'}
									className='drop-shadow-cards animate-pulse'
								/>
								<h4 className='font-montserratTitle font-bold text-xl'>
									Campanhas Direcionadas
								</h4>
							</div>
							<p className='text-sm'>
								Você pode criar landing pages específicas para campanhas de
								marketing, o que aumenta a relevância e a eficácia da mensagem.
							</p>
						</div>
					</div>
				</div>
				<Lottie
					animationData={lpLottie}
					className='w-1/3 xl:w-1/2 mx-auto'
				/>
			</div>
		</div>
	);
}
