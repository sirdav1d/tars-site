import Image from 'next/image';
import logo from 'public/logos/logoHeader.png';
import Button from '../../atoms/button';
import Navigation from '@/components/atoms/navigation';
import Drawer from '@/components/atoms/drawer';

export default function Header() {
	return (
		<div className='fixed left-0 top-0 flex z-40 justify-between bg-brand-neutral-900/40  w-full h-24 items-center py-4 lg:px-20 px-5 border-b  border-brand-neutral-100 border-opacity-20 shadow-lg backdrop-blur-md'>
			<a href='/'>
				<Image
					className='hover:drop-shadow-md transition duration-100'
					src={logo}
					alt='Logo da tas Projetos'
					width={200}
					height={40}
				/>
			</a>
			<div className='hidden lg:flex items-center justify-between w-full'>
				<Navigation />
				<Button
					text='Falar com especialista'
					role='whatsapp'
				/>
			</div>
			<Drawer />
		</div>
	);
}
