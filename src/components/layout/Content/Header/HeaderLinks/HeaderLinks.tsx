import cn from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { mainPage } from '@/config/main.config';

const links = [
	{ href: mainPage.HOME, label: 'Главная' },
	{ href: mainPage.ABOUT_ME, label: 'Обо мне' },
	{ href: mainPage.DOWNLOAD_PROJECTS, label: 'Посмотреть проекты' },
	{ href: mainPage.CONTACT_ME, label: 'Контакты' },
];

const HeaderLinks = () => {
	const pathname = usePathname();

	return (
		<div className='flex items-center gap-14'>
			{links.map(({ href, label }) => {
				const isActive = pathname === href;

				return (
					<Link
						key={href}
						href={href}
						title={label}
						className={cn('transition-opacity hover:opacity-100 opacity-50 pb-1 text-xl', {
							'text-primary opacity-100': isActive,
						})}
					>
						{label}
					</Link>
				);
			})}
		</div>
	);
};

export default HeaderLinks;
