/** @format */

interface StepComponentsProps {
	icon?: JSX.Element;
	text?: string;
	title?: string;
}

export default function StepComponent(props: StepComponentsProps) {
	return (
		<div className='flex items-start justify-start gap-5'>
			<div className='drop-shadow-cards animate-pulse '>{props.icon}</div>
			<div className='flex flex-col gap-1'>
				<h3 className='text-lg font-bold'>{props.title}</h3>
				<p className='text-sm'>{props.text}</p>
			</div>
		</div>
	);
}
