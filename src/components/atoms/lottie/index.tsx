/** @format */

'use client';
import loadable from '@loadable/component';
import { AnimatePresence } from 'framer-motion';

const Lottie = loadable(() => import('lottie-react'), {
	ssr: true,
	fallback: <></>,
});

interface LottieProps {
	lottie: any;
}

export default function LottieComponent(props: LottieProps) {
	return (
		<AnimatePresence mode='wait'>
			<Lottie animationData={props.lottie} />
		</AnimatePresence>
	);
}
