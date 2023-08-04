import React from 'react';
import { ServicesProps } from '@/mock/services.data';

import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

interface CardProps {
	key: number;
	data: ServicesProps;
}

export default function Card({ key, data }: CardProps) {
	return (
		<div
			className={`w-[340px] h-[280px] lg:w-[240px] lg:h-[200px] bg-brand-neutral-700 flex items-center justify-center rounded border border-brand-neutral-50/40 font-bold text-2xl text-center p-5 shadow-md drop-shadow-md ${montSerrat.className} cursor-pointer hover:scale-110 hover:shadow-brand-red-500 hover:shadow-lg hover:border-brand-red-100 transition-all duration-300`}>
			{data.name}
		</div>
	);
}
