import Image from 'next/image';

const Skills = () => {
	return (
		<div id='skills' className='w-full md:h-full px-2 pt-24'>
			<div className='max-w-[1240px] bg-[#ecf0f3] flex flex-col mx-auto text-center items-center'>
				<p className='uppercase text-xl tracking-widest text-[#516ce5]'>
					Skills
				</p>
				{/* <h2 className='py-4'>I have experience whit these technologies</h2> */}
				<h2 className='py-4'>What I Can Do</h2>
				<div className='grid grid-cols-4 gap-5 grid-auto md:gap-14'>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg'
							alt='The logo icon for react'
							title='React'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
							alt='The logo icon for nextjs'
							title='Next.js'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
							alt='The logo icon for javascript'
							title='Javascript'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'
							alt='The logo icon for redux'
							title='Redux'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg'
							alt='The logo icon for html5'
							title='HTML5'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg'
							alt='The logo icon for css'
							title='CSS3'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg'
							alt='The logo icon for tailwindcss'
							title='Tailwind'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
							alt='The logo icon for figma'
							title='Figma'
							width={150}
							height={150}
						/>
					</div>
					{/* </div>
				<div className='grid grid-cols-4 mt-5 px-5 gap-5 grid-auto md:gap-16'> */}
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg'
							alt='The logo icon for git'
							title='Git'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
							alt='The logo icon for nodejs'
							title='Node.js'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg'
							alt='The logo icon for express'
							title='Express'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg'
							alt='The logo icon for postgresql'
							title='PostgreSQL'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg'
							alt='The logo icon for mongodb'
							title='MongoDB'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg'
							alt='The logo icon for sequelize'
							title='Sequelize'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg'
							alt='The logo icon for heroku'
							title='Heroku'
							width={150}
							height={150}
						/>
					</div>
					<div className='hover:scale-105 ease-in duration-300'>
						<Image
							src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
							alt='The logo icon for github'
							title='GitHub'
							width={150}
							height={150}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
