/** @format */

export default function LinkUs() {
	return (
		<div>
			<section className='flex gap-3'>
				<div className='flex items-start justify-start gap-2 lg:gap-3 lg:text-lg text-xs text-white'>
					<a
						className='hover:text-brand-red-500 hover:underline'
						href='https://tarsprojetos.com/#home'>
						Home
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 hover:underline'
						href='https://tarsprojetos.com/#who'>
						Quem Somos
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 hover:underline'
						href='https://tarsprojetos.com/#service'>
						Serviços
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 hover:underline'
						href='https://tarsprojetos.com/#plans'>
						Planos
					</a>
					<a
						className='hover:text-brand-red-500 transition duration-300 hover:underline'
						href='https://tarsprojetos.com/#contact'>
						Contato
					</a>
				</div>
			</section>
		</div>
	);
}
