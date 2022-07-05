import PetElegant from '../../public/assets/Render Pet Elegant.png';
import Dogs from '../../public/assets/Render Project Dog.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
	return (
		<div id='projects' className='w-full md:h-screen px-2 pt-24'>
			<div className='max-w-[1240px] mx-auto px-2'>
				<p className='uppercase text-xl text-center tracking-widest text-[#516ce5]'>
					Projects
				</p>
				<h2 className='text-center py-4'>What I&apos;ve Built</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Pet Elegant'
						backgroundImg={PetElegant}
						url='/ecommerce'
						subtitle='Next.js E-commerce'
					/>
					<ProjectItem
						title='Dogs App'
						backgroundImg={Dogs}
						url='/dogs'
						subtitle='React App'
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
