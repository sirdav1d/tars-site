import Image from 'next/image';
import logo from 'public/logos/logoHeader.png';
import Button from '../button';

export default function Header() {
	return (
		<div className='flex justify-between w-full h-24 items-center py-4 px-20 border-b border-brand-neutral-100 border-opacity-20 shadow-xl backdrop-blur-lg'>
			<Image
				src={logo}
				alt='Logo da tas Projetos'
				width={200}
				height={40}
			/>

			<ul className='flex gap-4 text-md font-normal'>
				<li>
					<a href='#home'>Home</a>
				</li>
				<li>
					<a href='#who'>Quem Somos</a>
				</li>
				<li>
					<a href='#services'>Serviços</a>
				</li>
				<li>
					<a href='#plans'>Planos</a>
				</li>
				<li>
					<a href='#contact'>Contato</a>
				</li>
			</ul>
			<Button
				text='Falar com especialista'
				role='whatsapp'
			/>
		</div>
	);
}
