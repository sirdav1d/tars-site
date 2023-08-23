'use client';
import Button from '@/components/atoms/button';
import Label from '@/components/atoms/label';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Montserrat } from 'next/font/google';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import * as Yup from 'yup';
const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function FormComponent() {
	const [loading, setLoading] = useState(false);

	interface FormValues {
		fullName: string;
		phone: string;
		email: string;
	}

	const phoneRegex =
		/^(1[1-9]|[4689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;

	const FormSchema = Yup.object().shape({
		fullName: Yup.string()
			.min(4, 'O campo precisa ter no minimo 4 letras')
			.max(40, 'O campo precisa ter no máximo 40 letras')
			.required('O preenchimento é obrigatório'),

		email: Yup.string()
			.email('E-mail inválido')
			.required('O preenchimento é obrigatório'),

		phone: Yup.string()
			.matches(phoneRegex, 'Número de telefone inválido')
			.required('O preenchimento é obrigatório'),
	});

	const router = useRouter();

	async function handleSubmit(values: FormValues) {
		setLoading(true);

		const { fullName, phone, email } = values;
		try {
			const payload = {
				merge_fields: {
					FNAME: fullName,
					PHONE: phone,
				},
				email_address: email,
				status: 'subscribed',
			};
			console.log('TENTANDO');
			await fetch('http://localhost:3000/api', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload),
			})
				.then((response) => response.json())
				.then((data) => console.log(data));
			router.push('/thanks');
		} catch (error) {
			console.log('DEU RUIM');
			console.log(error);
		}
	}

	return (
		<>
			<Formik
				initialValues={{ fullName: '', phone: '', email: '' }}
				validationSchema={FormSchema}
				onSubmit={handleSubmit}>
				{(formik) => (
					<Form className='bg-brand-neutral-800/50 backdrop-blur-sm p-8 border border-brand-neutral-100/10 rounded-md shadow-xl max-w-[368px] lg:max-w-full'>
						<div className='flex flex-col items-center justify-center pb-5'>
							<h2 className={`${montSerrat.className} text-center text-2xl`}>
								Entre em contato e faça seu Orçamento
							</h2>
							<span className='w-[80px] lg:w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
						</div>
						<div className='flex flex-col py-3 gap-2'>
							<Label
								htmlFor='fullName'
								text='Nome'
								required={true}
							/>
							<Field
								id='fullName'
								name='fullName'
								className='py-2 px-4 rounded outline-none bg-brand-neutral-600/20 border-b text-base font-light border-brand-neutral-400 focus:border-brand-blue-500 focus:shadow-input transition-all duration-200'></Field>
							<ErrorMessage
								className='text-sm text-brand-red-500 font-bold'
								component='div'
								name='fullName'
							/>
						</div>
						<div className='flex flex-col py-3 gap-2'>
							<Label
								htmlFor='email'
								text='E-mail'
								required={true}
							/>
							<Field
								id='email'
								name='email'
								className='py-2 px-4 rounded outline-none bg-brand-neutral-600/20 border-b text-base font-light border-brand-neutral-400 focus:border-brand-blue-500 focus:shadow-input transition-all duration-200'></Field>
							<ErrorMessage
								className='text-sm text-brand-red-500 font-bold'
								component='div'
								name='email'
							/>
						</div>
						<div className='flex flex-col py-3 gap-2'>
							<Label
								htmlFor='phone'
								text='Telefone'
								required={true}
							/>
							<Field
								id='phone'
								name='phone'
								className='py-2 px-4 rounded outline-none bg-brand-neutral-600/20 border-b text-base font-light border-brand-neutral-400 focus:border-brand-blue-500 focus:shadow-input transition-all duration-200'></Field>
							<ErrorMessage
								className='text-sm text-brand-red-500 font-bold'
								component='div'
								name='phone'
							/>
						</div>
						<Button
							loading={loading}
							disabled={!formik.isValid || !formik.dirty}
							role='form'
							text={'Enviar'}
						/>
					</Form>
				)}
			</Formik>
		</>
	);
}
