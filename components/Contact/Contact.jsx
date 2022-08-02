import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail, AiOutlineWhatsApp } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import getInTouch from '../../public/assets/Get in touch.jpg';
import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';

const Contact = props => {
	const { contact } = props;

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	return (
		<div data-aos='fade-up' id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 pt-16 w-full'>
				<p className='uppercase text-xl text-center tracking-widest text-[#516ce5] 2xl:text-2xl'>
					{contact.title}
				</p>
				<h2 className='text-center py-4'>{contact.subtitle}</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* letf */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full rounded-xl'>
							<div className='rounded-xl hover:scale-105 ease-in duration-300 overflow-hidden'>
								<Image src={getInTouch} width={500} height={380} />
							</div>
							<div>
								<h2 className='py-2'>Matias</h2>
								<p>Front-End Developer</p>
								<p className='py-4'>{contact.description}</p>
							</div>
							<div>
								<p className='uppercase pt-8'>{contact.connect}</p>
								<div className='flex items-center justify-evenly py-4'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<a
											href='https://www.linkedin.com/in/matias-palomo/'
											target='_blank'
											rel='noreferrer'
										>
											<FaLinkedinIn />
										</a>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<a
											href='https://github.com/Matiaspp96/'
											target='_blank'
											rel='noreferrer'
										>
											<FaGithub />
										</a>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<a
											href='mailto:matiaas.p@gmail.com'
											target='_blank'
											rel='noreferrer'
										>
											<AiOutlineMail />
										</a>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<a
											href='https://wa.link/sqc4wz'
											target='_blank'
											rel='noreferrer'
										>
											<AiOutlineWhatsApp />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form
								action='https://formsubmit.co/matiaas.p@gmail.com'
								method='POST'
								name='EmailForm'
							>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											{contact.name}
										</label>
										<input
											type='hidden'
											name='_next'
											value='https://matiasp.vercel.app/'
										></input>
										<input
											type='text'
											name='name'
											required
											className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											{contact.phone}
										</label>
										<input
											type='text'
											name='phone'
											className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										type='email'
										name='email'
										required
										className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>
										{contact.subject}
									</label>
									<input
										type='text'
										name='subject'
										className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>
										{contact.message}
									</label>
									<textarea
										className='border-2 rounded-lg p-3 border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
										rows='10'
									></textarea>
								</div>
								<button
									type='submit'
									className='shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#516ce5] to-[#709dff] w-full p-4 text-gray-200 mt-4 hover:scale-105 ease-in duration-300'
								>
									{contact.send}
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<a>
							<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
								<HiOutlineChevronDoubleUp
									className='text-[#516ce5]'
									size={30}
								/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
