import PetElegant from '../../public/assets/Render Pet Elegant.png';
import Dogs from '../../public/assets/Render Project Dog.png';
import ProjectItem from './ProjectItem';

const Projects = (props) => {
	const { projects } = props
	return (
		<div id='projects' className='w-full md:h-screen px-2 pt-24'>
			<div className='max-w-[1240px] mx-auto px-2'>
				<p className='uppercase text-xl text-center tracking-widest text-[#516ce5]'>
					{projects.title}
				</p>
				<h2 className='text-center py-4'>{projects.subtitle}</h2>
				<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem
						title='Pet Elegant'
						backgroundImg={PetElegant}
						url='/ecommerce'
						subtitle='Next.js E-commerce'
						info={projects.info}
					/>
					<ProjectItem
						title='Dogs App'
						backgroundImg={Dogs}
						url='/dogs'
						subtitle='React App'
						info={projects.info}
					/>
				</div>
			</div>
		</div>
	);
};

export default Projects;
