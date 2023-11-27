/** @format */

'use client';
import loadable from '@loadable/component';

const Lottie = loadable(() => import('lottie-react'), {
	ssr: false,
});

interface LottieProps {
	lottie: any;
}

export default function LottieComponent(props: LottieProps) {
	return (
		<>
			<Lottie animationData={props.lottie} />
		</>
	);
}
