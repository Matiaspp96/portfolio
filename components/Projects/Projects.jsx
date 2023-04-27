import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import PetElegant from '../../public/assets/Render Pet Elegant.png';
import Dogs from '../../public/assets/Render Project Dog.png';
import NFTDrop from '../../public/assets/Render NFT Drop.png';
import ProjectItem from './ProjectItem';
import Taskhub from '../../public/assets/Taskhub mockup.png';
import Bonvo from '../../public/assets/Bonvo mockup.png';

const Projects = props => {
	const { projects } = props;

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div
			data-aos='fade-up'
			id='projects'
			className='w-full md:h-full px-2 pt-24'
		>
			<div className='max-w-[1240px] mx-auto px-2'>
				<p className='uppercase text-xl text-center tracking-widest text-[#516ce5] 2xl:text-2xl '>
					{projects.title}
				</p>
				<h2 className='text-center py-4 dark:text-stone-300'>
					{projects.subtitle}
				</h2>
				<div className='grid md:grid-cols-2 gap-8 relative place-items-center md:place-items-stretch'>
					<div className='absolute -z-10 w-72 h-72 top-56 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob4 animation-delay-2000 lg:animate-blob3 lg:animation-delay-4000 bg-cyan-500' />
					<div className='absolute -z-10 w-72 h-72 top-56 rounded-full mix-blend-multiply filter blur-2xl opacity-50 animate-blob4 lg:animate-blob3 lg:animation-delay-7000 bg-pink-500' />
					<div className='absolute -z-10 w-72 h-72 top-56 rounded-full mix-blend-multiply filter blur-2xl hidden md:block lg:opacity-50 animate-blob4 lg:animate-blob3 bg-purple-500' />
					<ProjectItem
						title='Pet Elegant'
						backgroundImg={PetElegant}
						url='/ecommerce'
						subtitle='Next.js E-commerce'
						info={projects.info}
						even={true}
					/>
					<ProjectItem
						title='Dogs App'
						backgroundImg={Dogs}
						url='/dogs'
						subtitle='React App'
						info={projects.info}
						even={false}
					/>
					<ProjectItem
						title='NFT Drop'
						backgroundImg={NFTDrop}
						url='/nftdrop'
						subtitle='Next.js | Web3'
						info={projects.info}
						even={true}
					/>
					<ProjectItem
						title='Marketplace Real Estate Web3'
						backgroundImg={Bonvo}
						url='/bonvo'
						subtitle='React | Web3'
						info={projects.info}
						even={false}
					/>
					<ProjectItem
						title='TaskHub'
						backgroundImg={Taskhub}
						url='/taskhub'
						subtitle='Next.js | GraphQL'
						info={projects.info}
						even={true}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
