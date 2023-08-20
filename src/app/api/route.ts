import axios from 'axios';
import { redirect } from 'next/navigation';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const apiKey = '80117a2fb6265870978e3c590e7b9272-us14';

	const listId = 'a17186e5c0';

	const { email_address, merge_fields, status } = await request.json();

	try {
		const newContact = {
			email_address,
			merge_fields,
			status,
		};

		const data = await fetch(
			`https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Basic ${apiKey}`,
				},
				body: JSON.stringify(newContact),
			},
		).then((response) => response.json());

		return NextResponse.json({ data: data }, { status: 201 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: 'Algo deu errado' }, { status: 500 });
	}
}
