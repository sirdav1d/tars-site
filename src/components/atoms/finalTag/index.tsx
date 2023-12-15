/** @format */

import React from 'react';

export default function FinalTag() {
	return (
		<div className='flex flex-col gap-5 my-10 max-w-7xl mx-auto'>
			{' '}
			<span className='w-full h-[2px] bg-white/20 rounded-full' />
			<div className='flex gap-3 flex-col sm:flex-row  justify-between text-stone-300 text-[8px] lg:text-sm'>
				<p>
					Desenvolvido pela{' '}
					<a
						className='hover:text-red-500 duration-300 transition-all'
						href='https://tarsprojetos.com/'
						target='_blank'
						rel='noopener noreferrer'>
						Tars Projetos LTDA © {''}
					</a>
					{''}2023 Todos os Direitos Reservados
				</p>
				<div className='flex gap-5 underline text-stone-300 text-[8px] lg:text-sm '>
					<a
						className='hover:text-white'
						href='/resources/Politicas.pdf'
						target='_blank'
						rel='noopener noreferrer'>
						Políticas de Privacidade
					</a>
					<a
						className='hover:text-white'
						href='/resources/Termos_de_uso.pdf'
						target='_blank'
						rel='noopener noreferrer'>
						Termos de Uso
					</a>
				</div>
			</div>
		</div>
	);
}
