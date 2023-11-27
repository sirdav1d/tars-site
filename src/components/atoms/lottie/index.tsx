/** @format */

'use client';
import loadable from '@loadable/component';
import { AnimatePresence } from 'framer-motion';

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
