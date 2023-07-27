import React from 'react';

export default function Navigation() {
	return (
		<ul className='flex gap-4 text-md font-normal'>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#home'>Home</a>
			</li>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#who'>Quem Somos</a>
			</li>
			<li className='border-b border-transparent  hover:text-brand-red-500 hover:border-brand-red-500 transition duration-300 '>
				<a href='#services'>Serviços</a>
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
