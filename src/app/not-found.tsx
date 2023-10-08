import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { IoArrowBack } from 'react-icons/io5';

export const metadata: Metadata = {
	title: 'Página não encontrada - Agência Tars Projetos',
	description:
		'Você está nessa página porque houve um erro na sua requisição, volte à página principal do site e preencha o formulário novamente',
};

export default function NotFound() {
	return (
		<main className='p-10 h-full flex items-center min-h-screen overflow-x-hidden relative w-full text-brand-neutral-50'>
			<div className='flex flex-col items-center p-6 max-w-[1440px] mx-auto justify-center m-auto'>
				<Image
					className='w-[220px] '
					src={'/logos/logoHorizontal.webp'}
					width={480}
					height={100}
					alt='logo tars projetos'></Image>
				<h2 className='text-4xl lg:text-6xl text-center font-bold mt-20 mb-5'>
					Página não encontrada!
				</h2>
				<p className='text-center font-semibold'>Clique no link abaixo para retornar</p>

				<div className='w-full items-center font-bold flex justify-center  m-4 mb-20 lg:mb-0'>
					<Link
						href={'/'}
						className='text-brand-blue-500 hover:drop-shadow-icons transition-all duration-300 flex items-center justify-center gap-3'>
						<IoArrowBack size={32} />
						<p className='text-brand-neutral-50'>Voltar ao Site</p>
					</Link>
				</div>
			</div>
		</main>
	);
}
