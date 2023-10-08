import { Variants } from 'framer-motion';

export const drawerAnimation: Variants = {
	open: {
		transform: 'translateX(0px)',
		opacity: 1,
		width: '75%',
		transition: {
			duration: 0.5,
			when: 'beforeChildren',
		},
	},
	closed: {
		opacity: 0,
		transform: 'translateX(100%)',
		width: '0px',
		transition: { duration: 0.5 },
	},
};

export const CardAnimation = {
	open: {
		height: 280,
		zIndex: '88888',
		boxShadow: '0px 0px 16px #00A0FF',
		transition: {
			delay: 0.3,
			duration:.5,
			delayChildren: 0.4,
			staggerChildren: 0.2,
		},
	},
	close: {
		transition: {
			delay: 0.3,
		},
	},
};

export const CardMobileAnimation = {
	open: {
		height: 340,
		zIndex: '88888',
		boxShadow: '0px 0px 16px #00A0FF',
		transition: {
			delay: 0.3,
			duration: 0.5,
			delayChildren: 0.4,
			staggerChildren: 0.2,
		},
	},
	close: {
		transition: {
			delay: 0.3,
		},
	},
};

export const CardTitle = {
	open: {
		y: -100,
		transition: {
			delay: 0.4,
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

export const SubHeadAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0.6,
		},
	},
	close: {
		x: 80,
		opacity: 0,
	},
};

export const TitleAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0.2,
		},
	},
	close: {
		x: '-40px',
		opacity: 0,
	},
};

export const ParagraphAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0.4,
		},
	},
	close: {
		x: '-40px',
		opacity: 0,
	},
};

export const TitleSpanAnimation = {
	open: {
		x: 0,
		width: 120,
		opacity: 1,
	},
	close: {
		x: -80,
		width: 0,
		opacity: 0,
	},
};

export const MVVAnimation = {
	open: {
		x: 0,
		opacity: 1,
	},
	close: {
		x: -80,
		opacity: 0,
	},
};

export const WhoImageAnimation = {
	open: {
		x: 0,
		opacity: 1,
	},
	close: {
		x: 80,
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
