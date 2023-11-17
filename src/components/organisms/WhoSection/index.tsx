/** @format */

import ContentComponent from '@/components/atoms/Content';
import ImageAnimated from './ImageAnimated';
import MVVComponent from './mvvComponent';

export default function WhoSection() {
	return (
		<div
			id='who'
			className='shadow-md rounded flex px-6   xl:px-20 flex-col justify-center gap-14 items-center h-fit pt-10'>
			<div className='flex items-center justify-between gap-5 max-w-[1060px] mx-auto h-fit'>
				<div className='flex flex-col items-center w-full '>
					<ContentComponent
						headline='Sua Jornada Digital Começa Aqui'
						paragraph1='Nossa agência é a escolha ideal para quem busca resultados reais. Com expertise em web design e marketing digital, criamos websites de alto impacto que não apenas impressionam, mas também geram conversões significativas. Nossa abordagem focada no cliente garante que você participe ativamente do processo, para que o resultado final atenda exatamente às suas necessidades e objetivos'
					/>
				</div>
			</div>
			<div className='flex flex-col lg:flex-row justify-between gap-10 w-full max-w-[1440px] mx-auto pb-3'>
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
					paragraph='Foco na experiência do usuário  - Inovação - Ética -	Autorresponsabilidade - Empreendedorismo'
					title='Valores'
					role='valores'
				/>
			</div>
		</div>
	);
}
