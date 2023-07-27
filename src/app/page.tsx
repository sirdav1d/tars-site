import HeroSection from '@/components/organisms/HeroSection';
import WhoSection from '@/components/organisms/WhoSection';

export default function Home() {
	return (
		<main className='min-h-screen  w-full text-brand-neutral-50 '>
			<HeroSection />
			<WhoSection />
		</main>
	);
}
