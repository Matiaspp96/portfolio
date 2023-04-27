import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Skills = props => {
	const { skills } = props;

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	const skillsList = [
		{
			id: 1,
			name: 'Javascript',
			className: 'devicon-javascript-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for javascript',
		},
		{
			id: 2,
			name: 'Typescript',
			className: 'devicon-typescript-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for typescript',
		},
		{
			id: 3,
			name: 'Git',
			className: 'devicon-git-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for git',
		},
		{
			id: 4,
			name: 'CSS3',
			className: 'devicon-css3-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for css3',
		},
		{
			id: 5,
			name: 'Next.js',
			className:
				'devicon-nextjs-line text-[85px] md:text-[150px] dark:text-white transition-all duration-100 ease-in-out',
			alt: 'The logo icon for nextjs',
		},
		{
			id: 6,
			name: 'React',
			className: 'devicon-react-original colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for react',
		},
		{
			id: 7,
			name: 'Tailwind',
			className:
				'devicon-tailwindcss-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for tailwindcss',
		},
		{
			id: 8,
			name: 'Node.js',
			className: 'devicon-nodejs-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for nodejs',
		},
		{
			id: 9,
			name: 'GraphQL',
			className: 'devicon-graphql-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for graphql',
		},
		{
			id: 10,
			name: 'MongoDB',
			className: 'devicon-mongodb-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for mongodb',
		},
		{
			id: 11,
			name: 'Express',
			className:
				'devicon-express-original colored text-[85px] md:text-[150px] dark:text-white transition-all duration-100 ease-in-out',
			alt: 'The logo icon for express',
		},
		{
			id: 12,
			name: 'Solidity',
			className:
				'devicon-solidity-plain colored text-[85px] md:text-[150px] dark:text-white transition-all duration-100 ease-in-out',
			alt: 'The logo icon for solidity',
		},
		{
			id: 13,
			name: 'Redux',
			className: 'devicon-redux-original colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for redux',
		},
		{
			id: 14,
			name: 'React Native',
			className: 'devicon-react-original colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for react',
		},
		{
			id: 15,
			name: 'PostgreSQL',
			className: 'devicon-postgresql-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for postgresql',
		},
		{
			id: 16,
			name: 'Firebase',
			className: 'devicon-firebase-plain colored text-[85px] md:text-[150px]',
			alt: 'The logo icon for firebase',
		},
	];

	return (
		<div data-aos='fade-up' id='skills' className='w-full md:h-full px-2 pt-24'>
			<div className='max-w-[1240px] flex flex-col mx-auto text-center items-center'>
				<p className='uppercase text-xl tracking-widest text-[#516ce5] 2xl:text-2xl '>
					{skills.title}
				</p>
				<h2 className='py-4 dark:text-stone-200'>{skills.subtitle}</h2>
				<div className='grid grid-cols-3 md:grid-cols-4 gap-5 grid-auto md:gap-14 '>
					<div className='absolute -z-10 w-32 h-32 top-20 rounded-full filter blur-2xl opacity-50 animate-blob5 md:hidden bg-cyan-500 ' />
					{skillsList.map(skill => (
						<div
							key={skill.id}
							className={
								skill.id === 16
									? 'hidden md:block hover:scale-105 ease-in duration-300'
									: 'hover:scale-105 ease-in duration-300'
							}
							data-aos='fade-up'
						>
							<i className={skill.className} />
							<h4 className='mt-2 dark:text-stone-200 transition-all duration-100 ease-in-out'>
								{skill.name}
							</h4>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Skills;
