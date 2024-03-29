import React from 'react';

export default function Navigation() {
	return (
		<ul
			className={` font-montserratTitle flex gap-10 text-lg lg:gap-3 font-bold lg:text-md xl:text-lg xl:gap-10 flex-col lg:flex-row h-1/2  w-full items-center justify-center text-white `}>
			<li
				key={'home'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='https://tarsprojetos.com/#home'>Home</a>
			</li>
			<li
				key={'who'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='https://tarsprojetos.com/#who'>Quem Somos</a>
			</li>
			<li
				key='service'
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='https://tarsprojetos.com/#service'>Serviços</a>
			</li>
			<li
				key={'plans'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='https://tarsprojetos.com/#plans'>Planos</a>
			</li>
			<li
				key={'contact'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='https://tarsprojetos.com/#contact'>Contato</a>
			</li>
		</ul>
	);
}
