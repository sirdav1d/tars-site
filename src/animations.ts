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
