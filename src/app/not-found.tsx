import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Página não encontrada - Agência Tars Projetos',
};

export default function NotFound() {
	return (
		<div className='w-full h-screen flex justify-center items-center max-w-3xl text-brand-neutral-50'>
			<h2>Página não encontrada!</h2>
			<p>Clique no link abaixo para retornar</p>
			<Link href='/'>Voltar ao Site</Link>
		</div>
	);
}
