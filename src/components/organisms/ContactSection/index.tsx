import Footer from '@/components/atoms/footer';
import Image from 'next/image';
import FormComponent from '@/components/molecules/form';
import SocialMediaList from '@/components/molecules/socialMediasList';
import LinkUs from '../../atoms/footer/linksUs';

export default function ContactSection() {
	return (
		<div
			id='contact'
			className='px-4 py-5 lg:py-10 flex flex-col items-center  justify-center gap-10  '>
			<SocialMediaList />
			<FormComponent />

			<div className='absolute opacity-30 -z-10 '>
				<Image
					className='h-auto lg:w-[1024px] w-[380px] '
					src={'/images/logoFooter.png'}
					alt={'Logo Tars Projetos'}
					width={1440}
					height={600}
				/>
			</div>

			<Footer />
		</div>
	);
}
