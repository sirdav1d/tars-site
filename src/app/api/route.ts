import { NextResponse } from 'next/server';

export async function POST(request: Request) {
	const apiKey = '9a2ad8da46631a1daea5b4cf0ec8297d-us14';

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
		)
			.then((response) => response.json())
			.then((data) => {
				return data;
			});

		return NextResponse.json({ data: data }, { status: 200 });
	} catch (error) {
		console.log(error);
		return NextResponse.json({ message: 'Algo deu errado' }, { status: 400 });
	}
}
