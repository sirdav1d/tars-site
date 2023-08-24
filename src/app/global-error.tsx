'use client';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Algo deu errado - Agência Tars Projetos',
};

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	const router = useRouter();

	return (
		<html>
			<body className='w-full h-screen flex justify-center items-center max-w-3xl text-brand-neutral-50'>
				<h2>Algo deu errado!</h2>
				<p>{error.message}</p>
				<button onClick={() => router.push('/')}>Voltar para o site</button>
			</body>
		</html>
	);
}
