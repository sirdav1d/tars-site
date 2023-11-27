/** @format */

import LottieComponent from '@/components/atoms/lottie';
import Title from '@/components/atoms/title';

interface Benefit {
	head?: string;
	text?: string;
	icon?: JSX.Element;
}

interface FeatureProps {
	title: string;
	description: string;
	benefits?: Benefit[];
	lottie: any;
	side?: string;
}

export default function FeatureSection(props: FeatureProps) {
	return (
		<div className='rounded flex  md:px-14 xl:px-20 px-5 justify-center gap-14 mx-auto min-h-[64vh] h-full py-10 xl:pt-5 items-center'>
			<div
				className={`flex gap-4 lg:gap-8  w-full max-w-[1440px] mx-auto justify-between flex-col  items-center  ${
					props.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
				}`}>
				<div className='flex flex-col gap-10 lg:w-2/3'>
					<div className='flex flex-col gap-5'>
						<Title headline={props.title} />
						<p className='text-base leading-7'>{props.description}</p>
					</div>
					<ul className='flex gap-6 xl:gap-12 flex-col lg:flex-row '>
						{props.benefits?.map((benefit, index) => {
							return (
								<li key={index}>
									<div className='flex flex-col lg:gap-3'>
										<div className='flex flex-col lg:gap-2'>
											{benefit.icon}

											<h5 className='font-montserratTitle font-bold text-lg'>
												{benefit.head}
											</h5>
										</div>
										<p className='text-sm'>{benefit.text}</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<LottieComponent lottie={props.lottie} />
			</div>
		</div>
	);
}
