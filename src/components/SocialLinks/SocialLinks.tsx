'use client';

import { faTelegram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { contactsConfig } from '@/config/contacts.config';

const linksData = [
	{ href: contactsConfig.VK, label: 'Вконтакте', icon: faVk, color: '#0276fd' },
	{ href: contactsConfig.TELEGRAM, label: 'Телеграмм', icon: faTelegram, color: '#29a9ea' },
	{ href: contactsConfig.EMAIL, label: 'Почта', icon: faEnvelope },
];

const SocialLinks = () => {
	return (
		<div className='pt-6 flex items-center gap-12'>
			{linksData.map(link => {
				return (
					<a
						key={link.href}
						href={link.href}
						target='_blank'
						title={link.label}
						className='transition-opacity hover:opacity-100 opacity-80 pb-1'
					>
						<FontAwesomeIcon
							icon={link.icon}
							color={link.color}
							size='3x'
						/>
					</a>
				);
			})}
		</div>
	);
};

export default SocialLinks;
