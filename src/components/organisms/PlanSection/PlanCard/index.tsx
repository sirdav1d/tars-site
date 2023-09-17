import Button from '@/components/atoms/button';
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
			<div className='z-30  min-w-[344px] h-fit rounded bg-brand-neutral-950/50 border border-brand-neutral-100/20 backdrop-blur-sm flex flex-col gap-4 p-5 items-center shadow-xl hover:scale-110 transition-all duration-300 ease-in-out'>
				<h3
					className={`text-xl text-center ${montSerrat.className} font-bold drop-shadow-lg`}>
					{role}
				</h3>
				<div className='flex flex-col gap-3 mt-1 drop-shadow-lg'>
					{text.map((t, index) => {
						return (
							<div
								key={index}
								className='flex justify-start items-center gap-3'>
								<BsFillCheckCircleFill
									color={`${style[index]}`}
									size={14}
								/>
								<p className='text-xs'>{t}</p>
							</div>
						);
					})}
				</div>
				<Button
					text='Consultar Valor'
					role='plans'
				/>
			</div>
		</>
	);
}
