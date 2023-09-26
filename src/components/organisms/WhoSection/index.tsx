import ContentComponent from '@/components/atoms/Content';
import ImageAnimated from './ImageAnimated';
import MVVComponent from './mvvComponent';

export default function WhoSection() {
	return (
		<div
			id='who'
			className='shadow-md rounded flex px-6   xl:px-20 flex-col justify-center gap-20 items-center h-fit pt-5'>
			<div className='flex items-center justify-between gap-5 max-w-[1440px] mx-auto h-fit'>
				<div className='flex flex-col items-center w-full '>
					<ContentComponent
						headline='Conheça a Tars Projetos'
						paragraph1='A Tars Projetos atua no mercado de tecnologia a mais de 3 anos,
						expandimos nossos horizontes e nos tornamos especialistas em criação
						de Landing Pages e publicidade online. Nosso objetivo é impulsionar
						o sucesso dos nossos clientes por meio de soluções inovadoras e
						resultados excepcionais.'
						paragraph2='Combinamos criatividade e tecnologia avançada para ajudá-los a se
						destacar em um mercado competitivo. Se você busca resultados
						impactantes, conte com a Tars Projetos para elevar o seu negócio ao
						próximo nível.'
					/>
				</div>
				<ImageAnimated />
			</div>
			<div className='flex flex-col lg:flex-row justify-between gap-5 w-full max-w-[1440px] mx-auto pb-3'>
				<MVVComponent
					paragraph='Impulsionar o sucesso de nossos parceiros, oferecendo soluções
						digitais que ampliam a visibilidade e atraem um público qualificado'
					title='Missão'
					role='missao'
				/>

				<MVVComponent
					paragraph='Inspirar uma nova era de negócios de sucesso, fornecendo soluções
						digitais que alavancam o crescimento, e fortalecem a vantagem
						competitiva dos nossos clientes.'
					title='Visão'
					role='visao'
				/>
				<MVVComponent
					paragraph='Foco na experiência do usuário - Ética - Empreendedorismo - Inovação
						Autorresponsabilidade'
					title='Valores'
					role='valores'
				/>
			</div>
		</div>
	);
}
