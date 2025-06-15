import { Metadata } from 'next';

import IamBlock from '@/components/IamBlock/IamBlock';
import MainPhoto from '@/components/MainPhoto/MainPhoto';

export const metadata: Metadata = {
	description: 'Best designer portfolio!',
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		url: '/',
		title: 'Video',
	},
};

export default function Home() {
	return (
		<section className='p-layout flex items-center justify-between'>
			<IamBlock />
			<MainPhoto />
		</section>
	);
}
