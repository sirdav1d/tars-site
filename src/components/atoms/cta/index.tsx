/** @format */

import Button from '../button';

export default function CTA() {
	return (
		<div className='mt-20 flex  flex-col w-full items-center justify-center gap-6 text-center rounded-sm bg-bgCTA p-6'>
			<h2
				className={`text-2xl md:text-4xl font-bold font-montserratTitle max-w-2xl`}>
				Venha descobrir como um site pode te ajudar a vender mais
			</h2>

			<Button
				role='CTA'
				text={'Entrar em Contato'}
			/>
		</div>
	);
}
