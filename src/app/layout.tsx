/** @format */

import BannerLGPD from '@/components/atoms/banner';
import GoogleAnalytics from '@/components/google/GoogleAnalytics';
import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import GoogleADS from '@/components/google/GoogleADS';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '900'],
	display: 'swap',
	variable: '--poppins-body',
});

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['500', '700', '900'],
	display: 'swap',
	variable: '--montserrat-title',
});

export const metadata: Metadata = {
	title: 'Agência Tars Projetos',
	description:
		'A Tars Projetos atua no mercado de tecnologia a mais de 3 anos, expandimos nossos horizontes e nos tornamos especialistas em criação de Landing Pages',
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
					href='/logos/favicon.webp'
					sizes='32x32'
					type='image/png'
				/>
			</head>
			<GoogleAnalytics GA_MEASUREMENT_ID={'G-YG9ZZ2CMJ4'} />
			<GoogleADS ADS_MEASUREMENT_ID={'AW-11357924550'} />
			<body className={`${poppins.className} ${montSerrat.className}`}>
				{children}
				<BannerLGPD />
			</body>
		</html>
	);
}
