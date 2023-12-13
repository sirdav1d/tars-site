/** @format */

import { FadeAnimation } from '@/animations';
import { MotionDiv } from '../MotionDiv';

interface TitleProps {
	headline: string;
	paragraph1?: string;
	paragraph2?: string;
}

export default function TitleComponent(props: TitleProps) {
	return (
		<MotionDiv
			variants={FadeAnimation}
			initial='close'
			whileInView={'open'}
			viewport={{ once: true }}
			className='flex flex-col w-full md:w-auto pb-3'>
			<h2 className={`font-bold prose-2xl font-montserratTitle`}>
				{props.headline}
			</h2>
			<span className='w-[88px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons ' />
		</MotionDiv>
	);
}
