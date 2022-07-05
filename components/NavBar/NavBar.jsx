import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../../public/assets/Logo-removebg-preview.png';

const NavBar = () => {
	const [nav, setNav] = useState(false);
	const [scroll, setScroll] = useState(0);
	const [navHidden, setNavHidden] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};

	const controlNavbar = () => {
		if (typeof window !== 'undefined') {
			if (window.scrollY > scroll) {
				setNavHidden(true);
			} else {
				setNavHidden(false);
			}
			setScroll(window.scrollY);
		}
	};

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('scroll', controlNavbar);

			return () => {
				window.removeEventListener('scroll', controlNavbar);
			};
		}
	}, [scroll]);

	return (
		<div
			as='navbar'
			className={
				navHidden
					? 'fixed w-full shadow-xl h-20 z-[100] transform -translate-y-[80px] transition ease-in duration-400 bg-[#ecf0f3]'
					: 'fixed w-full h-20 shadow-xl z-[100] transform translate-y-0 transition ease-in duration-200 bg-[#ecf0f3]'
			}
		>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Link href='/'>
					<Image
						className='cursor-pointer'
						src={Logo}
						alt='Logo'
						width='105'
						height='70'
					/>
				</Link>
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:text-[#516ce5]'>
								Home
							</li>
						</Link>
						<Link href='/#about'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:text-[#516ce5]'>
								About
							</li>
						</Link>
						<Link href='/#skills'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:text-[#516ce5]'>
								Skills
							</li>
						</Link>
						<Link href='/#projects'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:text-[#516ce5]'>
								Projects
							</li>
						</Link>
						<Link href='/#contact'>
							<li className='ml-10 text-sm uppercase hover:border-b hover:text-[#516ce5]'>
								Contact
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className='md:hidden cursor-pointer'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>

			{/* NavBar Small Screen */}
			<div
				className={
					nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
				}
			>
				<div
					className={
						nav
							? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
							: 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
					}
				>
					<div>
						<div className='flex w-full items-center justify-between'>
							<Link href='/'>
								<Image
									className='cursor-pointer'
									src={Logo}
									alt='Logo'
									width='105'
									height='70'
								/>
							</Link>
							<div
								onClick={handleNav}
								className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'
							>
								<AiOutlineClose />
							</div>
						</div>
						<div className='border-b border-gray-300 my-4'>
							<p className='w-[85%] md:w-[90%] py-4'>
								Let&apos;s build something
							</p>
						</div>
					</div>
					<div className='py-4 flex flex-col'>
						<ul className='uppercase'>
							<Link href='/'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Home
								</li>
							</Link>
							<Link href='/#about'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									About
								</li>
							</Link>
							<Link href='/#skills'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Skills
								</li>
							</Link>
							<Link href='/#projects'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Projects
								</li>
							</Link>
							<Link href='/#contact'>
								<li onClick={() => setNav(false)} className='py-4 text-sm'>
									Contact
								</li>
							</Link>
						</ul>
						<div className='pt-40'>
							<p className='uppercase tracking-widest text-[#516ce5]'>
								Let&apos;s connect
							</p>
							<div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaLinkedinIn />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<FaGithub />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<AiOutlineMail />
								</div>
								<div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
									<BsFillPersonLinesFill />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
