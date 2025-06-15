'use client';

import { m } from 'framer-motion';

const AboutMe = () => {
	return (
		<m.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: 'easeOut' }}
		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto cum eveniet fuga
				inventore iure magni minus nam optio praesentium quas quasi, quidem quisquam saepe
				temporibus? Earum excepturi fugiat iusto minima mollitia perferendis sint voluptatum? Animi
				commodi consequuntur deserunt distinctio dolor eaque eveniet, harum impedit, molestiae
				necessitatibus nihil non, quae quia ratione tempora ullam voluptatem. Cupiditate deleniti
				est fugit harum hic laborum officia quam reprehenderit sequi voluptas! Dolore fugit in
				inventore itaque iure, nobis perspiciatis quo! Cumque eaque, esse ipsa ipsum nulla odio quia
				quidem repudiandae similique suscipit tempora veritatis, voluptatum! Ad at ipsa iusto nihil
				praesentium soluta ullam velit?
			</p>
		</m.div>
	);
};
export default AboutMe;
