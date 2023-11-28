/** @format */

import LinksUs from '@/components/atoms/footer/linksUs';
import FormComponent from '@/components/molecules/form';
import SocialMediaList from '@/components/molecules/socialMediasList';
import Image from 'next/image';
import logo from '../../../../public/logos/logoHorizontal.webp';

export default function Footer() {
	return (
		<div id='contact' className='h-fit py-10 text-white w-full mx-auto overflow-hidden px-5 lg:px-14'>
			<div className=' flex flex-col gap-5 w-full max-w-[1440px] mx-auto '>
				<Image
					src={logo}
					alt='logo Tars Projeto LTDA'
					width={340}
					height={400}
					className='grayscale'
				/>
				<div className='flex flex-col md:flex-row h-full w-full gap-10 justify-center items-center xl:gap-80 lg:justify-start '>
					<div className='flex flex-col gap-2'>
						<SocialMediaList />
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
					</div>
					<FormComponent />
				</div>

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
		</div>
	);
}

{
	/* export default function Footer() {
return (
	<div className='h-fit py-10 bg-[#001444] text-white'>
		<div className='max-w-[1280px] px-5 lg:mx-14 xl:mx-auto relative flex flex-col gap-5 '>
			
			<div className='flex flex-col lg:flex-row gap-10 justify-between'>
				<div className='flex flex-col gap-5'>
					<h3 className='font-bold lg:text-2xl text-lg'>Endereços</h3>
					<ul className='text-stone-200 text-xs lg:text-base flex flex-col gap-3'>
						<li>
							São Paulo/SP – Rua Visconde de Itaboraí, 269 Cep 03308-050
						</li>
						<li>Curitiba/PR – Rua Dr. Roberto Barroso, 479 Cep 80520-070</li>
						<li>Canoas/RS – Rua Osvaldo cruz, 146 Cep 92110-470</li>
					</ul>
				</div>
				<div className='flex flex-col gap-5'>
					<h3 className='font-bold lg:text-2xl text-lg'>Contatos</h3>
					<ul className='text-stone-200 text-xs lg:text-base flex flex-col gap-3'>
						<li>Fone (11) 2098-4933 </li>
						<li> Fone (41) 3353-1683 </li>
						<li> Fone (51) 3077-0905</li>
					</ul>
				</div>
				<div className='flex flex-col gap-5'>
					<h3 className='font-bold lg:text-2xl text-lg'>Site Map</h3>
					<ul className='text-stone-200 text-base flex flex-wrap lg:flex-col gap-5 lg:gap-2 '>
						<li className=' hover:text-white '>
							<a href='#home'>HOME</a>
						</li>
						<li className=' hover:text-white '>
							<a href='#who'>QUEM SOMOS</a>{' '}
						</li>
						<li className=' hover:text-white '>
							<a href='#servs'>SERVIÇOS</a>
						</li>
						<li className=' hover:text-white '>
							<a href='#clients'>PARCEIROS</a>
						</li>
						<li className=' hover:text-white '>
							<a href='#benefits'>BENEFÍCIOS</a>
						</li>
						<li className=' hover:text-white '>
							<a href='#contact'>CONTATO</a>
						</li>
					</ul>
				</div>

				<ul className='flex lg:flex-col items-center gap-5 h-full'>
					<li>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<BiLogoFacebookSquare
								size={40}
								className='text-lightSRBlue grayscale hover:grayscale-0 hover:drop-shadow-iconShadow duration-300 transition-all ease-linear'
							/>
						</a>
					</li>
					<li>
						<a
							href='https://www.instagram.com/srservicos.oficial/'
							target='_blank'
							rel='noopener noreferrer'>
							<FaInstagramSquare
								size={40}
								className='text-lightSRBlue grayscale hover:grayscale-0 hover:drop-shadow-iconShadow duration-300 transition-all ease-linear'
							/>
						</a>
					</li> 
					 <li>
						<a
							href='http://'
							target='_blank'
							rel='noopener noreferrer'>
							<BiLogoLinkedinSquare
								size={40}
								className='text-lightSRBlue grayscale hover:grayscale-0 hover:drop-shadow-iconShadow duration-300 transition-all ease-linear'
							/>
						</a>
					</li> 
				/* </ul>
			</div>
			<span className='w-full h-[2px] bg-white/20 rounded-full' />
			
		</div>
	</div>
);  */
}
