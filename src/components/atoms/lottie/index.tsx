/** @format */

'use client';

import Lottie from 'lottie-react';

interface LottieProps {
	lottie: any;
}

export default function LottieComponent(props: LottieProps) {
	return (
		<div>
			<Lottie animationData={props.lottie} />
		</div>
	);
}
