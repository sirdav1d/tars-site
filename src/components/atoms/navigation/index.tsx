import React from 'react';

export default function Navigation() {
	return (
		<ul
			className={`flex gap-10 text-xl md:gap-3 font-semibold lg:font-normal md:text-base xl:text-xl xl:gap-10 flex-col lg:flex-row h-full  w-full items-center justify-center `}>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#home'>Home</a>
			</li>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#who'>Quem Somos</a>
			</li>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#service'>Serviços</a>
			</li>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#plans'>Planos</a>
			</li>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#contact'>Contato</a>
			</li>
		</ul>
	);
}
