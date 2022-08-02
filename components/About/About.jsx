import Image from 'next/image';
import { useEffect } from 'react';
import Me from '../../public/assets/Matias.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = props => {
	const { about } = props;

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div
			data-aos='fade-up'
			id='about'
			className='w-full h-full lg:h-screen p-2 flex items-center pt-12'
		>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p className='uppercase text-xl text-center tracking-widest text-[#516ce5] 2xl:text-2xl'>
						{about.title}
					</p>
					<h2 className='text-center py-4'>{about.subtitle}</h2>
					<p className='p-2 text-gray-600 2xl:text-xl'>{about.paragraph1}</p>
					<p className='p-2 text-gray-600 2xl:text-xl'>{about.paragraph2}</p>
					<p className='p-2 text-gray-600 2xl:text-xl'>{about.paragraph3}</p>
				</div>
				<div className='w-fit h-auto m-auto border-2 border-[#516ce5] shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:border-sky-300 hover:scale-105 ease-in duration-300'>
					{/* Image className='rounded-xl animate-[flipX_2s_ease-out_infinite]' */}
					<Image
						className='rounded-xl'
						src={Me}
						alt='Matias Picture'
						width={280}
						height={500}
					/>
				</div>
			</div>
		</div>
	);
};

export default About;
