import {
	benefitsInitial,
	benefitsPro,
	benefitsBussiness,
} from '@/mock/services.data';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import PlanCard from './PlanCard';
import image from '/public/images/plansImage.png';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function PlanSection() {
	return (
		<div
			id='plans'
			className='flex flex-col w-screen relative gap-20 '>
			<Image
				className='absolute object-cover w-full h-full mix-blend-overlay '
				width={1600}
				height={640}
				src={image}
				alt='Apertando as mãos'
			/>
			<div className='flex flex-col items-center justify-center mt-10 '>
				<h2
					className={`${montSerrat.className} text-3xl text-center mx-5 drop-shadow-lg`}>
					Adquira o Plano Ideal para você
				</h2>
				<span className='w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
			</div>
			<div className='flex flex-col xl:flex-row px-40 gap-12 items-center justify-center pb-10 '>
				<PlanCard
					key={String(benefitsInitial.text)}
					role='Iniciante'
					style={benefitsInitial.style}
					text={benefitsInitial.text}
				/>
				<PlanCard
					key={String(benefitsPro.text)}
					role='Profissional'
					style={benefitsPro.style}
					text={benefitsPro.text}
				/>
				<PlanCard
					key={String(benefitsBussiness.text)}
					role='Empresarial'
					style={benefitsBussiness.style}
					text={benefitsBussiness.text}
				/>
			</div>
		</div>
	);
}
