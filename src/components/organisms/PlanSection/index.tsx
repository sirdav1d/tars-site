import {
	benefitsInitial,
	benefitsPro,
	benefitsBussiness,
} from '@/mock/services.data';
import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import PlanCard from './PlanCard';
import image1 from '/public/images/plansImage.png';
import ContentComponent from '@/components/atoms/Content';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function PlanSection() {
	return (
		<div
			id='plans'
			className='flex flex-col w-screen relative gap-6  items-center justify-center'>
			<Image
				className='absolute object-cover w-full h-full mix-blend-overlay'
				width={1600}
				height={640}
				src={image1}
				alt='Apertando as mãos'
			/>
			<div className='mt-6'>
				<ContentComponent headline='Adquira o Plano Ideal para você' />
			</div>

			<div className='flex flex-col xl:flex-row px-40 gap-12 items-center justify-center pb-10'>
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
