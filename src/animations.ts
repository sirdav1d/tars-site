/** @format */

import { Variants } from 'framer-motion';

export const drawerAnimation: Variants = {
	open: {
		transform: 'translateX(0px)',
		opacity: 1,
		width: '75%',
	},
	closed: {
		opacity: 0,
		transform: 'translateX(100%)',
		width: '0px',
	},
};

export const CardAnimation: Variants = {
	open: {
		height: 320,
		zIndex: 40,
		boxShadow: '0px 0px 16px #00A0FF',
		transition: {
			delay: 0.2,
			delayChildren: 0.4,
			staggerChildren: 0.2,
		},
	},
	close: {
		transition: {
			delay: 0.4,
		},
	},
};

export const CardTitle = {
	open: {
		y: -120,
		transition: {
			delay: 0.5,
		},
	},
	close: {
		y: 0,
	},
};

export const CardSpan = {
	open: {
		opacity: 1,
		y: 12,
		width: 64,
		height: 4,
		x: 0,
	},
	close: {
		opacity: 0,
		width: 0,
		x: -20,
	},
};

export const CardDescription = {
	open: {
		display: 'block',
		opacity: 1,
		y: 24,
		x: 0,
	},
	close: {
		opacity: 0,
		x: -20,
	},
};

export const CardIcon = {
	open: {
		display: 'block',
		opacity: 1,
		y: 30,
		x: 0,
	},
	close: {
		opacity: 0,
		x: 20,
	},
};

export const FadeAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.7,
			ease: 'linear',
		},
	},
	close: {
		x: '-40px',
		opacity: 0,
	},
};

export const ParagraphFadeAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			delay: 0.3,
			duration: 0.8,
			type: 'spring',
		},
	},
	close: {
		x: '-40px',
		opacity: 0,
	},
};

export const SubHeadAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.3,
			delay: 0.2,
		},
	},
	close: {
		x: 40,
		opacity: 0,
	},
};

export const PlansCardAnimation = {
	open: {
		y: 0,
		opacity: 1,
	},
	close: {
		y: 64,
		opacity: 0,
	},
};

export const SpanHeadAnimation: Variants = {
	initial: { y: -15, opacity: 0 },
	animate: {
		y: 0,
		opacity: 1,
	},
	exit: {
		y: 20,
		opacity: 0,
	},
};

export const StepWrapperFadeAnimation: Variants = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			delayChildren: 0.3,
			staggerChildren: 0.3,
		},
	},
	close: {
		x: '60px',
		opacity: 0,
	},
};

export const StepComponentFadeAnimation: Variants = {
	open: {
		x: 0,
		opacity: 1,
	},
	close: {
		x: '60px',
		opacity: 0,
	},
};
