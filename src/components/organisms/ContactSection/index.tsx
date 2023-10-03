import Footer from '@/components/atoms/footer';
import FormComponent from '@/components/molecules/form';
import SocialMediaList from '@/components/molecules/socialMediasList';
import Image from 'next/image';

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
					src={'/images/logoHorizontal.webp'}
					alt={'Logo Tars Projetos'}
					width={1440}
					height={600}
				/>
			</div>

			<Footer />
		</div>
	);
}
