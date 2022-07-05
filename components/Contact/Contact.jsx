import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
	return (
		<div id='contact' className='w-full lg:h-screen'>
			<div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
				<p className='uppercase text-xl text-center tracking-widest text-[#516ce5]'>
					Contact
				</p>
				<h2 className='text-center py-4'>Get In Touch</h2>
				<div className='grid lg:grid-cols-5 gap-8'>
					{/* letf */}
					<div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
						<div className='lg:p-4 h-full rounded-xl'>
							<div className='rounded-xl hover:scale-105 ease-in duration-300 overflow-hidden'>
								<Image
									src='/../public/assets/Get in touch.jpg'
									width={500}
									height={380}
								/>
							</div>
							<div>
								<h2 className='py-2'>Matias</h2>
								<p>Front-End Developer</p>
								<p className='py-4'>
									I am available for freelance or full-time positions. Contact
									me and let&apos;s talk.
								</p>
							</div>
							<div>
								<p className='uppercase pt-8'>Connect with me</p>
								<div className='flex items-center justify-evenly py-4'>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<FaLinkedinIn/>
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<FaGithub />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<AiOutlineMail />
									</div>
									<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 hover:bg-[#516ce5] hover:text-[#ecf0f3]'>
										<BsFillPersonLinesFill />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
						<div className='p-4'>
							<form action=''>
								<div className='grid md:grid-cols-2 gap-4 w-full py-2'>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>Name</label>
										<input
											type='text'
											className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
										/>
									</div>
									<div className='flex flex-col'>
										<label className='uppercase text-sm py-2'>
											Phone Number
										</label>
										<input
											type='text'
											className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
										/>
									</div>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Email</label>
									<input
										type='email'
										className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Subject</label>
									<input
										type='email'
										className='border-2 rounded-lg p-3 flex border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
									/>
								</div>
								<div className='flex flex-col py-2'>
									<label className='uppercase text-sm py-2'>Message</label>
									<textarea
										className='border-2 rounded-lg p-3 border-[#516ce5]/50 focus:outline-none focus:border-[#516ce5] focus:ring-1'
										rows='10'
									></textarea>
								</div>
								<button className='w-full p-4 text-gray-200 mt-4 hover:scale-105 ease-in duration-300'>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className='flex justify-center py-12'>
					<Link href='/'>
						<a>
							<div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
								<HiOutlineChevronDoubleUp className='text-[#516ce5]' size={30}/>
							</div>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
