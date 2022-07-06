import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn} from 'react-icons/fa';

const Main = props => {
	const { main } = props;

	return (
		<div id='home' className='w-full h-screen text-center pt-12'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase text-sm tracking-widest text-gray-400'>
						{main.title}
					</p>
					<h1 className='py-4 text-gray-700'>
						{main.salute}
						<span className='text-[#516ce5]'>Matias</span>
					</h1>
					<h1 className='py-4 text-gray-700'>{main.subtitle}</h1>
					<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
						{main.description}
					</p>
					<div className='flex items-center justify-evenly max-w-[330px] m-auto py-4'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<a
								href='https://www.linkedin.com/in/matias-palomo/'
								target='_blank'
								rel='noreferrer'
							>
								<FaLinkedinIn />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<a
								href='https://github.com/Matiaspp96/'
								target='_blank'
								rel='noreferrer'
							>
								<FaGithub />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<a
								href='mailto:matiaas.p@gmail.com'
								target='_blank'
								rel='noreferrer'
							>
								<AiOutlineMail />
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
							<a href='https://wa.link/sqc4wz' target='_blank' rel='noreferrer'>
								<AiOutlineWhatsApp />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
