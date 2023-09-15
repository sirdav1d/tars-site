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
		zIndex: '888888',
		boxShadow: '0px 0px 16px #00A0FF',
		transition: {
			delay: 0.2,
			duration: 0.6,
			staggerChildren: 0.2,
		},
	},
	close: {
		transition: {
			delay: 0.1,
			duration: 0.3,
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
		y: '20px',
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
		y: '40px',
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
			duration: 0.6,
			delay: 0,
			ease: 'linear',
		},
	},
	close: {
		x: '-200px',
		opacity: 0,
	},
};

export const SubHeadAnimation = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			duration: 0.6,
			delay: 0.6,
			ease: 'linear',
		},
	},
	close: {
		x: '-200px',
		opacity: 0,
	},
};
