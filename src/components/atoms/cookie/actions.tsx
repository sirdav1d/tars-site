'use server';
import { cookies } from 'next/headers';

export async function createCookie() {
	cookies().set({
		name: 'lgpd',
		value: 'accept',
		httpOnly: true,
		secure: true,
	});
	return;
}
