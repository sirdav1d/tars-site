/** @format */

import { FadeAnimation } from '@/animations';
import { MotionDiv } from '@/components/atoms/MotionDiv';
import { TypeAnimationComponent } from '@/components/atoms/typeAnimationComponent';

export default function Headline() {
	return (
		<>
			<MotionDiv variants={FadeAnimation} initial='close' animate='open' className='flex gap-3  h-full'>
				<h1
					className={`font-bold  text-3xl md:text-4xl h-full mx-auto text-brand-neutral-50  text-left `}>
					Oferecemos a chave para o sucesso digital, com serviços que garantem_
					<br />
					<span
						aria-label='Liderança, Performance e Oportunidades'
						className='text-brand-red-500 absolute left-0 md:bottom-auto md:left-auto font-bold text-3xl leading-loose md:text-4xl mt-4 '>
						<TypeAnimationComponent />
					</span>
				</h1>
			</MotionDiv>
		</>
	);
}
