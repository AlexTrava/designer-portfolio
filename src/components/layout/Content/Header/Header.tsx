import HeaderLinks from '@/components/layout/Content/Header/HeaderLinks/HeaderLinks';

const Header = () => {
	return (
		<header className='pt-14  flex items-center justify-center'>
			<div className='flex items-center gap-8'>
				<HeaderLinks />
			</div>
		</header>
	);
};

export default Header;
