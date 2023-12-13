/** @format */

import Button from '@/components/atoms/button';
import Title from '@/components/atoms/title';
import {
	BiCloudUpload,
	BiConversation,
	BiLogoGoogle,
	BiLogoReact,
	BiPaintRoll,
} from 'react-icons/bi';
import StepComponent from './StepComponent';
import Paragraph from '@/components/atoms/paragraph';
import { MotionDiv } from '@/components/atoms/MotionDiv';
import {
	StepComponentFadeAnimation,
	StepWrapperFadeAnimation,
} from '@/animations';

export default function WhoSection() {
	return (
		<div
			id='who'
			className=' rounded flex md:px-14 xl:px-20 px-5 flex-col justify-center gap-14 items-center h-full pt-10'>
			<div className='flex items-center justify-between  max-w-7xl mx-auto h-fit '>
				<div className='flex flex-col w-full gap-3 items-center mx-auto justify-center'>
					<Title headline={'Nossa Jornada Digital Começa Aqui'} />
					<Paragraph className='prose-base text-neutral-100'>
						Com especialistas em web design, desenvolvimento web e marketing
						digital, criamos websites de alto impacto que não apenas
						impressionam, mas também geram conversões significativas. Nossa
						abordagem focada no cliente garante que você participe ativamente do
						processo de construção do seu site, para que o resultado final seja
						uma extensão da sua visão e valores na web.
					</Paragraph>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row items-start justify-start gap-10 w-full max-w-7xl mx-auto pb-3'>
				<div className='flex gap-14 flex-col md:flex-row'>
					<div className='flex flex-col gap-10 w-full lg:w-1/2'>
						<Title
							headline={
								'Entenda Nossos 5 Passos Para Transformar Suas Ideias em Realidade'
							}
						/>
						<div className='hidden md:block'>
							<Button
								text={'Quero Dar o Primeiro Passo'}
								role='CTA'
								link='https://docs.google.com/forms/d/1MwKcGFfHl8QWyZdNT56Gh7Ib4yC4AqNFE-V-7QfiakM/prefill'
							/>
						</div>
					</div>
					<MotionDiv
						variants={StepWrapperFadeAnimation}
						initial='close'
						whileInView={'open'}
						className='flex flex-col gap-8 w-full lg:w-1/2'>
						<MotionDiv variants={StepComponentFadeAnimation}>
							<StepComponent
								title='Início da Conversa'
								text='Nós iniciamos o contato com o cliente por e-mail ou WhatsApp, e	através de um formulário, coletamos informações relacionadas ao nicho de mercado, principais produtos, benefícios oferecidos e referências visuais.'
								icon={
									<BiConversation
										size={32}
										color={'#00A0FF'}
									/>
								}
							/>
						</MotionDiv>
						<MotionDiv variants={StepComponentFadeAnimation}>
							<StepComponent
								title='Protótipo Gratuito'
								text='Criamos um protótipo gratuito do site com base nas informações coletadas. O cliente avalia o protótipo e fornece feedback.'
								icon={
									<BiPaintRoll
										size={32}
										color={'#00A0FF'}
									/>
								}
							/>
						</MotionDiv>
						<MotionDiv variants={StepComponentFadeAnimation}>
							<StepComponent
								title='Desenvolvimento do Site'
								text='Após a aprovação do protótipo, começamos a desenvolver o site em React JS, incorporando animações e interatividade para uma experiência atraente.'
								icon={
									<BiLogoReact
										size={32}
										color={'#00A0FF'}
									/>
								}
							/>
						</MotionDiv>
						<MotionDiv variants={StepComponentFadeAnimation}>
							<StepComponent
								title='Configuração de Campanha no Google Ads'
								text='Oferecemos a configuração gratuita de uma campanha no Google Ads, caso o cliente deseje promover seu site. O cliente aprova e valida a campanha.'
								icon={
									<BiLogoGoogle
										size={32}
										color={'#00A0FF'}
									/>
								}
							/>
						</MotionDiv>
						<MotionDiv variants={StepComponentFadeAnimation}>
							<StepComponent
								title='Hospedagem e Suporte Contínuo'
								text='Após a conclusão da campanha, fornecemos serviços contínuos, incluindo hospedagem, manutenção e atualização do site, com agendamentos para garantir que a presença online do cliente seja sempre otimizada e eficaz'
								icon={
									<BiCloudUpload
										size={32}
										color={'#00A0FF'}
									/>
								}
							/>
						</MotionDiv>
					</MotionDiv>
					<div className='md:hidden block'>
						<Button
							text={'Quero Dar o Primeiro Passo'}
							role='CTA'
							link='https://forms.gle/yqvmJYZqK88aRWk26'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
