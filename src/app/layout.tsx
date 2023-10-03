import './globals.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['300', '400', '500', '600', '700', '900'],
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
				<Script id='google-analytics'>{`
         	window.dataLayer = window.dataLayer || [];
  				function gtag(){dataLayer.push(arguments);}
  				gtag('js', new Date());
  				gtag('config', 'AW-11357924550');
        `}</Script>
				<Script src='https://www.googletagmanager.com/gtag/js?id=AW-11357924550' />
				<Script id='google-clicks'>{`	
					function gtag_report_conversion(url) {
					var callback = function () {
						if (typeof(url) != 'undefined') {
							window.location = url;
						}
					};
						gtag('event', 'conversion', {
							'send_to': 'AW-11357924550/Z4XACPmGsOcYEMbZ8Kcq',
      				'event_callback': callback
					});
					return false;
				}

`}</Script>
				<meta
					name='google-site-verification'
					content='soyOKU1yTH8hYtbuHo-Q2hL-0k7Ucs-N-Fh_rUkyaao'
				/>
				<link
					rel='icon'
					href='/logos/favicon.png'
					sizes='32x32'
					type='image/png'
				/>
			</head>

			<body className={`${poppins.className}`}>{children}</body>
		</html>
	);
}
