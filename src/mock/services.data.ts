import lpImage from '../../public/icons/landing-page-icon.png';
import siteImage from '../../public/icons/local-na-rede-internet-icon.png';
import blogImage from '../../public/icons/blog-icon.png';
import lgpdImage from '../../public/icons/seguranca-icon.png';
import seoImage from '../../public/icons/seo-icon.png';
import hostImage from '../../public/icons/hospedagem-icon.png';
import designImage from '../../public/icons/designer-de-web-icon.png';
import adsImage from '../../public/icons/logotype-ads-icon.png';
import { StaticImageData } from 'next/image';

export interface ServicesProps {
	name: string;
	description: string;
	url: StaticImageData;
}

export const servicesData: ServicesProps[] = [
	{
		name: 'LANDING PAGE',
		description:
			'lLorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: lpImage,
	},
	{
		name: 'SITE INSTITUCIONAL',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: siteImage,
	},
	{
		name: 'BLOG EMPRESARIAL',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: blogImage,
	},
	{
		name: 'LGPD',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: lgpdImage,
	},
	{
		name: 'SEO',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: seoImage,
	},

	{
		name: 'HOSPEDAGEM',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: hostImage,
	},
	{
		name: 'WEB DESIGN',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: designImage,
	},
	{
		name: 'GOOGLE ADS',
		description:
			'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI',
		url: adsImage,
	},
];

export const benefitsInitial = {
	text: [
		'01 APLICAÇÃO PARA WEB',
		'WEB DESIGN RESPONSIVO UI/UX',
		'OTIMIZAÇÃO SEO',
		'ADEQUAÇÃO LGPD',
		'SSL GRATUITA',
		'HOSPEDAGEM E MANUTEÇÃO INTEGRADOS',
		'FORMULÁRIO INTEGRADO',
		'BANCO DE DADOS',
		'DOMÍNIO GRÁTIS',
		'GESTÃO DE TRÁFEGO INTEGRADA',
	],
	style: [
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#A3A3A3',
		'#A3A3A3',
		'#A3A3A3',
		'#A3A3A3',
	],
};

export const benefitsPro = {
	text: [
		'03 APLICAÇÕES PARA WEB',
		'WEB DESIGN RESPONSIVO UI/UX',
		'OTIMIZAÇÃO SEO',
		'ADEQUAÇÃO LGPD',
		'SSL GRATUITA',
		'HOSPEDAGEM E MANUTEÇÃO INTEGRADOS',
		'FORMULÁRIO INTEGRADO',
		'BANCO DE DADOS',
		'DOMÍNIO GRÁTIS',
		'GESTÃO DE TRÁFEGO INTEGRADA',
	],
	style: [
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#A3A3A3',
		'#A3A3A3',
		'#A3A3A3',
	],
};

export const benefitsBussiness = {
	text: [
		'APLICAÇÕES PARA WEB - ILIMITADAS',
		'WEB DESIGN RESPONSIVO UI/UX',
		'OTIMIZAÇÃO SEO',
		'ADEQUAÇÃO LGPD',
		'SSL GRATUITA',
		'HOSPEDAGEM E MANUTEÇÃO INTEGRADOS',
		'FORMULÁRIO INTEGRADO',
		'BANCO DE DADOS',
		'DOMÍNIO GRÁTIS',
		'GESTÃO DE TRÁFEGO INTEGRADA',
	],
	style: [
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
		'#34d399',
	],
};
