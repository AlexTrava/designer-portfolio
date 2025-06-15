import { type Metadata } from 'next';
import { Lato } from 'next/font/google';

import Providers from '@/providers/Providers';

import './globals.css';
import '@/lib/fontawesome';

const lato = Lato({
	subsets: ['latin'],
	weight: ['400', '700', '900'],
});

export const fetchCache = 'default-cache';

export const metadata: Metadata = {
	title: {
		absolute: 'P.Travnov Portfolio',
		template: `%s | P.Travnov`,
	},
	description: 'Portfolio site',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru'>
			<body className={`${lato.className} background-blur`}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
