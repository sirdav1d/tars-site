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
		height: '360px',
		transition: {
			duration: 0.8,
			type: 'tween',
			when: 'beforeChildren',
		},
	},
	closed: {
		height: '240px',
		transition: { duration: 0.4, type: 'tween' },
	},
};

export const CardTitleAnimation = {
	open: {
		y: '-100px',
		scale: '60%',
		transition: {
			duration: 0.4,
			type: 'tween',
			when: 'beforeChildren',
		},
	},
	closed: {
		y: 0,
		scale: '100%',
		transition: { duration: 0.5, type: 'tween' },
	},
};
