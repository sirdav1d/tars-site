import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
	title: 'Tars Projetos',
	description:
		'A Tars Projetos atua no mercado de tecnologia a mais de 3 anos, expandimos nossos horizontes e nos tornamos especialistas em criação de Landing Pages e publicidade online.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-BR'>
			<head>
				<link
					rel='icon'
					href='/logos/favicon.png'
					sizes='32x32'
					type='image/png'
				/>
			</head>

			<body className={poppins.className}>{children}</body>
		</html>
	);
}
