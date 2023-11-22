/** @format */

import CookieComponent from '@/components/atoms/cookie';
import CTA from '@/components/atoms/cta';
import ContactSection from '@/components/organisms/ContactSection';
import FeatureSection from '@/components/organisms/FeatureSection';
import HeroSection from '@/components/organisms/HeroSection';
import PlanSection from '@/components/organisms/PlanSection';
import ServiceSection from '@/components/organisms/ServiceSection';
import WhoSection from '@/components/organisms/WhoSection';

export default function Home() {
	return (
		<main className='min-h-screen overflow-x-hidden relative w-ful text-brand-neutral-50 '>
			<HeroSection />
			<WhoSection />
			<FeatureSection
				title={'Simplifique a Jornada do Cliente Com Landing Pages Otimizadas'}
				description={
					'Em um mercado altamente competitivo, uma landing page se destaca. Ela proporciona uma experiência personalizada que ressoa com seu público, criando confiança e aumentando as conversões. '
				}
			/>
			<CTA />
			<ServiceSection />
			<PlanSection />
			<ContactSection />
		</main>
	);
}
