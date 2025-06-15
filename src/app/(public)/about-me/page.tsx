import AboutMe from '@/components/AboutMe/AboutMe';
import MainPhoto from '@/components/MainPhoto/MainPhoto';

const Page = () => {
	return (
		<div className='p-layout pt-30 flex items-center gap-28'>
			<MainPhoto />
			<AboutMe />
		</div>
	);
};

export default Page;
