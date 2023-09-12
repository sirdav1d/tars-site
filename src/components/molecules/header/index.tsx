import Image from 'next/image';
import logo from 'public/logos/logoHeader.png';
import Button from '../../atoms/button';
import Navigation from '@/components/atoms/navigation';
import Drawer from '../drawer';

export default function Header() {
	return (
		<div className='fixed left-0 top-0 flex z-50 justify-between bg-brand-neutral-900/40  w-full h-24 items-center py-3 xl:px-20 px-6 border-b  border-brand-neutral-100 border-opacity-20 shadow-lg backdrop-blur-md'>
			<div className='max-w-[1440px] flex justify-between items-center w-full mx-auto'>
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
				<div className='lg:hidden'>
					<Drawer />
				</div>
			</div>
		</div>
	);
}
