import CTA from '@/components/atoms/cta';
import HeroSection from '@/components/organisms/HeroSection';
import PlanSection from '@/components/organisms/PlanSection';
import ServiceSection from '@/components/organisms/ServiceSection';
import WhoSection from '@/components/organisms/WhoSection';

export default function Home() {
	return (
		<main className='min-h-screen overflow-x-hidden relative  w-full text-brand-neutral-50 '>
			<HeroSection />
			<WhoSection />
			<CTA />
			<ServiceSection />
			<PlanSection />
		</main>
	);
}
