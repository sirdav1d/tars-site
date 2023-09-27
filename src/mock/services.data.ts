import lpImage from '../../public/icons/landing-page.webp';
import siteImage from '../../public/icons/local-na-rede-internet.webp';
import blogImage from '../../public/icons/blog.webp';
import lgpdImage from '../../public/icons/cyber-security.webp';
import seoImage from '../../public/icons/seo.webp';
import hostImage from '../../public/icons/hospedagem.webp';
import designImage from '../../public/icons/designer-de-web.webp';
import adsImage from '../../public/icons/logotype.webp';
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
			'Landing pages simplificam a apresentação de produtos, serviços ou informações, tornando mais fácil para os visitantes tomar a ação desejada',
		url: lpImage,
	},
	{
		name: 'SITE INSTITUCIONAL',
		description:
			'Um site institucional oferece uma presença constante na web para sua empresa, permitindo que clientes em potencial o encontrem a qualquer momento.',
		url: siteImage,
	},
	{
		name: 'BLOG EMPRESARIAL',
		description:
			'Um blog permite que sua empresa compartilhe conhecimento e experiência, estabelecendo-se como uma autoridade em seu setor.',
		url: blogImage,
	},
	{
		name: 'LGPD',
		description:
			'Empresas que respeitam a LGPD podem ganhar uma vantagem competitiva, atraindo clientes preocupados com a privacidade.',
		url: lgpdImage,
	},
	{
		name: 'SEO',
		description:
			'Posicionar-se bem nos mecanismos de busca aumenta a visibilidade da empresa, tornando-a mais acessível aos usuários.',
		url: seoImage,
	},

	{
		name: 'HOSPEDAGEM',
		description:
			'Com um serviço de hospedagem, é fácil dimensionar recursos conforme seu site cresce, garantindo que ele permaneça eficiente.',
		url: hostImage,
	},
	{
		name: 'WEB DESIGN',
		description:
			'Sites responsivos se adaptam a diferentes dispositivos, oferecendo uma experiência consistente e agradável para os visitantes',
		url: designImage,
	},
	{
		name: 'GOOGLE ADS',
		description:
			'Diferentemente do SEO, as campanhas do Google Ads podem gerar tráfego e conversões imediatas, acelerando o retorno sobre o investimento.',
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
