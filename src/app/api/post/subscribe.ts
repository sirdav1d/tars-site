import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const apiKey =
			'80117a2fb6265870978e3c590e7b9272-us1480117a2fb6265870978e3c590e7b9272-us14';

		const listId = 'a17186e5c0';

		const body = JSON.parse(req.body);

		const { email_address, merge_fields } = body;

		if (!email_address) {
			return {
				statusCode: 400,
				body: JSON.stringify({ message: 'Por favor envie um e-mail' }),
			};
		}

		try {
			const payload = {
				email_address,
				merge_fields,
				status: 'subscribed',
			};

			const { data } = await axios.post(
				`https://us14.api.mailchimp.com/3.0/lists/${listId}/members`,

				payload,
				{
					headers: {
						Authorization: `Basic ${apiKey}`,
					},
				},
			);
			console.log(body);
			return {
				statusCode: 200,
				body: JSON.stringify(data),
			};
		} catch (error: any) {
			console.log(error);
			res
				.status(error.response?.status || 500)
				.json({ error: 'Erro ao adicionar usuário' });
		}
	}
}

export { handler };
