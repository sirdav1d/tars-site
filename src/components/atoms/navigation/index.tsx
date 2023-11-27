import React from 'react';

export default function Navigation() {
	return (
		<ul
			className={` font-montserratTitle flex gap-10 text-lg lg:gap-3 font-semibold lg:font-normal lg:text-md xl:text-lg xl:gap-10 flex-col lg:flex-row h-1/2  w-full items-center justify-center text-white `}>
			<li
				key={'home'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#home'>Home</a>
			</li>
			<li
				key={'who'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#who'>Quem Somos</a>
			</li>
			<li
				key='service'
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#service'>Serviços</a>
			</li>
			<li
				key={'plans'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#plans'>Planos</a>
			</li>
			<li
				key={'contact'}
				className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#contact'>Contato</a>
			</li>
		</ul>
	);
}
