import { cookies } from 'next/headers';
import BannerLGPD from '../banner';

export default function CookieComponent() {
	const cookieStore = cookies();
	const lgpd = cookieStore.has('lgpd');
	console.log(lgpd);
	return <>{!lgpd && <BannerLGPD />}</>;
}
