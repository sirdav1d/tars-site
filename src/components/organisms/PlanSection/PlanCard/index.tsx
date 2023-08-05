import Button from '@/components/atoms/button';
import { benefitsInitial, benefitsPro } from '@/mock/services.data';
import { Montserrat } from 'next/font/google';
import { BsFillCheckCircleFill } from 'react-icons/bs';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface PlanCardProps {
	text: string[];
	style: string[];
	role: string;
}

export default function PlanCard({ text, style, role }: PlanCardProps) {
	return (
		<>
			<div className='w-[364px] h-[500px] rounded bg-brand-neutral-800/40 border border-brand-neutral-100/20 backdrop-blur-md flex flex-col gap-5 p-4 items-center'>
				<h3
					className={`text-3xl text-center ${montSerrat.className} font-bold`}>
					{role}
				</h3>
				<div className='flex flex-col gap-3 mt-1'>
					{text.map((t, index) => {
						return (
							<div
								key={index}
								className='flex justify-start items-center gap-3 divide-y-2 divide-brand-neutral-50/40 divide-y-reverse'>
								<BsFillCheckCircleFill
									color={`${style[index]}`}
									size={16}
								/>
								<p className='text-sm'>{t}</p>
							</div>
						);
					})}
				</div>
				<Button
					text='Consultar Valor'
					role='CTA'
				/>
			</div>
		</>
	);
}
