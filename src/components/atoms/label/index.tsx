interface LabelProps {
	text: string;
	htmlFor: string;
	required?: boolean;
}

export default function Label({ htmlFor, text, required }: LabelProps) {
	return (
		<div className='flex gap-1'>
			<label
				htmlFor={htmlFor}
				className={`font-montserratTitle text-md`}>
				{text}
			</label>
			{required && <span className='text-brand-red-500'>*</span>}
		</div>
	);
}
