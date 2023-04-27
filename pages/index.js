import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

export default function Home(props) {
	const { main, about, skills, projects, contact } = props;

	return (
		<div>
			<Main main={main} />
			<About about={about} />
			<Skills skills={skills} />
			<Projects projects={projects} />
			<Contact contact={contact} />
			<Footer />
		</div>
	);
}

export async function getStaticProps({ locale }) {
	const response = await import(`../lang/${locale}.json`);

	return {
		props: {
			main: response.main,
			about: response.about,
			skills: response.skills,
			projects: response.projects,
			contact: response.contact,
		},
	};
}
