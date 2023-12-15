/** @format */

import LinksUs from '@/components/atoms/footer/linksUs';
import FormComponent from '@/components/molecules/form';
import SocialMediaList from '@/components/molecules/socialMediasList';
import Image from 'next/image';
import logo from '../../../../public/logos/logoHorizontal.webp';
import FinalTag from '../finalTag';

export default function Footer() {
	return (
		<div
			id='contact'
			className='h-fit py-10 text-white w-full mx-auto overflow-hidden px-5 lg:px-14'>
			<div className=' flex flex-col gap-5 w-full max-w-7xl mx-auto '>
				<Image
					src={logo}
					alt='logo Tars Projeto LTDA'
					width={340}
					height={400}
					className='grayscale'
				/>
				<div className='flex flex-col-reverse md:flex-row h-full w-full gap-10 justify-center items-center xl:gap-80 lg:justify-start '>
					<div className='flex flex-col gap-2'>
						<h3 className='font-bold lg:text-2xl text-lg mt-3'>Endereços</h3>
						<p className='text-stone-200 text-xs lg:text-base flex flex-col gap-3'>
							São Paulo/SP – Rua Manuel Rodrigues Santiago, 105 Cep 08142-238
						</p>

						<div className='flex flex-col gap-2'>
							<h3 className='font-bold lg:text-2xl text-lg mt-3'>Contatos</h3>
							<ul className='text-stone-200 text-xs lg:text-base flex flex-col gap-3'>
								<li>Fone (11) 98508-3609 </li>
								<li> Fone (21) 96782-1268 </li>
							</ul>
						</div>
						<div className='flex flex-col gap-1'>
							<h3 className='font-bold lg:text-2xl text-lg mt-3'>Site Map</h3>
							<LinksUs />
						</div>
						<SocialMediaList />
					</div>
					<FormComponent />
				</div>
			</div>
		</div>
	);
}
