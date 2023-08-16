'use client';
import Button from '@/components/atoms/button';
import FormItem from '@/components/atoms/formItem';
import React, { useState } from 'react';
import { Montserrat } from 'next/font/google';

const montSerrat = Montserrat({
	subsets: ['latin'],
	weight: ['700', '900'],
});

export default function Form() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [tel, setTel] = useState('');

	return (
		<form className='bg-brand-neutral-800/50 backdrop-blur-sm p-8 border border-brand-neutral-100/10 rounded-md shadow-xl max-w-[368px] lg:max-w-full'>
			<div className='flex flex-col items-center justify-center pb-5'>
				<h2
					className={`${montSerrat.className} text-center text-2xl`}>
					Entre em contato e faça seu Orçamento
				</h2>
				<span className='w-[80px] lg:w-[120px] h-2 bg-brand-blue-500 rounded-full mt-1 drop-shadow-icons' />
			</div>
			<FormItem
				value={name}
				setValue={setName}
				label='Nome'
				placeholder='Digite seu nome'
			/>
			<FormItem
				value={email}
				setValue={setEmail}
				label='E-mail'
				placeholder='Digite seu e-mail'
			/>
			<FormItem
				value={tel}
				setValue={setTel}
				label='Telefone'
				placeholder='Digite seu telefone'
			/>
			<Button
				onclick={(e) => console.log(e)}
				role='form'
				text={'Enviar'}
			/>
		</form>
	);
}
