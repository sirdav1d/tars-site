import React from 'react';
import { Montserrat } from 'next/font/google';
import { PiTargetDuotone } from 'react-icons/pi';
import { TfiTarget } from 'react-icons/tfi';
import { BsPeople } from 'react-icons/bs';
import Image from 'next/image';
import teamImage from '/public/images/team.png';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function WhoSection() {
	return (
		<div
			id='who'
			className='pt-10 shadow-md rounded mt-12 flex px-6  xl:px-20 flex-col justify-between items-end  gap-10'>
			<div className='flex items-center justify-between gap-5 max-w-[1440px] mx-auto'>
				<div className='flex flex-col items-center w-full'>
					<h2 className={`${montSerrat.className} text-3xl text-center`}>
						Conheça a Tars Projetos
					</h2>
					<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
					<p className='mt-6 leading-8 md:text-lg xl:text-xl text-sm '>
						A Tars Projetos atua no mercado de tecnologia a mais de 3 anos,
						expandimos nossos horizontes e nos tornamos especialistas em criação
						de Landing Pages e publicidade online. Nosso objetivo é impulsionar
						o sucesso dos nossos clientes por meio de soluções inovadoras e
						resultados excepcionais.
						<br /> <br />
						Combinamos criatividade e tecnologia avançada para ajudá-los a se
						destacar em um mercado competitivo. Se você busca resultados
						impactantes, conte com a Tars Projetos para elevar o seu negócio ao
						próximo nível.
					</p>
				</div>
				<div className='mix-blend-lighten backdrop-grayscale-[-19.159px -123.664px / 111.111% 149.495%] w-full hidden xl:flex  items-center justify-center'>
					<Image
						alt='Imagem de um grupo de pessoas em neon'
						src={teamImage}
						width={580}
						height={440}
					/>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row justify-between gap-5 w-full max-w-[1440px] h-full mx-auto '>
				<div className='flex flex-col  gap-3 shadow-md p-3 rounded items-center  w-full'>
					<div className='flex gap-3 items-center '>
						<PiTargetDuotone
							className='text-brand-blue-300 font-light drop-shadow-icons'
							size={40}
						/>
						<h3 className={`${montSerrat.className} text-2xl `}>Missão</h3>
					</div>
					<p className='text-center md:text-base text-sm'>
						Impulsionar o sucesso de nossos parceiros, oferecendo soluções
						digitais que ampliam a visibilidade e atraem um público qualificado
					</p>
				</div>
				<div className='flex flex-col gap-3 shadow-md p-3 rounded items-center  w-full'>
					<div className='flex gap-3 items-center'>
						<TfiTarget
							className='text-brand-blue-300 font-light drop-shadow-icons'
							size={40}
						/>
						<h3 className={`${montSerrat.className} text-2xl `}>Visão</h3>
					</div>
					<p className='text-center md:text-base text-sm'>
						Inspirar uma nova era de negócios de sucesso, fornecendo soluções
						digitais que alavancam o crescimento, e fortalecem a vantagem
						competitiva dos nossos clientes.
					</p>
				</div>
				<div className='flex flex-col  gap-3 shadow-md p-3 rounded items-center  w-full'>
					<div className='flex gap-3 items-center '>
						<BsPeople
							className='text-brand-blue-300 font-light drop-shadow-icons'
							size={40}
						/>
						<h3 className={`${montSerrat.className} text-2xl `}>Valores</h3>
					</div>
					<p className='text-center md:text-base text-sm'>
						Foco na experiência do usuário - Ética - Empreendedorismo - Inovação
						Autorresponsabilidade
					</p>
				</div>
			</div>
		</div>
	);
}
