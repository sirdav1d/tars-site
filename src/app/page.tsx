/** @format */

import CTA from '@/components/atoms/cta';
import ContactSection from '@/components/organisms/ContactSection';
import FeatureSection from '@/components/organisms/FeatureSection';
import HeroSection from '@/components/organisms/HeroSection';
import PlanSection from '@/components/organisms/PlanSection';
import ServiceSection from '@/components/organisms/ServiceSection';
import WhoSection from '@/components/organisms/WhoSection';
import { GiTargeting } from 'react-icons/gi';
import { LiaFunnelDollarSolid } from 'react-icons/lia';
import { PiHandshakeThin, PiTrophyThin, PiGearThin } from 'react-icons/pi';

import lpLottie from '../../public/lotties/lpLottie.json';
import instLottie from '../../public/lotties/institucuionalLottie.json';
import blogLottie from '../../public/lotties/blogLottie.json';

export default function Home() {
	return (
		<main className='min-h-screen overflow-x-hidden relative w-ful text-brand-neutral-50 '>
			<HeroSection />
			<WhoSection />
			<FeatureSection
				side='left'
				lottie={lpLottie}
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
				lottie={instLottie}
				title={'Conquiste Uma Presença Institucional Online que Gera Confiança'}
				description={
					'Destaque-se da concorrência com um site institucional bem projetado. Ele é a vitrine da sua marca, oferecendo um espaço exclusivo para exibir sua singularidade, destacar seus diferenciais e cativar seu público-alvo, criando uma impressão inesquecível'
				}
			/>
			<FeatureSection
				side='left'
				lottie={blogLottie}
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
							<PiHandshakeThin
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
					},
					{
						head: 'Demonstração de Autoridade',
						icon: (
							<PiTrophyThin
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
					},
					{
						head: 'Apoio à Estratégia de Marketing',
						icon: (
							<PiGearThin
								size={40}
								color={'#00A0FF'}
								className='drop-shadow-cards animate-pulse'
							/>
						),
					},
				]}
			/>

			<CTA />
			<ServiceSection />
			<PlanSection />
			<ContactSection />
		</main>
	);
}
