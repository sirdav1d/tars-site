import Button from '@/components/atoms/button';
import React from 'react';
import Image from 'next/image';
import Footer from '@/components/atoms/footer';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function ContactSection() {
	return (
		<div
			id='contact'
			className='px-4 py-3 lg:p-20 flex items-start justify-center gap-10 lg:gap-48 flex-col lg:flex-row '>
			<aside className='flex flex-col items-start justify-center gap-5 lg:gap-10 '>
				<div>
					<ul className='flex items-center justify-center gap-5 lg:gap-10'>
						<li>facebook</li>
						<li>instagram</li>
						<li>Linkedin</li>
						<li>Email</li>
					</ul>
				</div>
				<div>
					<ul className='flex items-center justify-center gap-5 lg:gap-10 text-sm'>
						<li>Home</li>
						<li>Quem Somos</li>
						<li>Serviços</li>
						<li>Planos</li>
						<li>Contato</li>
					</ul>
				</div>
			</aside>
			<div className='w-full lg:w-1/4 px-10 py-8 mb-16 '>
				<form>
					<h2 className={`${montSerrat.className} text-center text-xl`}>
						Entre em contato e faça seu Orçamento
					</h2>
					<div className='flex flex-col py-3 gap-2'>
						<label
							htmlFor='name'
							className={`${montSerrat.className} text-sm`}>
							Nome
						</label>
						<input
							id='name'
							name='name'
							className='p-2 rounded'
							type='text'
						/>
					</div>
					<div className='flex flex-col py-3 gap-2'>
						<label
							htmlFor=''
							className={`${montSerrat.className} text-sm`}>
							E-mail
						</label>
						<input
							className='p-2 rounded'
							type='text'
						/>
					</div>
					<div className='flex flex-col pt-3 pb-6 gap-2'>
						<label
							htmlFor=''
							className={`${montSerrat.className} text-sm`}>
							Telefone
						</label>
						<input
							className='p-2 rounded'
							type='text'
						/>
					</div>
					<Button
						role='form'
						text={'Enviar'}
					/>
				</form>
			</div>
			<div className='absolute bottom-0  opacity-20 -z-10 '>
				<Image
					className='w-120 h-auto lg:w-[440px] '
					src={'/images/ImageFooter.png'}
					alt={'Logo Tars Projetos'}
					width={440}
					height={600}
				/>
			</div>
			<div className='absolute bottom-0 z-50 left-0'>
				<Footer />
			</div>
		</div>
	);
}
