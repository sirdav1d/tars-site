import { Variant, MotionStyle } from 'framer-motion';

export const drawerAnimation = {
	open: {
		opacity: 1,
		x: 0,
		width: '75%',
		transition: {
			duration: 0.5,
			type: 'tween',
			when: 'beforeChildren',
		},
	},
	closed: {
		opacity: 0,
		x: '100%',
		width: '0px',
		transition: { duration: 0.5, type: 'tween' },
	},
};

export const CardAnimation = {
	open: {
		scaleY: 1.45,
		zIndex: '35',
		boxShadow: '0px 0px 16px #00A0FF',
		transition: {
			type: 'tween',
			ease: 'easeInOut',
			delay: 0.3,
			duration: 0.8,
			staggerChildren: 0.2,
		},
	},
	close: {
		transition: {
			delay: 0.5,
			duration: 0.5,
		},
	},
};

export const CardTitle = {
	open: {
		scale: 0.75,
		scaleY: 0.75,
		y: '-76px',
		transition: {
			type: 'tween',
		},
	},
	close: {
		y: 0,
		scale: 1,
		transition: {
			type: 'tween',
		},
	},
};

export const CardSpan = {
	open: {
		scale: 0.65,
		scaleY: 0.65,
		opacity: 1,
		y: '-78px',
		width: '64px',
		transition: {
			type: 'tween',
			duration: 0.8,
		},
	},
	close: {
		y: 0,
		opacity: 0,
		width: '0px',
		transition: {
			type: 'tween',
		},
	},
};

export const CardDescription = {
	open: {
		display: 'block',
		scaleY: 0.75,
		opacity: 1,

		x: 0,
		transition: {
			type: 'tween',
		},
	},
	close: {
		opacity: 0,
		x: '-20px',

		transition: {
			type: 'tween',
		},
	},
};

export const CardIcon = {
	open: {
		display: 'block',
		scaleY: 0.75,
		opacity: 1,
		y: '-36px',
		x: 0,
		transition: {
			type: 'tween',
		},
	},
	close: {
		opacity: 0,
		x: '-20px',
		transition: {
			type: 'tween',
		},
	},
};
