import { cookies } from 'next/headers';
import BannerLGPD from '../banner';

export default function CookieComponent() {
	const cookieStore = cookies();
	const lgpd = cookieStore.has('lgpd');
	return <>{!lgpd && <BannerLGPD />}</>;
}
