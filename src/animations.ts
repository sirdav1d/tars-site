import { Variants } from 'framer-motion';

export const drawerAnimation: Variants = {
	open: {
		transform: 'translateX(0px)',
		opacity: 1,
		width: '75%',
		transition: {
			duration: 0.5,
			type: 'tween',
			when: 'beforeChildren',
		},
	},
	closed: {
		opacity: 0,
		transform: 'translateX(100%)',
		width: '0px',
		transition: { duration: 0.5, type: 'tween' },
	},
};

export const CardAnimation = {
	open: {
		scaleY: 1.45,
		zIndex: '88888',
		boxShadow: '0px 0px 16px #00A0FF',
		transition: {
			delay: 0.3,
			delayChildren: 0.2,
			duration: 0.6,
			staggerChildren: 0.2,
		},
	},
	close: {
		transition: {
			duration: 0.2,
		},
	},
};

export const CardTitle = {
	open: {
		scaleY: 0.7,
		y: '-72px',
	},
	close: {
		y: 0,
		scale: 1,
	},
};

export const CardSpan = {
	open: {
		opacity: 1,
		y: '22px',
		width: '64px',
		height: '4px',
		transition: {
			duration: 0.8,
		},
	},
	close: {
		opacity: 0,
		width: '0px',
	},
};

export const CardDescription = {
	open: {
		display: 'block',
		scaleY: 0.75,
		opacity: 1,
		y: '12px',
		x: 0,
	},
	close: {
		opacity: 0,
		x: '-20px',
	},
};

export const CardIcon = {
	open: {
		display: 'block',
		scaleY: 0.75,
		opacity: 1,
		y: '32px',
		x: 0,
	},
	close: {
		opacity: 0,
		x: '-20px',
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
		x: '-160px',
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
		x: '-80px',
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
		width: '120px',
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0.6,
		},
	},
	close: {
		x: '-80px',
		width: 0,
		opacity: 0,
	},
};

export const MVVAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0.6,
		},
	},
	close: {
		x: '-80px',
		opacity: 0,
	},
};

export const WhoImageAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.4,
			delay: 0.6,
		},
	},
	close: {
		x: '80px',
		opacity: 0,
	},
};

export const PlansCardAnimation = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			duration: 0.8,
			delayChildren: 0.2,
		},
	},
	close: {
		y: '60px',
		opacity: 0,
	},
};
