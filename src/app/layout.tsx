import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins, Montserrat } from 'next/font/google';

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
				<Script id='GTM-WN493K9M'>{`
					function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
					new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
					j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
					'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
					})(window,document,'script','dataLayer','GTM-WN493K9M')
        `}</Script>

				<link
					rel='icon'
					href='/logos/favicon.webp'
					sizes='32x32'
					type='image/png'
				/>
			</head>

			<body className={`${poppins.className} ${montSerrat.className}`}>
				<noscript>
					<iframe
						src='https://www.googletagmanager.com/ns.html?id=GTM-WN493K9M'
						height='0'
						width='0'
						className='hidden'></iframe>
				</noscript>
				{children}
			</body>
		</html>
	);
}
