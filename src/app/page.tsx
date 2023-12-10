/** @format */

import CTA from '@/components/atoms/cta';
import FeatureSection from '@/components/organisms/FeatureSection';
import HeroSection from '@/components/organisms/HeroSection';
import PlanSection from '@/components/organisms/PlanSection';
import ServiceSection from '@/components/organisms/ServiceSection';
import WhoSection from '@/components/organisms/WhoSection';
import { GiTargeting } from 'react-icons/gi';
import { LiaConnectdevelop, LiaFunnelDollarSolid } from 'react-icons/lia';
import {
	PiHandshakeLight,
	PiLighthouseLight,
	PiShieldCheckLight,
} from 'react-icons/pi';
import imgBlog from '../../public/images/Developer.png';
import imgLP from '../../public/images/LandingPage.png';
import imgSite from '../../public/images/Version.png';

export default function Home() {
	return (
		<main className='min-h-screen overflow-x-hidden relative w-full text-brand-neutral-50 '>
			<HeroSection />
			<WhoSection />
			<FeatureSection
				side='left'
				img={imgLP}
				benefits={[
					{
						head: 'Geração de Leads',
						icon: (
							<LiaFunnelDollarSolid
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
						text: 'As landing pages são projetadas para capturar informações de contato dos visitantes, ajudando a criar uma lista de leads de alta qualidade.',
					},
					{
						head: 'Campanhas Direcionadas',
						icon: (
							<GiTargeting
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
						text: 'Você pode criar landing pages específicas para campanhas de marketing, o que aumenta a relevância e a eficácia da mensagem.',
					},
				]}
				title={'Simplifique a Jornada do Cliente Com Landing Pages Otimizadas'}
				description={
					'Em um mercado altamente competitivo, uma landing page se destaca. Ela proporciona uma experiência personalizada que ressoa com seu público, criando confiança e aumentando as conversões. '
				}
			/>

			<FeatureSection
				side='rigth'
				img={imgSite}
				title={'Conquiste Uma Presença Institucional Online que Gera Confiança'}
				benefits={[
					{
						head: 'Credibilidade e Confiança',
						icon: (
							<PiShieldCheckLight
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
						text: 'Um site institucional cria uma presença sólida e confiável, estabelecendo a credibilidade da sua empresa e construindo confiança entre você e seu público-alvo.',
					},
					{
						head: 'Integração com Redes Sociais',
						icon: (
							<LiaConnectdevelop
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
						text: 'Facilite o compartilhamento de conteúdo através da integração com plataformas de redes sociais, ampliando o alcance da sua mensagem e fortalecendo a presença da sua marca online.',
					},
				]}
				description={
					'Ter um site institucional não é apenas uma presença online; é a porta de entrada para o sucesso nos negócios. Imagine sua empresa tendo uma vitrine digital elegante, aberta 24 horas por dia, 7 dias por semana, acessível à um público global.'
				}
			/>
			<FeatureSection
				side='left'
				img={imgBlog}
				title={
					'Descubra Como Um Blog Empresarial Pode Conquistar e Fidelizar Clientes'
				}
				description={
					'Ter um blog empresarial é uma estratégia essencial para construir autoridade, envolver seu público-alvo e promover seus produtos ou serviços. Com conteúdo relevante e informativo, você atrai visitantes qualificados, aumenta a visibilidade da marca e fortalece a confiança do cliente'
				}
				benefits={[
					{
						head: 'Conexão com o Público-Alvo',
						icon: (
							<PiHandshakeLight
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
						text: 'Ofereça uma experiência personalizada, adaptando sua mensagem e serviços para atender às expectativas individuais do seu público-alvo.',
					},

					{
						head: 'Apoio à Estratégia de Marketing',
						icon: (
							<PiLighthouseLight
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
						text: 'Nosso apoio à estratégia de marketing é um catalisador para a eficácia, proporcionando insights valiosos e ajustes contínuos para alcançar suas metas',
					},
				]}
			/>
			<CTA />
			<ServiceSection />
			<PlanSection />
		</main>
	);
}
