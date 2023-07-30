import React from 'react';
import { Montserrat } from 'next/font/google';
import { TbTargetArrow } from 'react-icons/tb';
import { BiTargetLock } from 'react-icons/bi';
import { SlDiamond } from 'react-icons/sl';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function WhoSection() {
	return (
		<div
			id='who'
			className='  flex  ml-5 lg:ml-16 mr-5 lg:mr-16 flex-col lg:flex-row justify-between items-start '>
			<div className='flex flex-col items-center w-full lg:w-1/2 h-full p-5 lg:p-10'>
				<h2 className={`${montSerrat.className} text-2xl`}>
					Descubra a Tars Projetos
				</h2>
				<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1' />
				<p className='mt-6 leading-8 text-lg '>
					A Tars Projetos atua no mercado de tecnologia a mais de 3 anos,
					expandimos nossos horizontes e nos tornamos especialistas em criação
					de Landing Pages e publicidade online. Nosso objetivo é impulsionar o
					sucesso dos nossos clientes por meio de soluções inovadoras e
					resultados excepcionais.
					<br /> Combinamos criatividade e tecnologia avançada para ajudá-los a
					se destacar em um mercado competitivo. Se você busca resultados
					impactantes, conte com a Tars Projetos para elevar o seu negócio ao
					próximo nível.
				</p>
			</div>
			<div className='flex justify-between gap-6 w-full lg:w-1/2 flex-col h-full p-5 lg:p-10'>
				<div className='flex flex-col  gap-3'>
					<div className='flex gap-3 items-center'>
						<TbTargetArrow
							className='text-brand-blue-300 font-light'
							size={28}
						/>
						<h3 className={`${montSerrat.className} text-lg self-start`}>
							Missão
						</h3>
					</div>
					<p className='text-justify text-base'>
						Impulsionar o sucesso de nossos parceiros, oferecendo soluções
						digitais que ampliam a visibilidade e atraem um público qualificado
					</p>
				</div>
				<div className='flex flex-col gap-3 '>
					<div className='flex gap-3 items-center'>
						<BiTargetLock
							className='text-brand-blue-300 font-light'
							size={28}
						/>
						<h3 className={`${montSerrat.className} text-lg self-start`}>
							Visão
						</h3>
					</div>
					<p className='text-justify text-base'>
						Inspirar uma nova era de negócios de sucesso, fornecendo soluções
						digitais que alavancam o crescimento, e fortalecem a vantagem
						competitiva dos nossos clientes.
					</p>
				</div>
				<div className='flex flex-col  gap-3 '>
					<div className='flex gap-3 items-center'>
						<SlDiamond
							className='text-brand-blue-300 font-light'
							size={28}
						/>
						<h3 className={`${montSerrat.className} text-lg self-start`}>
							Valores
						</h3>
					</div>
					<p className='text-justify text-base'>
						Foco na qualidade - Inovação Ética - Trabalho em equipe
						Empreendedorismo
					</p>
				</div>
			</div>
		</div>
	);
}
