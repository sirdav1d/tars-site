/** @format */

import Title from '@/components/atoms/title';
import Image from 'next/image';

interface Benefit {
	head?: string;
	text?: string;
	icon?: JSX.Element;
}

interface FeatureProps {
	title: string;
	description: string;
	benefits?: Benefit[];
	img: any;
	side?: string;
}

export default function FeatureSection(props: FeatureProps) {
	return (
		<div className='rounded flex md:px-14 xl:px-20 px-5 justify-between gap-14 mx-auto h-full py-14 items-center'>
			<div
				className={`flex gap-8  w-full max-w-7xl mx-auto justify-between flex-col  items-center  ${
					props.side === 'left' ? 'lg:flex-row' : 'lg:flex-row-reverse'
				}`}>
				<div className='flex flex-col justify-between h-full gap-10 lg:w-1/2'>
					<div className='flex flex-col gap-5'>
						<Title headline={props.title} />
						<p className='text-base leading-7'>{props.description}</p>
					</div>
					<ul className='flex gap-6 xl:gap-12 flex-col lg:flex-row '>
						{props.benefits?.map((benefit, index) => {
							return (
								<li key={index}>
									<div className='flex flex-col lg:gap-3'>
										<div className='flex flex-col gap-3'>
											{benefit.icon}

											<h3 className='font-montserratTitle font-bold text-lg'>
												{benefit.head}
											</h3>
										</div>
										<p className='text-sm'>{benefit.text}</p>
									</div>
								</li>
							);
						})}
					</ul>
				</div>
				<Image
					src={props.img}
					alt={props.title}
					width={340}
					height={340}
					className='object-contain animate-bounceEaseAnimation'></Image>
			</div>
		</div>
	);
}
