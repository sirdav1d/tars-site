import React from 'react';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function WhoSection() {
	return (
		<div
			id='who'
			className='max-w-[1200px] mt-[80px] flex mx-auto flex-col justify-center items-center'>
			<div className='flex flex-col items-center'>
				<h2 className={`${montSerrat.className} text-2xl`}>
					Descubra a Tars Projetos
				</h2>
				<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1' />
				<p className='mt-10 leading-8 text-lg'>
					A Tars Projetos atua no mercado de tecnologia a mais de 3 anos,
					expandimos nossos horizontes e nos tornamos especialistas em criação
					de Landing Pages e publicidade online. Nosso objetivo é impulsionar o
					sucesso dos nossos clientes por meio de soluções inovadoras e
					resultados excepcionais. Combinamos criatividade e tecnologia avançada
					para ajudá-los a se destacar em um mercado competitivo. Se você busca
					resultados impactantes, conte com a Tars Projetos para elevar o seu
					negócio ao próximo nível.
				</p>
			</div>
			<div className='flex md:flex-row justify-between w-full flex-col mt-10  gap-10 '>
				<div className='flex flex-col items-center  gap-4 w-1/3'>
					<h3 className={`${montSerrat.className} text-lg`}>Missão</h3>
					<p className='text-center'>
						Impulsionar o sucesso de nossos parceiros, oferecendo soluções
						digitais que ampliam a visibilidade e atraem um público qualificado
					</p>
				</div>
				<div className='flex flex-col items-center  gap-4 w-1/3'>
					<h3 className={`${montSerrat.className} text-lg`}>Visão</h3>
					<p className='text-center'>
						Inspirar uma nova era de negócios de sucesso, fornecendo soluções
						digitais que alavancam o crescimento, e fortalecem a vantagem
						competitiva dos nossos clientes.
					</p>
				</div>
				<div className='flex flex-col items-center gap-4 w-1/3'>
					<h3 className={`${montSerrat.className} text-lg`}>Valores</h3>
					<p className='text-center'>
						Foco na qualidade - Inovação Ética - Trabalho em equipe
						Empreendedorismo
					</p>
				</div>
			</div>
		</div>
	);
}
